goog.provide('rippledot.page.Contact');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.google.Map2');
goog.require('manic.ui.FileUpload');

goog.require('rippledot.page.Default')


/**
 * The Home constructor
 * @inheritDoc
 * @constructor
 * @extends {rippledot.page.Default}
 */
rippledot.page.Contact = function(options, element) {

  rippledot.page.Default.call(this, options, element);
  this.options = $.extend(this.options, rippledot.page.Contact.DEFAULT, options);



  this.is_contact_page = false;

  if (this.body.hasClass('page-contact-us') == true) {
    this.is_contact_page = true;
  }


  /**
   * @type {Array.<manic.ui.FileUpload>}
   */
  this.file_upload_array = [];

  


  /**
   * @type {manic.google.Map2}
   */
  this.contact_map = null;

  /**
   * @type {manic.google.Map2}
   */
  this.contact_map_mobile = null;

  // console.log('rippledot.page.Contact: init');
};
goog.inherits(rippledot.page.Contact, rippledot.page.Default);


/**
 * like jQuery options
 * @const {object}
 */
rippledot.page.Contact.DEFAULT = {
};

/**
 * Home Event Constant
 * @const
 * @type {string}
 */
rippledot.page.Contact.EVENT_01 = '';


//    ___ _   _ ___ _____
//   |_ _| \ | |_ _|_   _|
//    | ||  \| || |  | |
//    | || |\  || |  | |
//   |___|_| \_|___| |_|
//


/**
 * @override
 * @inheritDoc
 */
rippledot.page.Contact.prototype.init = function() {
  rippledot.page.Contact.superClass_.init.call(this);

  
  if (this.is_contact_page == true) {
    this.create_contact_map();
  }

  this.create_file_upload();

  
};






rippledot.page.Contact.prototype.create_contact_map = function() {

  if ($('#page-contact-us-map').length != 0) {
    this.contact_map = new manic.google.Map2({}, $('#page-contact-us-map'));
  }

  if ($('#page-contact-us-map-mobile').length != 0) {
    this.contact_map_mobile = new manic.google.Map2({
      'zoom_control': false
    }, $('#page-contact-us-map-mobile'));
  }
  
};



rippledot.page.Contact.prototype.create_file_upload = function() {

  var arr = $('.manic-file-upload');
  var item = null;

  /**
   * @type {manic.ui.FileUpload}
   */
  var file_upload = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    
    item = $(arr[i]);
    file_upload = new manic.ui.FileUpload({}, item);

    this.file_upload_array[i] = file_upload;
  }

};


rippledot.page.Contact.prototype.private_method_02 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//







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
rippledot.page.Contact.prototype.update_page_layout = function() {
  rippledot.page.Contact.superClass_.update_page_layout.call(this);



}




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
rippledot.page.Contact.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  rippledot.page.Contact.superClass_.scroll_to_target.call(this, str_param, str_param_2, str_param_3);
  

  
}

/**
 * @override
 * @inheritDoc
 */
rippledot.page.Contact.prototype.on_scroll_to_no_target = function() {
  rippledot.page.Contact.superClass_.on_scroll_to_no_target.call(this);

  
}


goog.exportSymbol('rippledot.page.Contact', rippledot.page.Contact);