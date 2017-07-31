goog.provide('rippledot.component.DesktopSidebar');
goog.provide('rippledot.component.DesktopSidebarItem');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');
goog.require('manic.ui.HoverItem');

/**
 * The DesktopSidebar constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
rippledot.component.DesktopSidebar = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, rippledot.component.DesktopSidebar.DEFAULT, options);
  this.element = element;

  this.current_color = 'none';

  // A VERY ROUNDABOUT MANNER OF ENSURING A SMOOTH HOVER ANIMATION

  this.is_inside = false;
  this.is_animating = false;

  this.current_index = -1;

  this.element.mouseenter(this.on_element_mouseenter.bind(this));
  this.element.mouseleave(this.on_element_mouseleave.bind(this));

  this.has_temp = false;


  /**
   * @type {Array.<rippledot.component.DesktopSidebarItem>}
   */
  this.item_array = [];

  this.create_element_array();

  // console.log('rippledot.component.DesktopSidebar: init');
};
goog.inherits(rippledot.component.DesktopSidebar, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
rippledot.component.DesktopSidebar.DEFAULT = {
};


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//




rippledot.component.DesktopSidebar.prototype.create_element_array = function() {
  var arr = [];
  var item = null;
  var item_a = null;

  /**
   * @type {rippledot.component.DesktopSidebarItem}
   */
  var sidebar_item = null;

  var line_array = [];
  var box_array = [];

  arr = this.element.find('#desktop-sidebar-lines .line');
  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    line_array[i] = item;
  }

  arr = this.element.find('#desktop-sidebar-boxes .box');
  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    box_array[i] = item;
  }


  arr = this.element.find('#desktop-sidebar-menu nav ul li');
  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    item_a = item.find('.link');

    if (item_a.hasClass('selected')){
      this.current_index = i;

      // console.log('this.current_index: ' + i);
    }

    sidebar_item = new rippledot.component.DesktopSidebarItem({
      'i': i,
      'line': line_array[i],
      'box': box_array[i]
    }, item);


    goog.events.listen(sidebar_item, rippledot.component.DesktopSidebarItem.ON_MOUSEOVER, this.on_item_mouseover.bind(this));
    goog.events.listen(sidebar_item, rippledot.component.DesktopSidebarItem.ON_MOUSEOUT, this.on_item_mouseout.bind(this));

    
    


    this.item_array[i] = sidebar_item;
  }

};

rippledot.component.DesktopSidebar.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//



// sidebar is disabled by default
rippledot.component.DesktopSidebar.prototype.disable_sidebar = function() {
  this.element.addClass('disabled-version');
};
rippledot.component.DesktopSidebar.prototype.enable_sidebar = function() {
  this.element.removeClass('disabled-version');
};

/**
 * @param  {String} str_param
 */
rippledot.component.DesktopSidebar.prototype.instant_change_color = function(str_param) {
  if (this.current_color != str_param) {
    this.current_color = str_param;

    switch(this.current_color) {
      case 'white':
        this.element.addClass('white-version');
        this.element.removeClass('red-version');

        break;
      case 'red':
        this.element.removeClass('white-version');
        this.element.addClass('red-version');

        break;

      case 'normal':
      default :
        this.element.removeClass('white-version');
        this.element.removeClass('red-version');

        break;
    }

  }
};

/**
 * @param  {String} str_param
 */
rippledot.component.DesktopSidebar.prototype.change_color = function(str_param) {

  if (this.current_color != str_param) {
    this.current_color = str_param;

    this.element.addClass('expand-version');
    TweenMax.killDelayedCallsTo(this.delayed_change_color)
    // TweenMax.delayedCall(1.3, this.delayed_change_color, [], this);
    TweenMax.delayedCall(2, this.delayed_change_color, [], this);

    switch(this.current_color) {
      case 'white':
        this.element.addClass('white-version');
        this.element.removeClass('red-version');

        break;
      case 'red':
        this.element.removeClass('white-version');
        this.element.addClass('red-version');

        break;

      case 'normal':
      default :
        this.element.removeClass('white-version');
        this.element.removeClass('red-version');

        break;
    }

  }

  
};

rippledot.component.DesktopSidebar.prototype.delayed_change_color = function(){
  if (this.is_inside == false) {
    this.element.removeClass('expand-version');
  }

};


/**
 * @param {Number} num_param
 */
