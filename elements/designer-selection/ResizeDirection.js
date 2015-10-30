/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
define('polymer-designer/designer-selection/ResizeDirection', () => {
  'use strict';

  class ResizeDirection {

    constructor(name, x, y) {
      this.name = name;
      this.x = x;
      this.y = y;
    }

    locate(rect) {
      return {
        x: rect.left + rect.width * this.x,
        y: rect.top + rect.height * this.y
      };
    }

    resizesLeft() {
      return this.x === 0.0;
    }

    resizesRight() {
      return this.x === 1.0;
    }

    resizesTop() {
      return this.y === 0.0;
    }

    resizesBottom() {
      return this.y === 1.0;
    }

    toString() {
      return `ResizeDirection(${this.name}, ${this.x}, '${this.y})`;
    }

  }

  let top = ResizeDirection.top = new ResizeDirection('top', 0.5, 0.0);
  let left = ResizeDirection.left = new ResizeDirection('left', 0.0, 0.5);
  let bottom = ResizeDirection.bottom = new ResizeDirection('bottom', 0.5, 1.0);
  let right = ResizeDirection.right = new ResizeDirection('right', 1.0, 0.5);
  let top_left = ResizeDirection.top_left = new ResizeDirection('top_left', 0.0, 0.0);
  let top_right = ResizeDirection.top_right = new ResizeDirection('top_right', 1.0, 0.0);
  let bottom_left = ResizeDirection.bottom_left = new ResizeDirection('bottom_left', 0.0, 1.0);
  let bottom_right = ResizeDirection.bottom_right = new ResizeDirection('bottom_right', 1.0, 1.0);

  ResizeDirection.ALL_DIRECTIONS = [top, left, bottom, right, top_left, top_right, bottom_left, bottom_right];
  ResizeDirection.WIDTH_HEIGHT = [bottom, right, bottom_right];

  return ResizeDirection;

});
