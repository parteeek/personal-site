"use strict";

/**
 * Titles object that manages updating Parteeks titles on the Home page.
 * @constructor
 */
var Titles = function() {

  /** @private */
  this.titles_ = ['Designer', 'Creative', 'Croissant Connoisseur', '3D Tinker-er', 'Cyclist', 'Prototyper', 'Person'];

  /** @private */
  this.longestTitle_ =
      this.titles_.sort(function (a, b) { return b.length - a.length; })[0];

  /** @private */
  this.titleEl_ = document.querySelectorAll('.tagline');

  /** @private */
  this.curSubtitle_ = 0;

  if (this.titleEl_.length > 0) {
    this.setTitleWidth_(this.getLongestTitleInPx_());
    this.initEvents_();
  }
};


/**
 * Initializes events specifically running a function every second.
 * @private
 */
Titles.prototype.initEvents_ = function() {
  var that = this;

  window.setInterval(function(){
    that.setTitles_();
  }, 1000);
};

/**
 * Gets a random title from the titles array.
 * @private
 */
Titles.prototype.returnTitle_ = function() {
  return this.titles_[this.curSubtitle_++ % this.titles_.length];
};


/**
 * Sets the title by selecting one at random from the titles array.
 * @private
 */
Titles.prototype.setTitles_ = function() {
  var title = this.returnTitle_();
  for (var i = 0; i < this.titleEl_.length; i++) {
    this.titleEl_[i].textContent = title;
  }
};

/**
 * Find the longest title from the titles array and gets its size in pixels.
 * @private
 */
Titles.prototype.getLongestTitleInPx_ = function() {
  if (this.titleEl_[1]) {
    this.titleEl_[1].textContent = this.longestTitle_;
    return this.titleEl_[1].offsetWidth;
  }
};


/**
 * Sets the title elements width in pixels.
 * @private
 */
Titles.prototype.setTitleWidth_ = function(w) {
  for (var i = 0; i < this.titleEl_.length; i++) {
    this.titleEl_[i].style.width = (w + 5) + 'px';
  }
}

module.exports = Titles;
