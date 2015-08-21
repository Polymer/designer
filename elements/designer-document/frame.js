(function() {
/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
(function(scope) {
  'use strict';

  /** @type {Object<key, *>} A mapping of ids to modules. */
  var _modules = Object.create(null);

  // `define`

  /**
   * An AMD-compliant implementation of `define` that does not perform loading.
   *
   * @see https://github.com/amdjs/amdjs-api/wiki/AMD
   *
   * Dependencies must be loaded prior to calling `define`, or you will receive
   * an error.
   *
   * @param {string=} id The id of the module being defined. If not provided,
   *     one will be given to the module based on the document it was called in.
   * @param {Array<string>=} dependencies A list of module ids that should be
   *     exposed as dependencies of the module being defined.
   * @param {function(...*)|*} factory A function that is given the exported
   *     values for `dependencies`, in the same order. Alternatively, you can
   *     pass the exported value directly.
   */
  function define(id, dependencies, factory) {
    factory = factory || dependencies || id;
    if (!Array.isArray(dependencies)) {
      // TODO(nevir): Default dependencies should be require, exports, module.
      dependencies = Array.isArray(id) ? id : [];
    }
    var inferredId = _inferModuleId();
    if (typeof id !== 'string') {
      id = inferredId;
    }
    // TODO(nevir): Just support \ as path separators too. Yay Windows!
    if (id.indexOf('\\') !== -1) {
      throw new TypeError('Please use / as module path delimiters');
    }
    if (id in _modules) {
      throw new Error('The module "' + id + '" has already been defined');
    }
    // Extract the entire module path up to the file name. Aka `dirname()`.
    //
    // TODO(nevir): This is naive; doesn't support the vulcanize case.
    var base = inferredId.match(/^(.*?)[^\/]*$/)[1];
    _modules[id] = _runFactory(base, dependencies, factory);
    return _modules[id];
  }

  // Semi-private. We expose this for tests & introspection.
  define._modules = _modules;

  /**
   * Let other implementations know that this is an AMD implementation.
   * @see https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property-
   */
  define.amd = {};

  // Utility

  /** @return {string} A module id inferred from the current document/import. */
  function _inferModuleId() {
    var script = document.currentScript;
    if (script.hasAttribute('as')) {
      return script.getAttribute('as');
    }

    var doc = script && script.ownerDocument || document;
    if (!doc.baseURI) {
      throw new Error('Unable to determine a module id: No baseURI for the document');
    }

    if (script.hasAttribute('src')) {
      return new URL(script.getAttribute('src'), doc.baseURI).toString();
    }

    return doc.baseURI;
  }

  /**
   * Calls `factory` with the exported values of `dependencies`.
   *
   * @param {string} base The base path that modules should be relative to.
   * @param {Array<string>} dependencies
   * @param {function(...*)|*} factory
   */
  function _runFactory(base, dependencies, factory) {
    if (typeof factory !== 'function') return factory;

    var modules = dependencies.map(function(id) {
      id = _resolveRelativeId(base, id);
      if (!(id in _modules)) {
        throw new ReferenceError('The module "' + id + '" has not been loaded');
      }
      return _modules[id];
    });
    return factory.apply(null, modules);
  }

  /**
   * @param {string} base The module path/URI that acts as the relative base.
   * @param {string} id The module ID that should be relatively resolved.
   * @return {string} The expanded module ID.
   */
  function _resolveRelativeId(base, id) {
    if (id[0] !== '.') return id;
    // We need to be careful to only process the path of URLs. This regex
    // strips off the URL protocol and domain, leaving us with just the URL's
    // path.
    var match  = base.match(/^([^\/]*\/\/[^\/]+\/)?(.*?)\/?$/);
    var prefix = match[1] || '';
    // We start with the base, and then mutate it into the final path.
    var terms   = match[2] ? match[2].split('/') : [];
    // Split the terms, ignoring any leading or trailing path separators.
    var idTerms = id.match(/^\/?(.*?)\/?$/)[1].split('/');
    for (var i = 0; i < idTerms.length; i++) {
      var idTerm = idTerms[i];
      if (idTerm === '.') {
        continue;
      } else if (idTerm === '..') {
        terms.pop();
      } else {
        terms.push(idTerm);
      }
    }
    return prefix + terms.join('/');
  }

  // Exports
  scope.define = define;

})(this);

/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/dom-utils', function() {
  'use strict';

  const sourceIdAttribute = '__designer_node_id__';

  /**
   * @param {Element} element
   * @return {string} The source ID of the element, which is assigned to the to
   *     the element before its document is parsed.
   */
  function getSourceId(element) {
    return element.getAttribute(sourceIdAttribute);
  }

  /**
   * @param {Node} node
   * @return {Array<Node>} The ancestors of [node] not including the node's
   *     owner document.
   */
  function getAncestors(node) {
    var ancestors = [];
    while (node.parentNode !== node.ownerDocument) {
      ancestors.push(node);
      node = node.parentNode;
    }
    return ancestors.reverse();
  }

  function isDescendant(element, target) {
    while (element.parentNode) {
      if (element.parentNode == target) {
        return true;
      }
      element = element.parentNode;
    }
  }

  /**
   * Returns the document element (<html>), even in minimal DOMs that don't
   * define Document.documentElement, like parse5's AST.
   */
  function getDocumentElement(doc) {
    return doc.documentElement ||
        (function() {
          for (var i = 0; i < doc.childNodes.length; i++) {
            var n = doc.childNodes[i];
            if (n.nodeName.toUpperCase() == 'HTML') {
              return n;
            }
          }
        })();
  }

  function designerNodeFilter(node) {
    return node.nodeType !== Node.ELEMENT_NODE ||
        !node.hasAttribute('designer-exclude');
  }

  function parseQueryString(queryString) {
    if (queryString.startsWith('?')) {
      queryString = queryString.slice(1);
    }
    let params = new Map();
    queryString.split('&').forEach(function(e) {
      let keyValue = e.split('=');
      if (keyValue[0]) {
        params.set(keyValue[0], keyValue[1] || true);
      }
    });
    return params;
  }

  /**
   * Converts a client position to a local position within [node].
   *
   * @param node {Node}
   * @param clientX {number}
   * @param clientY {number}
   * @return {{
   *   x: number,
   *   y: number,
   * }}
   */
  function toLocalPosition(node, clientX, clientY) {
    let bounds = node.getBoundingClientRect();
    return {
      x: clientX - bounds.left,
      y: clientY - bounds.top,
    };
  }

  function attributesForElement(element) {
    return Array.prototype.reduce.call(element.attributes, function(attributes, attribute) {
      attributes[attribute.name] = attribute.value;
      return attributes;
    }, {});
  }

  /**
   * Sets the left, top, width and height of [element] from [bounds]. Useful
   * for absolutely positioning elements.
   *
   * @param element {Element}
   * @param bounds {ClientRect|Object}
   */
  function setBounds(element, bounds) {
    var style = element.style;
    style.top = bounds.top + 'px';
    style.left = bounds.left + 'px';
    style.width = bounds.width + 'px';
    style.height = bounds.height + 'px';
  }


  /**
   * Sets [element]'s style display property to [display] or 'block' if
   * [display] is not specified.
   *
   * @param element {Element}
   * @param display {string|Null}
   */
  function show(element, display) {
    element.style.display = display || 'block';
  }

  /**
   * Sets [element]'s style display property to 'none';
   *
   * @param element {Element}
   */
  function hide(element) {
    element.style.display = 'none';
  }

  function clearChildren(element) {
    let domApi = Polymer.dom(element);
    let child;
    while ((child = domApi.firstChild) != null) {
      domApi.removeChild(child);
    }
  }

  function renameNode(node, newName) {
    let doc = node.ownerDocument;
    let parent = node.parentNode;
    let newNode = doc.createElement(newName);
    let children = node.childNodes;
    let attributes = node.attributes;

    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      newNode.appendChild(child);
    }

    for (let i = 0; i < attributes.length; i++) {
      let attribute = attributes[i];
      newNode.setAttribute(attribute.name, attribute.value);
    }

    parent.replaceChild(newNode, node);
  }

  return {
    attributesForElement: attributesForElement,
    clearChildren: clearChildren,
    designerNodeFilter: designerNodeFilter,
    getAncestors: getAncestors,
    getDocumentElement: getDocumentElement,
    getSourceId: getSourceId,
    hide: hide,
    isDescendant: isDescendant,
    isDescendant: isDescendant,
    parseQueryString: parseQueryString,
    renameNode: renameNode,
    setBounds: setBounds,
    show: show,
    sourceIdAttribute: sourceIdAttribute,
    toLocalPosition: toLocalPosition,
  };

});

