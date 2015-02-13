modulate('Path', function() {
  return {

    /**
     * Returns the path to [node] in [doc]. A path is a slash-separated list
     * of segments, each of which is the node name and the the index into its
     * parent nodes childNodes (for error detection).
     * 
     * This function is sensitive to empty and adjacent Text nodes, so you
     * probably want to call doc.normalize() first!
     */
    getNodePath: function(node, doc) {
      var doc = doc || document;
      if (node.ownerDocument != doc) {
        throw new Error('node is not in the given document');
      }
      var path = [];
      while (node && node.parentNode !== doc) {
        var children = Array.prototype.slice.call(node.parentNode.childNodes);
        var index = children.indexOf(node);
        path.push(`${node.nodeName}:${index}`);
        node = node.parentNode;
      }
      return path.reverse().join('/');
    },

    getNodeFromPath: function(path, doc) {
      var doc = doc || document;
      var segments = path.split('/');

      var node = doc.documentElement;
      var i = 0;
      while (i < segments.length && node) {
        var children = Array.prototype.slice.call(node.childNodes);
        var segment = segments[i].split(':');
        var nodeName = segment[0];
        var index = segment[1];
        if (index >= children.length) {
          throw new RangeError(`Invalid index ${index}`);
        }
        node = children[index];
        if (!node || node.nodeName != nodeName) {
          throw new Error(`Expected node name ${nodeName} but was ${node.nodeName}`);
        }
        i++;
      }
      return node;
    },

  };
});
