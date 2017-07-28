goog.provide('rippledot.component.MobileHeader');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
rippledot.component.MobileHeader = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, rippledot.component.MobileHeader.DEFAULT, options);
  this.element = element;

  this.is_expanded = false;

  this.expand_container = $('#mobile-header-expand-container');
  this.menu_btn = this.element.find('#mobile-header-menu-btn');
  

  this.window_scroll = 0;
  this.window_element = $(window);

  this.body_element = $('body');

  /**
   * @type {manic.ui.AutoCompleteSearch}
   */
  this.auto_complete_search = null;



  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  this.menu_btn.click(function(event){

    if (this.is_expanded == false) {
      this.open_menu();
    } else {
      this.close_menu();
    }

  }.bind(this));


  this.create_nav();
  this.create_autocomplete();





  


  // console.log('rippledot.component.MobileHeader: init');
};
goog.inherits(rippledot.component.MobileHeader, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
rippledot.component.MobileHeader.DEFAULT = {
};



/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
rippledot.component.MobileHeader.ON_OPEN_MENU = 'on_open_menu';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
rippledot.component.MobileHeader.ON_CLOSE_MENU = 'on_close_menu';

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


rippledot.component.MobileHeader.prototype.open_menu = function(){
  if (this.is_expanded == false) {
    this.is_expanded = true;

    this.window_scroll = this.window_element.scrollTop();

    this.body_element.addClass('mobile-menu-open-version');
    this.window_element.scrollTop(0);



    this.dispatchEvent(new goog.events.Event(rippledot.component.MobileHeader.ON_OPEN_MENU));

  }
};
rippledot.component.MobileHeader.prototype.close_menu = function(){
  if (this.is_expanded == true) {
    this.is_expanded = false;

    this.body_element.removeClass('mobile-menu-open-version');

    this.window_element.scrollTop(this.window_scroll);

    this.dispatchEvent(new goog.events.Event(rippledot.component.MobileHeader.ON_CLOSE_MENU));


  }
};


rippledot.component.MobileHeader.prototype.update_layout = function() {

  var target_height = this.window_element.height();

  this.expand_container.css({
    'min-height': target_height + 'px'
  });
};


rippledot.component.MobileHeader.prototype.create_nav = function() {

  this.expand_container.find('#mobile-header-menu nav > ul > li.has-sub-menu > a').click(function(event){
    event.preventDefault();

    var li = $(event.currentTarget).parent();

    if (li.hasClass('expand-version') == true) {

      
      // close
      li.removeClass('expand-version');
      li.find('> ul').stop(0).slideUp(500);
      
      
      // // let it clickthrough // not anymore
      
    } else {

      $('#mobile-header-menu nav > ul > li.has-sub-menu').removeClass('expand-version');
      $('#mobile-header-menu nav > ul > li.has-sub-menu ul').stop(0).slideUp(500);

      // open
      li.addClass('expand-version');
      li.find('> ul').stop(0).slideDown(500);
    }
  });

  // clicking the arrow button can open and close the mobile menu
  this.expand_container.find('#mobile-header-menu nav > ul > li.has-sub-menu .arrow-expand-btn').click(function(event){
    var li = $(event.currentTarget).parent();

    event.preventDefault();

    if (li.hasClass('expand-version') == true) {

      // close 
      li.removeClass('expand-version');
      li.find('> ul').stop(0).slideUp(500);

    } else {

      $('#mobile-header-menu nav > ul > li.has-sub-menu').removeClass('expand-version');
      $('#mobile-header-menu nav > ul > li.has-sub-menu ul').stop(0).slideUp(500);

      // open
      li.addClass('expand-version');
      li.find('> ul').stop(0).slideDown(500);

    };

      

  });


};

rippledot.component.MobileHeader.prototype.create_autocomplete = function() {
  this.auto_complete_search = new manic.ui.AutoCompleteSearch({
    'data_container': '#search-data-container',
    'selector': '.search-data-item',
    'unique_name': 'ac-renderer-mobile-header-search'
  }, $('#mobile-header-search'));
};


rippledot.component.MobileHeader.prototype.asdf = function() {
  

};



//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
rippledot.component.MobileHeader.prototype.on_event_handler_01 = function(event) {
};

/**
 * @param {object} event
 */
rippledot.component.MobileHeader.prototype.on_event_handler_02 = function(event) {
};

/**
 * @param {object} event
 */
rippledot.component.MobileHeader.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
rippledot.component.MobileHeader.prototype.on_event_handler_04 = function(event) {
};






rippledot.component.MobileHeader.prototype.sample_method_calls = function() {

  // sample override
  rippledot.component.MobileHeader.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(rippledot.component.MobileHeader.EVENT_01));
};