/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

 define('polymer-designer/path', ['polymer-designer/dom-utils'],
     function(domUtils) {
  'use strict';

  /**
   * Returns the path to [node] in [doc]. A path is a slash-separated list
   * of segments, each of which is the node name and the the index into its
   * parent nodes childNodes (for error detection).
   *
   * This function is sensitive to empty and adjacent Text nodes, so you
   * probably want to call doc.normalize() first!
   *
   * @param {Node|Object} node The DOM Node or Parse5 AST node to get the path
   *   of.
   * @param {Document|Object} doc The DOM or Parse5 Document containing [node].
   * @param {function(Node|Object)} filter An optional function that excludes
   *     nodes from the path when it returns `false`.
   *
   * @returns {string} the path to [node]
   */
  function getNodePath(node, doc, filter) {
    var doc = doc || document;
    var path = [];
    while (node && node.parentNode && node.parentNode !== doc) {
      let children = Array.prototype.slice.call(node.parentNode.childNodes);

      let index = -1;
      for (let child of children) {
        if (filter && !filter(child)) {
          continue;
        }
        index += 1;
        if (child === node) {
          break;
        }
      }
      if (index === -1) {
        throw new Error('Internal Error');
      }
      path.push(`${node.nodeName.toUpperCase()}:${index}`);
      node = node.parentNode;
    }
    return path.reverse().join('/');
  }

  /**
   * Returns the node for the given [path] within [doc]. The path must be
   * format acording to [getNodePath].
   *
   * This function is sensitive to empty and adjacent Text nodes, so you
   * probably want to call doc.normalize() first!
   *
   * @param {string} path The path to the desired node
   * @param {Document|Object} doc
   * @param {function(Node|Object)} filter An optional function that excludes
   *     nodes from the path when it returns `false`.
   *
   * @returns {Node|Object}
   */
  function getNodeFromPath(path, doc, filter) {
    var doc = doc || document;
    var segments = path.split('/');

    var node = domUtils.getDocumentElement(doc);
    var i = 0;
    while (i < segments.length && node) {
      var children = Array.prototype.slice.call(node.childNodes);
      var segment = segments[i].split(':');
      var nodeName = segment[0];
      var index = parseInt(segment[1], 10);
      if (index >= children.length) {
        throw new RangeError(
            `Invalid index: ${index} is out of range for length ` +
            `${children.length}`);
      }
      let j = 0;
      for (let child of children) {
        if (filter && !filter(child)) {
          continue;
        }
        if (j === index) {
          node = child;
          break;
        }
        j += 1;
      }
      if (!node || node.nodeName.toUpperCase() != nodeName) {
        throw new Error(`Expected node name ${nodeName} but was ` +
            `${node.nodeName}`);
      }
      i++;
    }
    return node;
  }

  return {
    getNodePath: getNodePath,
    getNodeFromPath: getNodeFromPath,
  };

});

