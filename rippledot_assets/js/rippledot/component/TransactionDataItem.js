goog.provide('rippledot.component.TransactionDataItem');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
rippledot.component.TransactionDataItem = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, rippledot.component.TransactionDataItem.DEFAULT, options);
  this.element = element;

  /**
   * @type {jQuery}
   */
  this.html_element = null;

  this.data_name = '';
  this.data_image = '';
  this.data_url = '';

  this.data_category_array = [];
  this.data_deal_type = '';
  // this.data_year_array = [];


  var temp_name = this.element.attr('data-name');
  this.element.attr('data-name')
  if (goog.isDefAndNotNull(temp_name) == true && temp_name != '') {
    this.data_name = temp_name;
  }

  var temp_image = this.element.attr('data-image');
  this.element.attr('data-image')
  if (goog.isDefAndNotNull(temp_image) == true && temp_image != '') {
    this.data_image = temp_image;
  }

  var temp_url = this.element.attr('data-url');
  this.element.attr('data-url')
  if (goog.isDefAndNotNull(temp_url) == true && temp_url != '') {
    this.data_url = temp_url;
  }


  var temp_category = this.element.attr('data-category');
  this.element.attr('data-category')
  if (goog.isDefAndNotNull(temp_category) == true && temp_category != '') {

    this.data_category_array = temp_category.split(' ');    // space delimited
  }

  var temp_deal_type = this.element.attr('data-deal-type');
  this.element.attr('data-deal-type')
  if (goog.isDefAndNotNull(temp_deal_type) == true && temp_deal_type != '') {
    this.data_deal_type = temp_deal_type;
  }



  /*
  var temp_year = this.element.attr('data-year');
  this.element.attr('data-year')
  if (goog.isDefAndNotNull(temp_year) == true && temp_year != '') {
    this.data_year_array = temp_year.split(' ');
    // this.data_year = temp_year;
  }
  */






  // console.log('rippledot.component.TransactionDataItem: init');
};
goog.inherits(rippledot.component.TransactionDataItem, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
rippledot.component.TransactionDataItem.DEFAULT = {
};




/**
 * CLASSNAME Constant
 * @const
 * @type {string}
 */
rippledot.component.TransactionDataItem.HTML_TEMPLATE = [
  '<div class="page-transaction-index-item">',
    '<a href="{url}" title="{name}" class="item-image">',
      '<div class="manic-image-container">',
        '<img src="" data-image="{image}">',
      '</div>',
    '</a>',
    '<h3><a href="{url}" title="{name}">{name}</a></h3>',
  '</div>'
];


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


rippledot.component.TransactionDataItem.prototype.create_html_element = function() {
  var target_data_obj = {
    'name': this.data_name,
    'image': this.data_image,
    'url': this.data_url
  };

  var target_template = rippledot.component.TransactionDataItem.HTML_TEMPLATE.join('');
  var target_element_str = nano(target_template, target_data_obj);

  this.html_element = $(target_element_str);   

};
rippledot.component.TransactionDataItem.prototype.hide_item = function() {
  this.html_element.addClass('hidden-version');

};
rippledot.component.TransactionDataItem.prototype.show_item = function() {
  this.html_element.removeClass('hidden-version');
};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//