rippledot.component.DesktopSidebar.prototype.set_selected = function(num_param) {

  // console.log('set_selected: ' + num_param);
  
  if(this.has_temp == true) {

    var target_index = num_param;
    target_index = target_index <= 0 ? 0 : target_index;
    target_index = target_index >= (num - 1) ? (num - 1) : target_index;

    this.current_index = target_index;

  } else {

    if (num_param == -1) {

      this.deselect_all();

    } else {

      /**
       * @type {rippledot.component.DesktopSidebarItem}
       */
      var sidebar_item = null;

      var num = this.item_array.length;

      var target_index = num_param;
      target_index = target_index <= 0 ? 0 : target_index;
      target_index = target_index >= (num - 1) ? (num - 1) : target_index;

      this.current_index = target_index;

      for (var i = 0, l=this.item_array.length; i < l; i++) {

        sidebar_item = this.item_array[i];

        if (i == target_index) {

          sidebar_item.select_item();
        } else {

          sidebar_item.deselect_item();
        }
      }

    } // end if 

  } // end if has temp

};


rippledot.component.DesktopSidebar.prototype.set_temporary_selected = function(num_param){

  this.has_temp = true;

  /**
   * @type {rippledot.component.DesktopSidebarItem}
   */
  var sidebar_item = null;

  var num = this.item_array.length;

  var target_index = num_param;
  target_index = target_index <= 0 ? 0 : target_index;
  target_index = target_index >= (num - 1) ? (num - 1) : target_index;

  for (var i = 0, l=this.item_array.length; i < l; i++) {

    sidebar_item = this.item_array[i];
    sidebar_item.deselect_item();

    if (i == target_index) {

      // sidebar_item.select_item();
      sidebar_item.select_item_temporary();
    } else {

      // sidebar_item.deselect_item();
      sidebar_item.deselect_item_temporary();
    }
  }
};

rippledot.component.DesktopSidebar.prototype.unset_temporary_selected = function(){

  this.has_temp = false;

  /**
   * @type {rippledot.component.DesktopSidebarItem}
   */
  var sidebar_item = null;

  for (var i = 0, l=this.item_array.length; i < l; i++) {

    sidebar_item = this.item_array[i];
    sidebar_item.deselect_item_temporary(); // remove all classes

    if (i == this.current_index) {

      sidebar_item.select_item();
    } else {

      sidebar_item.deselect_item();
    }
  }

};


rippledot.component.DesktopSidebar.prototype.deselect_all = function() {

  this.current_index = -1;

  /**
   * @type {rippledot.component.DesktopSidebarItem}
   */
  var sidebar_item = null;

  for (var i = 0, l=this.item_array.length; i < l; i++) {

    sidebar_item = this.item_array[i];
    sidebar_item.deselect_item();

  }
};

rippledot.component.DesktopSidebar.prototype.show_sidebar = function() {
  this.removeClass('hidden-version');
};
rippledot.component.DesktopSidebar.prototype.hide_sidebar = function() {
  this.addClass('hidden-version');
};




rippledot.component.DesktopSidebar.prototype.on_item_mouseover = function(event) {
  /**
   * @type {rippledot.component.DesktopSidebarItem}
   */
  var sidebar_item = event.currentTarget;
  // console.log('sidebar_item.i: ' + sidebar_item.i);

  this.set_temporary_selected(sidebar_item.i);

};