/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

 define('polymer-designer/css', [
   'polymer-designer/path',
   'polymer-designer/dom-utils'], function(pathLib, domUtils) {

  'use strict';

  return {

    /**
     * @typedef {Object} StyleRuleInfo
     * @property {string} selector The CSS selector for the rule.
     * @property {number} index The numerical index of the rule, relative to
     *     other rules with the same selector in the same stylesheet.
     * @property {string} text A textual form of the CSS rules.
     * @property {Object<string, string>} styles A map of CSS properties to
     *     their values (as strings).
     */

    /**
     * @typedef {Object} StyleSheetInfo
     * @property {string} ownerNodePath A pathlib path representing the
     *     `<style>` or `<link>` element that defines the stylesheet.
     * @property {string} stylesheetUrl The URL for the stylesheet, if relevant.
     * @property {Array<StyleRuleInfo>} rules The rules matching the element.
     */

    // Until http://dev.w3.org/csswg/cssom/#dom-getstyleutils-cascadedstyle

    /**
     * Finds all style rules matching an element (defined in its document).
     *
     * @param {HTMLElement} element
     * @return {Array<StyleSheetInfo>} The stylesheets and rules that match
     *     `element`.
     */
    collectStyles(element) {
      var results = [];

      var doc = element.ownerDocument;
      for (var i = 0, sheet; sheet = doc.styleSheets[i]; i++) {
        var rules = this.collectStyleRules(element, sheet.cssRules);
        if (!rules || !rules.length) continue;

        var sheetInfo = {rules: rules};
        if (sheet.ownerNode) {
          // sheetInfo.ownerNodePath = pathLib.getNodePath(sheet.ownerNode, doc,
          //   domUtils.designerNodeFilter);
          sheetInfo.ownerSourceId = sheet.ownerNode.getAttribute('__designer_node_id__');
        }
        if (sheet.href) {
          sheetInfo.stylesheetUrl = sheet.href;
        }

        results.push(sheetInfo);
      }
      return results;
    },

    /**
     * Selects style rules in `rules` that match `element`, and transforms them
     * to StyleRuleInfo objects.
     *
     * @param {HTMLElement} element
     * @param {Array<CSSRule>}
     * @return {Array<StyleRuleInfo>}
     */
    collectStyleRules(element, rules) {
      if (!rules) return null;

      var results = [];
      for (var i = 0, rule; rule = rules[i]; i++) {
        if (!element.matches(rule.selectorText)) continue;

        results.push(this.getRuleInfo(rule));
      }
      return results;
    },

    getRuleInfo(rule) {
      return {
        selector: rule.selectorText,
        index: 0,  // TODO(nevir): Handle duplicate selectors!
        text: rule.cssText,
        styles: this.getStyleProperties(rule.style),
      };
    },

    getStyleProperties(style) {
      var styles = {};
      for (var j = 0, property; property = style[j]; j++) {
        styles[property] = style[property];
      }
      return styles;
    },

    // TODO(justinfagnani): normalizeSelector(removeTransientPseudos : boolean)
  };

});

/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

 define('polymer-designer/dragging', ['polymer-designer/css'], function(css) {
  'use strict';

  /**
   * Starts a mouse drag operation.
   *
   * Given an initial client position at (clientX, clientY) and an
   * initial drag position (startX, startY), onMove is called with new
   * drag position.
   */
  function startDrag(element, startX, startY, clientX, clientY, onMove, onDragEnd) {
    let onMouseMove = function(e) {
      let deltaX = e.clientX - clientX + startX;
      let deltaY = e.clientY - clientY + startY;
      onMove(deltaX, deltaY, e);
      var dropTargets = document.elementsFromPoint(e.clientX, e.clientY);
      for (let i = 0; i < dropTargets.length; i++) {
        var target = dropTargets[i];
        if (target.designerDropTarget) {
          let dragEvent = new CustomEvent('designer-drag-move', {
            detail: {
              test: 'woot',
              clientX: e.clientX,
              clientY: e.clientY,
            }
          });
          target.dispatchEvent(dragEvent);
        }
      }
    };

    let onMouseUp = function(e) {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('contextmenu', onMouseUp);
      // this.$.bounds.style.cursor = 'auto';
      onDragEnd(e);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    // Note document instead of window:
    // http://www.quirksmode.org/dom/events/contextmenu.html
    document.addEventListener('contextmenu', onMouseUp);
  }

  /**
   * Deep clones a node, only copying visible nodes and inlining all computed
   * styles.
   */
  function createDragProxy(node, stripMargins) {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.cloneNode();
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      let style = window.getComputedStyle(node);
      if (style.display === 'none') {
        return null;
      }
      let clone;
      if (style.display === 'inline') {
        clone = node.ownerDocument.createElement('span');
      } else {
        clone = node.ownerDocument.createElement('div');
      }
      for (let i = 0; i < node.attributes.length; i++) {
        let attr = node.attributes[i];
        clone.setAttribute(attr.name, attr.value);
      }
      let properties = css.getStyleProperties(style);
      let styleText = Object.keys(properties)
        .filter(function(prop) {
          return !(stripMargins && prop.startsWith('margin'));
        })
        .map(function(prop) {
          return `${prop}: ${properties[prop]}`;
        })
        .join('; ');
      clone.setAttribute('style', styleText);
      for (let i = 0; i < node.childNodes.length; i++) {
        let child = createDragProxy(node.childNodes[i]);
        if (child) {
          clone.appendChild(child);
        }
      }
      return clone;
    }
    return null;
  }

  return {
    createDragProxy: createDragProxy,
    startDrag: startDrag,
  };

});

/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/**
 * Command factories for document editing.
 *
 * Commands themselves are simple JSON objects so that they can be
 * serialized over postMessage.
 */
