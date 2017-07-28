goog.provide('rippledot.page.Default');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.page.Page');

goog.require('manic.ui.BoxItem');

goog.require('rippledot.component.DesktopHeader');
goog.require('rippledot.component.DesktopSidebar');
goog.require('rippledot.component.DesktopAside');

goog.require('rippledot.component.MobileHeader');

/**
 * The Default Page constructor
 * @inheritDoc
 * @constructor
 * @extends {manic.page.Page}
 */
rippledot.page.Default = function(options, element) {

  manic.page.Page.call(this, options);
  this.options = $.extend(this.options, rippledot.page.Default.DEFAULT, options);


  /*
  if ($('body').hasClass('chinese-version')) {
    manic.SITE_LANGUAGE = 'cn';
  }
  if ($('body').hasClass('bahasa-version')) {
    manic.SITE_LANGUAGE = 'in';
  }
  */
  

 
  //   __     ___    ____
  //   \ \   / / \  |  _ \
  //    \ \ / / _ \ | |_) |
  //     \ V / ___ \|  _ <
  //      \_/_/   \_\_| \_\
  //

  /**
   * @type {rippledot.component.DesktopHeader}
   */
  this.desktop_header = null;

  /**
   * @type {rippledot.component.DesktopSidebar}
   */
  this.desktop_sidebar = null;


  /**
   * @type {rippledot.component.DesktopAside}
   */
  this.desktop_aside = null;
  


  /**
   * @type {rippledot.component.MobileHeader}
   */
  this.mobile_header = null;



  /**
   * @type {Array.<manic.ui.BoxItem>}
   */
  this.box_item_array = [];




  // min height variables
  this.is_page_min_height = false;
  if( this.body.hasClass('min-height-version') == true ){
    this.is_page_min_height = true;
  }

  this.is_page_min_height_mobile = false;
  if( this.body.hasClass('min-height-mobile-version') == true ){
    this.is_page_min_height_mobile = true;
  }

  // this.page_wrapper = $('#page-wrapper');
  // this.page_wrapper_content = $('#page-wrapper-content');
  this.min_height_target = $('.min-height-target')
  this.min_height_target_mobile = $('.min-height-target-mobile')

  this.desktop_header_element = $('#desktop-header');
  this.desktop_subnav_element = $('#desktop-subnav-header');
  this.desktop_footer_element = $('#desktop-footer');
  this.mobile_header_element = $('#mobile-header');


  this.has_subnav = false;
  if($('.desktop-header-subnav-spacer').length != 0) {
    this.has_subnav = true;
  }
  



  // console.log('rippledot.page.Default: init');
};
goog.inherits(rippledot.page.Default, manic.page.Page);


/**
 * like jQuery options
 * @const {object}
 */
rippledot.page.Default.DEFAULT = {
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
rippledot.page.Default.EVENT_01 = '';

//    ___ _   _ ___ _____
//   |_ _| \ | |_ _|_   _|
//    | ||  \| || |  | |
//    | || |\  || |  | |
//   |___|_| \_|___| |_|
//


rippledot.page.Default.prototype.init = function() {
  rippledot.page.Default.superClass_.init.call(this);



  if ($('#desktop-header').length != 0) {
    this.desktop_header = new rippledot.component.DesktopHeader({}, $('#desktop-header'));
  }
  if ($('#desktop-sidebar').length != 0) {
    this.desktop_sidebar = new rippledot.component.DesktopSidebar({}, $('#desktop-sidebar'));
  }

  if ($('#desktop-aside').length != 0) {
    this.desktop_aside = new rippledot.component.DesktopAside({}, $('#desktop-aside'));
  }


  if ($('#mobile-header').length != 0 && $('#mobile-header-expand-container').length != 0){
    this.mobile_header = new rippledot.component.MobileHeader({}, $('#mobile-header'));

    this.mobile_header.update_layout();

    goog.events.listen(this.mobile_header, rippledot.component.MobileHeader.ON_CLOSE_MENU, function(event){

      this.update_page_layout();
      
    }.bind(this));

    

    
    

  }
  

  this.create_box_item();



  // console.log('rippledot.page.Default: init');

};






rippledot.page.Default.prototype.create_box_item = function(){

  var arr = $('.manic-box-item-container');
  var item = null;

  /**
   * @type {manic.ui.BoxItem}
   */
  var box_item = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    box_item = new manic.ui.BoxItem({}, item);

    this.box_item_array[this.box_item_array.length] = box_item;
  }
  
  
};






//    _        _ __   _____  _   _ _____
//   | |      / \\ \ / / _ \| | | |_   _|
//   | |     / _ \\ V / | | | | | | | |
//   | |___ / ___ \| || |_| | |_| | | |
//   |_____/_/   \_\_| \___/ \___/  |_|
//


/**
 * @override
 * @inheritDoc
 */
rippledot.page.Default.prototype.update_page_layout = function(){
  rippledot.page.Default.superClass_.update_page_layout.call(this);

  if (manic.IS_ACTUAL_MOBILE == true) {
    this.body.addClass('actual-mobile-version');
  } else {
    this.body.removeClass('actual-mobile-version');
  }

  
  /*
  if (manic.IS_MOBILE_HEADER == false) {

  } else {

  }
  */
 

  /**
   * @type {manic.ui.BoxItem}
   */
  var box_item = null;


  for (var i = 0, l=this.box_item_array.length; i < l; i++) {

    box_item = this.box_item_array[i];
    box_item.update_layout();
  }


  // update mobile header min height
  // if (manic.IS_MOBILE && goog.isDefAndNotNull(this.mobile_header)) {
  if (manic.IS_ACTUAL_MOBILE && goog.isDefAndNotNull(this.mobile_header)) {
    this.mobile_header.update_layout();
  }





  // update min height
  if (this.is_page_min_height == true && manic.IS_MOBILE == false) {

    // this is just wrong ...
    /*
    var target_height = this.window_height - this.desktop_header_element.outerHeight() - this.desktop_footer_element.outerHeight();

    if (this.has_subnav == true) {
      console.log('has_subnav')
      target_height = this.window_height - this.desktop_header_element.outerHeight() - this.desktop_subnav_element.outerHeight() - this.desktop_footer_element.outerHeight();
      
    }
    */
   var target_height = this.window_height - this.desktop_footer_element.outerHeight();

    this.min_height_target.css({
      'min-height': target_height + 'px'
    });
  }

  if (this.is_page_min_height_mobile == true && manic.IS_MOBILE == true) {

    // var target_height = this.window_height - this.mobile_header_element.outerHeight();
    var target_height = this.window_height;

    this.min_height_target_mobile.css({
      'min-height': target_height + 'px'
    });
  }








};




//    _   _    _    ____  _   _ _____  _    ____ ____
//   | | | |  / \  / ___|| | | |_   _|/ \  / ___/ ___|
//   | |_| | / _ \ \___ \| |_| | | | / _ \| |  _\___ \
//   |  _  |/ ___ \ ___) |  _  | | |/ ___ \ |_| |___) |
//   |_| |_/_/   \_\____/|_| |_| |_/_/   \_\____|____/
//


/**
 * @override
 * @inheritDoc
 */
rippledot.page.Default.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  rippledot.page.Default.superClass_.scroll_to_target.call(this, str_param, str_param_2, str_param_3);
  

  
}

/**
 * @override
 * @inheritDoc
 */
rippledot.page.Default.prototype.on_scroll_to_no_target = function() {
  rippledot.page.Default.superClass_.on_scroll_to_no_target.call(this);

  
}




goog.exportSymbol('rippledot.page.Default', rippledot.page.Default);