rippledot.component.DesktopSidebar.prototype.on_item_mouseout = function(event) {
  /**
   * @type {rippledot.component.DesktopSidebarItem}
   */
  var sidebar_item = event.currentTarget;

  // console.log('sidebar_item.i: ' + sidebar_item.i);
  

  // this.unset_temporary_selected();

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
rippledot.component.DesktopSidebar.prototype.on_element_mouseenter = function(event) {
  this.is_inside = true;

  // console.log('on_element_mouseenter');

  if (this.is_animating == false) {
    this.is_animating = true;
    this.element.addClass('expand-version');

    TweenMax.killDelayedCallsTo(this.on_element_mouseenter_delayed);
    TweenMax.delayedCall(0.55, this.on_element_mouseenter_delayed, [], this);
  }
};

/**
 * @param {object} event
 */
rippledot.component.DesktopSidebar.prototype.on_element_mouseenter_delayed = function(event) {
  this.is_animating = false;

  if (this.is_inside == true){
    this.enable_sidebar();
  } else {
    this.disable_sidebar();
  }
    
  if (this.is_inside == false){
    this.is_animating = true;
    this.element.removeClass('expand-version');
    

    TweenMax.killDelayedCallsTo(this.on_element_mouseleave_delayed);
    TweenMax.delayedCall(0.55, this.on_element_mouseleave_delayed, [], this);
  }
};

/**
 * @param {object} event
 */
rippledot.component.DesktopSidebar.prototype.on_element_mouseleave = function(event) {
  this.is_inside = false;

  this.disable_sidebar();
    
  if (this.is_animating == false) {
    this.is_animating = true;
    this.element.removeClass('expand-version');

    TweenMax.killDelayedCallsTo(this.on_element_mouseleave_delayed);
    TweenMax.delayedCall(0.55, this.on_element_mouseleave_delayed, [], this);
  }

  this.unset_temporary_selected();

};

/**
 * @param {object} event
 */
rippledot.component.DesktopSidebar.prototype.on_element_mouseleave_delayed = function(event) {
  this.is_animating = false;
    
  if (this.is_inside == true){
    this.is_animating = true;
    this.element.addClass('expand-version');

    TweenMax.killDelayedCallsTo(this.on_element_mouseenter_delayed);
    TweenMax.delayedCall(0.55, this.on_element_mouseenter_delayed, [], this);
  }
};










// ======================================================================= //
// 
// ======================================================================= //
// 
// ======================================================================= //





//    ___ _____ _____ __  __
//   |_ _|_   _| ____|  \/  |
//    | |  | | |  _| | |\/| |
//    | |  | | | |___| |  | |
//   |___| |_| |_____|_|  |_|
//




/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {manic.ui.HoverItem}
 */
rippledot.component.DesktopSidebarItem = function(options, element) {

  manic.ui.HoverItem.call(this, options, element);
  this.options = $.extend(this.options, rippledot.component.DesktopSidebarItem.DEFAULT, options);

  this.link_element = this.element.find('.link');

  this.i = this.options['i'];
  this.line_element = this.options['line'];
  this.box_element = this.options['box'];


  

  // console.log('rippledot.component.DesktopSidebarItem: init');
};
goog.inherits(rippledot.component.DesktopSidebarItem, manic.ui.HoverItem);


/**
 * like jQuery options
 * @const {object}
 */
rippledot.component.DesktopSidebarItem.DEFAULT = {
  'i': 0,
  'line': null,
  'box': null
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
rippledot.component.DesktopSidebarItem.ON_MOUSEOVER = 'on_mouseover';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
rippledot.component.DesktopSidebarItem.ON_MOUSEOUT = 'on_mouseout';





//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


rippledot.component.DesktopSidebarItem.prototype.select_item = function() {
  this.link_element.addClass('selected');
  this.line_element.addClass('selected');
  this.box_element.addClass('selected');
};
rippledot.component.DesktopSidebarItem.prototype.deselect_item = function() {
  this.link_element.removeClass('selected');
  this.line_element.removeClass('selected');
  this.box_element.removeClass('selected');
};


rippledot.component.DesktopSidebarItem.prototype.select_item_temporary = function() {
  this.link_element.addClass('selected-temp');
  this.line_element.addClass('selected-temp');
  this.box_element.addClass('selected-temp');
};
rippledot.component.DesktopSidebarItem.prototype.deselect_item_temporary = function() {
  this.link_element.removeClass('selected-temp');
  this.line_element.removeClass('selected-temp');
  this.box_element.removeClass('selected-temp');
};



/**
 * @override
 * @inheritDoc
 */
rippledot.component.DesktopSidebarItem.prototype.on_mouseover = function(){
  
  /*
  this.link_element.addClass('hover');
  this.line_element.addClass('hover');
  this.box_element.addClass('hover');
  */
  
  this.dispatchEvent(new goog.events.Event(rippledot.component.DesktopSidebarItem.ON_MOUSEOVER));

};

/**
 * @override
 * @inheritDoc
 */
rippledot.component.DesktopSidebarItem.prototype.on_mouseout = function(){
  
  /*
  this.link_element.removeClass('hover');
  this.line_element.removeClass('hover');
  this.box_element.removeClass('hover');
  */
 
  this.dispatchEvent(new goog.events.Event(rippledot.component.DesktopSidebarItem.ON_MOUSEOUT));
  
};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//



//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