define('polymer-designer/commands', function() {

  // exports
  return {

    InsertPosition: {
      before: 'before',
      after: 'after',
    },

    setAttribute: function(sourceId, attribute, oldValue, newValue) {
      return {
        commandType: 'setAttribute',
        sourceId: sourceId,
        attribute: attribute,
        oldValue: oldValue,
        newValue: newValue,
      };
    },

    setTextContent: function(sourceId, oldValue, newValue) {
      return {
        messageType: 'command',
        commandType: 'setTextContent',
        sourceId: sourceId,
        oldValue: oldValue,
        newValue: newValue,
      };
    },

    setTagName: function(sourceId, oldValue, newValue) {
      return {
        messageType: 'command',
        commandType: 'setTagName',
        sourceId: sourceId,
        oldValue: oldValue,
        newValue: newValue,
      };
    },

    /**
     * [path] and [selector] are used to find the CSS declaration to edit,
     * which may be:
     *   - a path to a <style> tag, + the selector of a rule
     *   - an element path + style attribute
     *   - a file path?
     */
    setCssProperties: function(sourceId, selector, properties) {
      return {
        commandType: 'setCssProperties',
        sourceId: sourceId,
        selector: selector,
        properties: properties,
      };
    },

    moveElement: function(sourceId, targetSourceId, position) {
      return {
        commandType: 'moveElement',
        sourceId: sourceId,
        targetSourceId: targetSourceId,
        position: position,
      };
    },

  };
});

/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/commands/CommandApplier', function() {

  /**
   * Applies commands to documents, including embedded and linked
   * stylesheets.
   *
   * @abstract
   */
  function CommandApplier(doc) {
    this.doc = doc;
  }

  CommandApplier.prototype = {

    apply: function(command) {
      var handler = this.handlers[command.commandType];
      if (handler == null) {
        throw new Error('Unknown command type: ' + command.commandType);
      }
      if (handler.canApply(this.doc, command)) {
        handler.apply(this.doc, command);
      } else {
        console.error("Can't apply command ", command);
        throw new Error("Can't apply command " + command.commandType);
      }
    },

    undo: function(command) {
      var handler = this.handlers[command.commandType];
      if (handler.canUndo(this.doc, command)) {
        handler.undo(this.doc, command);
      } else {
        console.error("Can't undo command ", command);
        throw new Error("Can't undo command " + command.commandType);
      }
    },

  };

  // exports
  return CommandApplier;

});

/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/commands/DomCommandApplier', [
      'polymer-designer/commands/CommandApplier',
      'polymer-designer/dom-utils',
      'polymer-designer/path',
      'polymer-designer/commands'],
    function(CommandApplier, domUtils, pathLib, commands) {

  'use strict';

  // TODO(justinfagnani): move to common location
  const nodeIdProperty = '__designer_node_id__';

  function getNode(doc, sourceId) {
    return doc.querySelector(`[${nodeIdProperty}="${sourceId}"]`);
  }

  var commandHandlers = {
    'setAttribute': {
      canApply: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        return node.getAttribute(command.attribute) === command.oldValue;
      },

      apply: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        node.setAttribute(command.attribute, command.newValue);
      },

      canUndo: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        return node.getAttribute(command.attribute) === command.newValue;
      },

      undo: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        node.setAttribute(command.attribute, command.oldValue);
      },
    },

    'setTextContent': {
      canApply: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        if (!node) return false;
        var hasElementChildren = node.children === 0;
        if (hasElementChildren) {
          console.warn(
              'Not applying', command,
              'because target node', node, 'has element children');
        }
        return !hasElementChildren;
      },

      apply: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        node.textContent = command.newValue;
      },

      canUndo: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        return node.textContent === command.newValue;
      },

      undo: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        node.textContent = command.oldValue;
      },
    },

    'setTagName': {
      canApply: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        return node &&
            node.tagName.toLowerCase() === command.oldValue.toLowerCase();
      },

      apply: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        domUtils.renameNode(node, command.newValue);
      },

      canUndo: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        return node &&
            node.tagName.toLowerCase() === command.newValue.toLowerCase();
      },

      undo: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        domUtils.renameNode(node, command.oldValue);
      },
    },

    'moveElement': {
      canApply: function(doc, command) {
        let el = getNode(doc, command.sourceId);
        let target = getNode(doc, command.targetSourceId);
        // var target = pathLib.getNodeFromPath(command.targetPath, doc);
        return el != null && target != null &&
            (command.position == commands.InsertPosition.before ||
             command.position == commands.InsertPosition.after);
      },

      apply: function(doc, command) {
        let el = getNode(doc, command.sourceId);
        let target = getNode(doc, command.targetSourceId);
        var container = target.parentNode;
        if (command.position == commands.InsertPosition.before) {
          container.insertBefore(el, target);
        } else if (command.position == commands.InsertPosition.after) {
          target = target.nextSibling;
          container.insertBefore(el, target);
        }
      },

      canUndo: function(doc, command) {
        return false;
      },
    },
  };

  /**
   * Applies commands to DOM Documents, including embedded and linked
   * stylesheets.
   */
  function DomCommandApplier(doc) {
    CommandApplier.call(this, doc);
    this.handlers = commandHandlers;
  }
  DomCommandApplier.prototype = Object.create(CommandApplier.prototype);
  DomCommandApplier.prototype.constructor = DomCommandApplier;

  // exports
  return DomCommandApplier;
});

/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/protocol/request', function() {
  'use strict';

  class Request {

    constructor(connection, id, message) {
      this._connection = connection;
      this.id = id;
      this.message = message;
    }

    reply(message) {
      this._connection.reply(this, message);
    }

    replyError(message) {
      this._connection.replyError(this, message);
    }
  }

  return Request;

});

/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

 define('polymer-designer/async', function() {
  'use strict';

  class Deferred {

    constructor () {
      this.promise = new Promise(function(resolve, reject) {
        this.resolve = resolve;
        this.reject = reject;
      }.bind(this));
    }

  }

  return {
    Deferred: Deferred,
  };

});

