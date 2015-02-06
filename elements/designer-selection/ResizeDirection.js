/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

function ResizeDirection(name, x, y) {
  this.name = name;
  this.x = x;
  this.y = y;
}

ResizeDirection.prototype.toString = function() {
  return 'ResizeDirection(' + this.name + ', ' + this.x + ', ' + 
      this.y + ')';
};

ResizeDirection.prototype.locate = function(rect) {
  return {
    x: rect.left + rect.width * this.x,
    y: rect.top + rect.height * this.y
  };
};

ResizeDirection.prototype.resizesLeft = function() {
  return this.x == 0.0;
},

ResizeDirection.prototype.resizesRight = function() {
  return this.x == 1.0;
},

ResizeDirection.prototype.resizesTop = function() {
  return this.y == 0.0;
},

ResizeDirection.prototype.resizesBottom = function() {
  return this.y == 1.0;
},

(function () {
  var top = ResizeDirection.top = new ResizeDirection('top', 0.5, 0.0);
  var left = ResizeDirection.left = new ResizeDirection('left', 0.0, 0.5);
  var bottom = ResizeDirection.bottom = new ResizeDirection('bottom', 0.5, 1.0);
  var right = ResizeDirection.right = new ResizeDirection('right', 1.0, 0.5);
  var top_left = ResizeDirection.top_left = new ResizeDirection('top_left', 0.0, 0.0);
  var top_right = ResizeDirection.top_right = new ResizeDirection('top_right', 1.0, 0.0);
  var bottom_left = ResizeDirection.bottom_left = new ResizeDirection('bottom_left', 0.0, 1.0);
  var bottom_right = ResizeDirection.bottom_right = new ResizeDirection('bottom_right', 1.0, 1.0);

  ResizeDirection.all_directions = [top, left, bottom, right, top_left, top_right, bottom_left, bottom_right];      
  ResizeDirection.width_height = [bottom, right, bottom_right];      
})();
