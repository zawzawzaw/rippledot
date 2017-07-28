goog.provide('rippledot.component.DesktopHeader');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The DesktopHeader constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
rippledot.component.DesktopHeader = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, rippledot.component.DesktopHeader.DEFAULT, options);
  this.element = element;

  // if class has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, rippledot.component.DesktopHeader.DEFAULT, options);
  

  // makes more sense to put it in the aside
  // this.menu_btn = this.element.find('#desktop-header-menu-btn');

  


  // console.log('rippledot.component.DesktopHeader: init');
};
goog.inherits(rippledot.component.DesktopHeader, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
rippledot.component.DesktopHeader.DEFAULT = {
};


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//



//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


rippledot.component.DesktopHeader.prototype.hide_bg = function() {
  this.element.removeClass('grey-bg-version');
};
rippledot.component.DesktopHeader.prototype.show_bg = function() {
  this.element.addClass('grey-bg-version');
};



//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//