/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/text/PositionWalker', function() {
   'use strict';

 /**
  * PositionWalker keeps track of a position within a DOM subtree, as a
  * current node and an offset within that node.
  *
  * PositionWalker is similar to NodeIterator with the addition of the
  * offset tracking, the ability to move forward and backward by character
  * position within a node, and the ability to clone.
  *
  * PositionWalker is not as robust to changes in
  * the underlying DOM as NodeIterator, because NodeIterator relies on being
  * able to update its state synchronously when the DOM changes. PositionWalker
  * will require manual notification of DOM changes, an API that's not
  * designed yet.
  */
  return class PositionWalker {

    constructor(node) {
      this.container = node;
      this._currentNode = node;

      this._containerClone = null;
      this._currentNodeClone = null;
      this._cloneToNodes = null;
      this._nodesToClones = null;

      /**
       * The current character position relative to the current node.
       */
      this.localOffset = 0;

      this._currentNode = this.getNextNode() || this._currentNode;
      this._makeClone();
    }

    get currentNode() {
      return this._currentNode;
    }

    set currentNode(node) {
      this.localOffset = 0;
      this._currentNode = node;
      this._currentNodeClone = this._nodesToClones.get(node);
    }

    /**
     * In order to track edits and choose a new current node when the current
     * node has been removed, we keep a clone of the contents to compare to in
     * refresh().
     */
    _makeClone() {
      this._containerClone = this.container.cloneNode(true);
      this._cloneToNodes = new WeakMap();
      this._nodesToClones = new WeakMap();

      let iterator = document.createNodeIterator(this.container,
          NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT)
      let cloneIterator = document.createNodeIterator(this._containerClone,
          NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT)

      let n = this.container;
      let c = this._containerClone;

      // find the currentNode's clone
      while (n !== null) {
        if (n === this.currentNode) {
          this._currentNodeClone = c;
        }
        this._cloneToNodes.set(c, n);
        this._nodesToClones.set(n, c);

        n = iterator.nextNode();
        c = cloneIterator.nextNode();
      }
    }

    get isAtBeginning() {
      return (this.localOffset === 0 && this.getPreviousNode() === null);
    }

    get isAtEnd() {
      return (this.currentNode.nodeType !== Node.TEXT_NODE ||
            this.localOffset === this.currentNode.nodeValue.length) &&
          this.getNextNode() === null;
    }

    getNextNode() {
      let n = this.currentNode;

      if (n.nodeType == Node.ELEMENT_NODE) {
        if (n.childNodes.length > 0) {
          return n.firstChild;
        }
      }

      while (n.nextSibling == null && n != this.container) {
        if (n.parentNode == null) {
          throw "parent null for " + n;
        }
        n = n.parentNode;
      }

      if (n == this.container) {
        return null;
      }
      return n.nextSibling;
    }

    nextNode() {
      let n = this.currentNode;
      this.currentNode = this.getNextNode() || this.currentNode;
    }

    nextPosition() {
      if (this.isAtEnd) return;

      if (this.currentNode.nodeType == Node.TEXT_NODE &&
          this.localOffset < this.currentNode.nodeValue.length - 1) {
        this.localOffset++;
        return;
      }

      while (this.currentNode !== this.container) {
        let n = this.getNextNode();
        if (n == null && this.currentNode.nodeType == Node.TEXT_NODE) {
          // normally localOffset is always 0 when we finish a node but for the
          // last text node we want to position at the end of the node instead
          // of the beginning of the next node.
          this.localOffset = this.currentNode.nodeValue.length;
          return;
        } else if (n.nodeType == Node.TEXT_NODE) {
          this.nextNode();
          return;
        }
        this.nextNode();
      }
    }

    getPreviousNode() {
      let n = this.currentNode;

      if (n == this.container) return null;

      if (n.previousSibling != null) {
        // if n has a previousSibling, select the last node in it
        n = n.previousSibling;
        while (n.nodeType != Node.TEXT_NODE && n.lastChild != null) {
          n = n.lastChild;
        }
        return n;
      } else {
        // if it doesn't, select n's parent
        n = n.parentNode;
        if (n == this.container) {
          return null;
        }
        return n;
      }
    }

    previousNode() {
      this.currentNode = this.getPreviousNode() || this.currentNode;
    }

    previousPosition() {
      if (this.isAtBeginning) {
        return;
      }

      if (this.currentNode.nodeType == Node.TEXT_NODE && this.localOffset > 0) {
        this.localOffset--;
        return;
      }

      while (this.currentNode != null) {
        let n = this.currentNode = this.getPreviousNode();
        if (n !== null && n.nodeType === Node.TEXT_NODE) {
          this.localOffset = n.nodeValue.length - 1;
          return;
        }
      }
    }

    clone() {
      let c = new PositionWalker(this.container);
      c._currentNode = this._currentNode;
      c.localOffset = this.localOffset;
      c._makeClone();
      return c;
    }

    getRange() {
      let r = new Range();
      r.setStart(this.currentNode, this.localOffset);
      r.setEnd(this.currentNode, this.localOffset);
      return r;
    }

    getCaretRange() {
      let r = new Range();
      r.setStart(this.currentNode, this.localOffset);
      let endOffset = this.localOffset;
      if (this.currentNode.nodeType == Node.TEXT_NODE &&
          this.localOffset < this.currentNode.nodeValue.length) {
        endOffset = this.localOffset + 1;
      }
      r.setEnd(this.currentNode, endOffset);
      return r;
    }

    refresh() {
      // Were we in an empty container before?
      if (this.currentNode === this.container) {
        // re-initialize
        this._currentNode = this.getNextNode() || this.currentNode;
        this._makeClone();
      }

      // Was the currentNode removed?
      // If not, we don't need to do anything, since our state is completely
      // dependent on the current node
      // TODO: If the current node is a text node and has been modified, then we
      // either need to choose a new current node, and/or change the localOffset
      if (isDescendant(this.currentNode, this.container)) {
        // Were we at the end of content before?
        if (this.currentNode.nodeType === Node.TEXT_NODE &&
            this.localOffset === this.currentNode.nodeValue.length) {
          // Move to new content if any was added
          this.nextPosition();
        }
      } else {
        // The currentNode was removed. We need to find the clone of currentNode
        // find a suitable replacement clone, then find the original for that
        // clone.
        // TODO: if the currentNode was replaced, select the replacement
        let cloneIterator = document.createNodeIterator(this._containerClone);
        let c = this._containerClone;

        while (c !== null) {
          if (c === this._currentNodeClone) {
            // Get next node, or previous node
            // TODO: need to make sure the new node is in the container too

            // Prefer the next node
            let newCurrentNodeClone = cloneIterator.nextNode();
            if (newCurrentNodeClone !== null) {
              this.localOffset = 0;
            } else {
              // If there's no next node, try the previous node
              // Since we advanced already, we need to call previousNode() twice
              cloneIterator.previousNode();
              newCurrentNodeClone = cloneIterator.previousNode();
              if (newCurrentNodeClone !== null &&
                  newCurrentNodeClone.nodeType === Node.TEXT_NODE) {
                // When moving backwards, set localOffset tot he end of the node
                // Since there's no next node, we use length, not length - 1
                // so that isAtEnd == true
                this.localOffset = this.currentNode.nodeValue.length;
              }
            }
            // If there's no next or previous node, select the container
            if (newCurrentNodeClone === null) {
              newCurrentNodeClone = this._containerClone;
              this.localOffset = 0;
            };
            this._currentNode = this._cloneToNodes.get(newCurrentNodeClone);
            this._makeClone();
            break;
          }
          c = cloneIterator.nextNode();
        }
        console.assert(c !== null, 'Could not find the current node clone.');
      }
    }
  }

  function isDescendant(element, target) {
    while (element.parentNode) {
      if (element.parentNode == target) {
        return true;
      }
      element = element.parentNode;
    }
  }

});

