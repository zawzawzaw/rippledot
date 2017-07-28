
goog.provide('rippledot.component.DesktopAside');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.AutoCompleteSearch');


/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
rippledot.component.DesktopAside = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, rippledot.component.DesktopAside.DEFAULT, options);
  this.element = element;

  // if class has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, rippledot.component.DesktopAside.DEFAULT, options);
  
  this.is_open = false;


  /**
   * @type {manic.ui.AutoCompleteSearch}
   */
  this.auto_complete_search = null;



  this.create_auto_complete_search();


  this.menu_btn = $('#desktop-header-menu-btn');
  this.bg_element = $('#desktop-aside-bg');


  this.menu_btn.click(function(event){

    event.preventDefault();

    if (this.is_open == false) {
      this.open_aside();
    } else {
      this.close_aside();
    }

  }.bind(this));

  this.bg_element.click(function(event){

    this.close_aside();

  }.bind(this));






  // console.log('rippledot.component.DesktopAside: init');
};
goog.inherits(rippledot.component.DesktopAside, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
rippledot.component.DesktopAside.DEFAULT = {
};



//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

rippledot.component.DesktopAside.prototype.create_auto_complete_search = function(){

  this.auto_complete_search = new manic.ui.AutoCompleteSearch({
    'data_container': '#search-data-container',
    'selector': '.search-data-item',
    'unique_name': 'ac-renderer-desktop-aside-search'
  }, $('#desktop-aside-search'));

};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


rippledot.component.DesktopAside.prototype.open_aside = function() {

  if (this.is_open == false) {
    this.is_open = true;

    this.element.show(0);
    this.bg_element.show(0);

  }
};

rippledot.component.DesktopAside.prototype.close_aside = function() {
  if (this.is_open == true) {

    this.is_open = false;

    this.element.hide(0);
    this.bg_element.hide(0);


    this.auto_complete_search.reset_text();

  }

};
