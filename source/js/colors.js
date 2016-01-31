"use strict";

/**
 * Colors object that manages updating body copy and border color on mousemove.
 * @constructor
 */
var Colors = function() {

  /** @private */
  this.colors_ = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5',
      '#2196F3', '#009688', '#E91E63', '#E040FB', '#651FFF', '#2979FF', '#3D5AFE', '#40C4FF', '#18FFFF', '#1DE9B6', '#00E676', '#B2FF59', '#EEFF41', '#FFFF00', '#FFCD40', '#FFAB40', '#FF6E40', '#8D6E63', '#9E9E9E', '#607D8B', '#FF5177', '#673AB7', '#FFAB40', '#A7FFEB'];

  this.initEvents_();
};

/**
 * Sets the body copy and border color with a random color value.
 * @private
 */
Colors.prototype.setColor_ = function() {
  var color = this.colors_[Math.floor(Math.random() * this.colors_.length)];
  document.body.style.color = color;
}

/**
 * Initializes events for mousemove.
 * @private
 */
Colors.prototype.initEvents_ = function() {
  window.addEventListener('mousemove', this.setColor_.bind(this));
};

module.exports = Colors;