/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/text/CursorManager', ['polymer-designer/text/PositionWalker'],
    function(PositionWalker) {
  'use strict';

  return class CursorManager {

    constructor(container) {
      this.container = container;
      this.walker = new PositionWalker(container);
      this.updateCaretX();
    }

    updateCaretX() {
      this.currentX = this.getCaretX();
    }

    getCaretX() {
      var rects = this.walker.getRange().getClientRects();
      return rects.length > 0 ? rects[0].left : null;
    }

    setPosition(node, offset) {
      this.walker.currentNode = node;
      this.walker.localOffset = offset;
    }

    forward() {
      // To deal with collapsed white space we keep moving until we get
      // a Range that has at least one ClientRect
      do {
        this.walker.nextPosition();
        var rects = this.walker.getCaretRange().getClientRects();
      } while (!this.walker.isAtEnd &&
          (rects.length == 0 || (rects.length == 1 && rects[0].width == 0)));
      this.updateCaretX();
    }

    back() {
      // To deal with collapsed white space we keep moving until we get
      // a Range that has at least one ClientRect
      do {
        this.walker.previousPosition();
        var rects = this.walker.getCaretRange().getClientRects();
      } while (!this.walker.isAtBeginning &&
          (rects.length == 0 || (rects.length == 1 && rects[0].width == 0)));

      this.updateCaretX();
    }

    endOfLine() {
      while (!this.walker.isAtEnd
          && !isLineWrap(this.walker.getCaretRange())) {
        this.walker.nextPosition();
      }
      this.updateCaretX();
    }

    beginningOfLine() {
      while (!this.walker.isAtBeginning
          && !isLineWrap(this.walker.getCaretRange())) {
        this.walker.previousPosition();
      }
      this.updateCaretX();
    }

    down() {
      // To move the cursor down a line we move forward until we think we're on
      // the next line, then keep moving while the x distance to the previous
      // position is still decreasing
      // We _don't_ update the current X position on up and down movements so
      // that consecutive vertical moves stay close to the origin x position.

      var savedX = this.currentX;
      var savedWalker = this.walker.clone();
      var bestDistance = null;

      this.endOfLine();

      do {
        this.walker.nextPosition();

        if (this.walker.isAtEnd) {
          break;
        }

        var range = this.walker.getRange();
        var rects = range.getClientRects();

        if (isLineWrap(range)) {
          break;
        }

        if (rects.length > 0) {
          var rect = rects[0];
          var distance = Math.abs(savedX - rect.left);

          if (bestDistance != null && distance > bestDistance) {
            this.walker.previousPosition();
            break;
          }
          if (bestDistance == null || distance < bestDistance) {
            bestDistance = distance;
          }
        }
      } while(true);

      this.currentX = savedX;
    }

    up() {
      // To move the cursor down a line we move forward until we think we're on
      // the next line, then keep moving while the x distance to the previous
      // position is still decreasing
      // We _don't_ update the current X position on up and down movements so
      // that consecutive vertical moves stay close to the origin x position.

      var savedX = this.currentX;
      var savedWalker = this.walker.clone();
      var bestDistance = null;

      this.beginningOfLine();

      do {
        this.walker.previousPosition();

        if (this.walker.isAtBeginning) {
          break;
        }

        var range = this.walker.getRange();
        var rects = range.getClientRects();

        if (isLineWrap(range)) {
          break;
        }

        if (rects.length > 0) {
          var rect = rects[0];
          var distance = Math.abs(savedX - rect.left);

          if (bestDistance != null && distance > bestDistance) {
            this.walker.nextPosition();
            break;
          }
          if (bestDistance == null || distance < bestDistance) {
            bestDistance = distance;
          }
        }
      } while(true);

      this.currentX = savedX;
    }
  }

  /**
   * Returns true if r2 is "above" r1.
   */
  function isAbove(r1, r2) {
    return (r2.bottom > r1.bottom) &&
        ((r2.left < r1.right && r2.left >= r1.left) ||
        (r2.right >= r1.left && r2.right < r1.right) ||
        (r2.left <= r1.left && r2.right > r1.right));
  }

  /**
   * Returns true if r2 is "below" r1.
   */
  function isBelow(r1, r2) {
    return (r2.top > r1.top) &&
        ((r2.left < r1.right && r2.left >= r1.left) ||
        (r2.right >= r1.left && r2.right < r1.right) ||
        (r2.left <= r1.left && r2.right > r1.right));
  }

  /**
   * Returns `true` if [range] represents a line wrap.
   *
   * This logic might only work in Chome where Ranges on line wraps have
   * two ClientRects, one at the end of the current line and one at the
   * beggining of the new line, both with 0 width. Firefox line wraps
   * only have a single ClientRect.
   */
  function isLineWrap(range) {
    var rects = range.getClientRects();
    return rects.length == 2
        && rects[0].width == 0
        && rects[1].width == 0
        && rects[0].top < rects[1].top;
  }
});

