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