/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/protocol/ServerConnection',
    ['polymer-designer/async', 'polymer-designer/protocol/request'],
    function(async, Request) {
  'use strict';

  class ServerConnection {

    /**
     * @param {EventTarget} target The object to listen for message events on.
     */
    constructor(target) {
      this.target = target;
      this.otherWindow = null;
      this._token = null;
      this._handlers = new Map();

      /**
       * @type {Promise} A Promise that resolves when the connection is ready to
       * be used.
       */
      this.ready = new Promise(function(resolve, reject) {

        var handshakeListener = function(event) {
          if (event.data == null ||
              event.data.message == null ||
              event.data.message.messageType !== 'handshake') {
            reject(new Error('Invalid message before handshake complete'));
          } else {
            this.otherWindow = event.source;
            this._token = event.data.token;
            this.target.removeEventListener('message', handshakeListener);
            this.target.addEventListener('message', this._onMessage.bind(this));
            this.otherWindow.postMessage({messageType: 'handshakeReply'}, '*');
            resolve();
          }
        }.bind(this);

        this.target.addEventListener('message', handshakeListener);

      }.bind(this));
    }

    _onMessage(event) {
      var id = event.data.id;
      var message = event.data.message;
      var handler = this._handlers.get(message.messageType);

      if (handler == null) {
        console.error('No handler for message type: ' +
            message.messageType, message);
      } else {
        handler(new Request(this, id, message));
      }
    }

    /**
     * @param {string} messageTYpe
     * @param {Function} handler
     */
    on(messageType, handler) {
      this._handlers.set(messageType, handler);
    }

    send(message) {
      console.assert(this._token != null);
      this.otherWindow.postMessage({
        token: this._token,
        message: message}, '*');
    }

    reply(request, message) {
      console.assert(this._token != null);
      this.otherWindow.postMessage({
        token: this._token,
        id: request.id,
        message: message}, '*');
    }

  }

  return ServerConnection;

});

/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/protocol/DocumentServer', [
      'polymer-designer/css',
      'polymer-designer/dragging',
      'polymer-designer/commands',
      'polymer-designer/commands/DomCommandApplier',
      'polymer-designer/dom-utils',
      'polymer-designer/text/CursorManager'],
    function(cssLib, dragging, commands, DomCommandApplier, domUtils,
        CursorManager) {
  'use strict';

  function designerNodeFilter(node) {
    return node.nodeType !== Node.ELEMENT_NODE ||
        !node.hasAttribute('designer-exclude');
  }

  // TODO(justinfagnani): this is used for two purposes:
  //   1) The source ID as stored in an attribute
  //   2) The node ID as stored in a property
  // the should probably be two different variables with different values.
  const nodeIdProperty = domUtils.sourceIdAttribute;

  class DocumentServer {

    constructor(connection) {
      this.connection = connection;
      this.currentElement = null;
      this.cursorManager = null;
      this.commandApplier = new DomCommandApplier(document);
      this.nodes = new Map();
      this.nextId = 1;

      connection.on('command', this._onCommand.bind(this));
      connection.on('getCaretPosition', this.getCaretPosition.bind(this));
      connection.on('getDocument', this.getDocument.bind(this));
      connection.on('getElementsAtPoint', this.getElementsAtPoint.bind(this));
      connection.on('insertText', this.insertText.bind(this));
      connection.on('moveCursor', this.moveCursor.bind(this));
      connection.on('selectElement', this.selectElement.bind(this));
      connection.on('selectElementForSourceId', this.selectElementForSourceId.bind(this));
      connection.on('selectElementAtPoint', this.selectElementAtPoint.bind(this));
      connection.on('selectionBoundsChanged', this.selectionBoundsChanged.bind(this));
    }

    _onCommand(request) {
      let command = request.message.command;
      this.commandApplier.apply(command);

      // TODO(justinfagnani): we need a better way to know what parts of the
      // document are invalidated by a command and need to be re-synced to the
      // client. Here we assume that if a command references an element by
      // sourceId that it modifies or replaces that element, so we reselect it
      // and respond with new elementInfo and bounds.
      if (command.sourceId) {
        this._selectElementForSourceId(command.sourceId);
      }
      let response = {
        bounds: this._elementBounds(this.currentElement),
        elementInfo: this._elementInfo(this.currentElement),
      };
      console.log('command response', response);
      request.reply(response);
    }

    /**
     * @return {string}
     */
    _getId(node) {
      let id = node[nodeIdProperty];
      if (id == null) {
        id = node[nodeIdProperty] = this.nextId++;
        this.nodes.set(id, node);
      }
      return id;
    }

    /**
     * @return {string}
     */
    _getSourceId(node) {
      return (node.nodeType === Node.ELEMENT_NODE)
          ? node.getAttribute(nodeIdProperty)
          : null;
    }

    /**
     * @return {Node}
     */
    _getNode(id) {
      return this.nodes.get(id);
    }

    getDocument(request) {
      request.reply({
        id: this._getId(document),
      });
    }

    selectElementAtPoint(request) {
      var x = request.message.x;
      var y = request.message.y;
      this.currentElement = document.elementFromPoint(x, y);
      this.cursorManager = new CursorManager(this.currentElement);
      request.reply({
        bounds: this._elementBounds(this.currentElement),
        elementInfo: this._elementInfo(this.currentElement),
      });
    }

    /**
     * Returns a list of elements that overlap the point
     * ([request.message.x], [request.message.y]).
     *
     * @return {Array<ElementDescriptor>}
     */
    getElementsAtPoint(request) {
      var x = request.message.x;
      var y = request.message.y;
      var elements = document.elementsFromPoint(x, y);
      var response = [];
      for (var i in elements) {
        var element = elements[i];
        response.push({
          bounds: this._elementBounds(element),
          elementInfo: this._elementInfo(element),
        });
      }
      request.reply(response);
    }

    selectElement(request) {
      this.currentElement = this.nodes.get(request.message.id);
      this.cursorManager = new CursorManager(this.currentElement);

      request.reply({
        bounds: this._elementBounds(this.currentElement),
        elementInfo: this._elementInfo(this.currentElement),
      });
    }

    selectElementForSourceId(request) {
      this._selectElementForSourceId(request.message.sourceId);
      request.reply({
        bounds: this._elementBounds(this.currentElement),
        elementInfo: this._elementInfo(this.currentElement),
      });
    }

    _selectElementForSourceId(sourceId) {
      let node = document.querySelector(
          `[${domUtils.sourceIdAttribute}="${sourceId}"]`);
      this.currentElement = node;
      this.cursorManager = new CursorManager(this.currentElement);
    }

    selectionBoundsChanged(request) {
      var command = this._resizeElement(request.message.bounds);
      var message = {
        bounds: this._elementBounds(this.currentElement),
        command: command,
      };

      if (request.message.cursor && document.elementsFromPoint) {
        var hoverElements = document.elementsFromPoint(
          request.message.cursor.x,
          request.message.cursor.y);
        var hoverElement = null;
        // elementsFromPoint() is z-ordered. We want the first result that
        // is not currentElement, a ancestor or descendant
        for (var i = 0; i < hoverElements.length; i++) {
          var e = hoverElements[i];
          if (!(e === this.currentElement ||
                domUtils.isDescendant(e, this.currentElement) ||
                domUtils.isDescendant(this.currentElement, e))) {
            hoverElement = e;
            break;
          }
        }
        if (hoverElement === null) {
          message.hover = null;
        } else {
          message.hover = {
            bounds: this._elementBounds(hoverElement),
            elementInfo: this._elementInfo(hoverElement)
          };
        }
      }
      request.reply(message);
    }

    getCaretPosition(request) {
      // Note: We're assuming Shadow DOM here. This gets much more complicated
      // with Shady DOM!
      let caretRange = document.caretRangeFromPoint(request.message.x,
          request.message.y);
      let node = caretRange.startContainer;
      let offset = caretRange.startOffset;

      this.cursorManager.setPosition(node, offset);

      let rect = this.cursorManager.walker.getCaretRange()
          .getBoundingClientRect();

      request.reply({
        rect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        },
      });
    }

    moveCursor(request) {
      switch (request.message.move) {
        case 'up':
          this.cursorManager.up();
          break;
        case 'down':
          this.cursorManager.down();
          break;
        case 'left':
          this.cursorManager.back();
          break;
        case 'right':
          this.cursorManager.forward();
          break;
        case 'beginningOfLine':
          this.cursorManager.beginningOfLine();
          break;
        case 'endOfLine':
          this.cursorManager.endOfLine();
          break;
        default:
          console.error('Unrecognized cursor move', request.message.move);
      }

      let rect = this.cursorManager.walker.getCaretRange()
          .getBoundingClientRect();
      let node = this.cursorManager.walker.currentNode;
      let offset = this.cursorManager.walker.localOffset;

      request.reply({
        rect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        },
      });
    }

    insertText(request) {
      let text = request.message.text;

      let node = document.createTextNode(text);
      let range = this.cursorManager.walker.getCaretRange();

      range.insertNode(node);
      this.cursorManager.walker.refresh();
      this.cursorManager.forward();

      let rect = this.cursorManager.walker.getCaretRange()
          .getBoundingClientRect();

      node = this.cursorManager.walker.currentNode;
      let offset = this.cursorManager.walker.localOffset;

      request.reply({
        rect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        },
      });
    }

    _resizeElement(bounds) {
      // TODO: explicitly support more display/position modes than block/absolute
      if (this.currentElement == null) {
        throw new Error('current element is null');
      }
      // Setting the style attribute isn't ideal for this operation - we'd
      // rather set style properties on the element's style, but setAttribtue
      // is a rather easy command to implement, so we'l use it for now
      // TODO: Send all commands to the editor as well so that it can apply
      // them to it's document model
      var element = this.currentElement;
      let id = element.getAttribute(nodeIdProperty);
      var command = commands.setAttribute(id, 'style',
        element.getAttribute('style'),
        `top: ${bounds.top}px; ` +
        `left: ${bounds.left}px; ` +
        `height: ${bounds.height}px; ` +
        `width: ${bounds.width}px;`);
      this.commandApplier.apply(command);
      return command;
    }

    _elementBounds(element) {
      var bounds = element.getBoundingClientRect();
      return {
        left: bounds.left,
        top: bounds.top,
        width: bounds.width,
        height: bounds.height,
      };
    }

    // TODO(justinfagnani): break element info into two parts: static,
    // unchanging (id, tagName), and dynamic: parent, attributes, style...
    _elementInfo(element) {
      var style = window.getComputedStyle(element);
      return {
        id: this._getId(element),
        sourceId: this._getSourceId(element),
        tagName: element.tagName.toLowerCase(),
        display: style.display,
        position: style.position,
        styles: cssLib.collectStyles(element),
        computedStyle: cssLib.getStyleProperties(style),
        proxy: dragging.createDragProxy(element, true).outerHTML,
        bounds: this._elementBounds(element),
      };
    }
  }

  return DocumentServer;

});
define(["polymer-designer/protocol/ServerConnection", "polymer-designer/protocol/DocumentServer"], function(ServerConnection, DocumentServer) {
  "use strict";
  window.Polymer = { dom: "shadow" };
  var connection = new ServerConnection(window);
  new DocumentServer(connection);
});
})();