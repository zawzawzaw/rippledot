goog.provide('rippledot.component.TransactionFilter');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('rippledot.component.TransactionDataItem');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
rippledot.component.TransactionFilter = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, rippledot.component.TransactionFilter.DEFAULT, options);
  this.element = element;
  

  this.current_category_array = [];
  // this.current_deal_type_array = [];
  this.current_deal_type = 'all';
  // this.current_year_array = [];

    
  this.category_list_element = this.element.find('#page-transaction-index-category-filter');
  this.deal_type_list_element = this.element.find('#page-transaction-index-deal-type-filter');
  // this.year_list_element = this.element.find('#page-transaction-index-year-filter');

  this.selected_filter_container = $('#page-transaction-index-filter-selected-container ul');
  this.selected_filter_container.on('click', 'li', function(event){
    var item = $(event.currentTarget);
    var value = item.attr('data-value');

    if(item.hasClass('category-version')) {

      this.deselect_category(value);

    } else if(item.hasClass('deal-type-version')) {

      this.deselect_deal_type(value);

    } /*else if(item.hasClass('year-version')) {

      this.deselect_year(value);

    }*/
  }.bind(this));


  this.category_item_array = [];
  this.deal_type_item_array = [];
  // this.year_item_array = [];

  this.category_item_dictionary = [];
  this.deal_type_item_dictionary = [];
  // this.year_item_dictionary = [];

  this.category_name_dictionary = [];
  this.deal_type_name_dictionary = [];
  // this.year_name_dictionary = [];

  this.create_category();
  this.create_deal_type();
  // this.create_year();



  // console.log('rippledot.component.TransactionFilter: init');
};
goog.inherits(rippledot.component.TransactionFilter, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
rippledot.component.TransactionFilter.DEFAULT = {
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
rippledot.component.TransactionFilter.ON_CHANGE = 'on_change';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//



//    _   _ ____  ____    _  _____ _____
//   | | | |  _ \|  _ \  / \|_   _| ____|
//   | | | | |_) | | | |/ _ \ | | |  _|
//   | |_| |  __/| |_| / ___ \| | | |___
//    \___/|_|   |____/_/   \_\_| |_____|
//

rippledot.component.TransactionFilter.prototype.update_selected_elements = function() {

  var arr = [];
  var item = null;
  var item_str = '';


  // CATEGORY
  
  if (this.current_category_array.length == 0) {

    // select all
    arr = this.category_item_array;
    for (var i = 0, l=arr.length; i < l; i++) {
      item = $(arr[i]);
      if (i == 0){
        item.addClass('selected');
      } else {
        item.removeClass('selected');
      }
    }
    
  } else {

    arr = this.category_item_dictionary;

    for (var i in arr) {

      item = arr[i];

      if (this.current_category_array.indexOf(i) != -1) {
        item.addClass('selected');
      } else {
        item.removeClass('selected');

      }
      

    }

  }

  // deal_type
  

  if (this.current_deal_type == 'all') {

    // select all
    arr = this.deal_type_item_array;
    for (var i = 0, l=arr.length; i < l; i++) {
      item = $(arr[i]);
      if (i == 0){
        item.addClass('selected');
      } else {
        item.removeClass('selected');
      }
    }
    
  } else {

    arr = this.deal_type_item_dictionary;

    for (var i in arr) {

      item = arr[i];

      if (this.current_deal_type == i) {
        item.addClass('selected');
      } else {
        item.removeClass('selected');
      }

    }

  }

  // YEAR
  /*
  if (this.current_year_array.length == 0) {

    // select all
    arr = this.year_item_array;
    for (var i = 0, l=arr.length; i < l; i++) {
      item = $(arr[i]);
      if (i == 0){
        item.addClass('selected');
      } else {
        item.removeClass('selected');
      }
    }
    
  } else {

    arr = this.year_item_dictionary;

    for (var i in arr) {

      item = arr[i];

      if (this.current_year_array.indexOf(i) != -1) {
        item.addClass('selected');
      } else {
        item.removeClass('selected');

      }
      

    }

  }
  */






  // update selected filters

  this.selected_filter_container.empty();


  var fragment = $(document.createDocumentFragment());
  var name = '';
  var value = '';
  
  // CATEGORY

  for (var i = 0, l=this.current_category_array.length; i < l; i++) {
    value = this.current_category_array[i];
    name = this.category_name_dictionary[value];

    item_str = '<li data-value="' + value + '" class="category-version"><a href="javascript:void(0);">' + name + '</a></li>';
    item = $(item_str);

    fragment.append(item);

  }

  this.selected_filter_container.append(fragment);


  // deal type
  
  if (this.current_deal_type != 'all'){
    value = this.current_deal_type;
    name = this.deal_type_name_dictionary[value];

    item_str = '<li data-value="' + value + '" class="deal-type-version"><a href="javascript:void(0);">' + name + '</a></li>';
    item = $(item_str);

    fragment.append(item);
    this.selected_filter_container.append(fragment);
  }


  // YEAR
  /*    
  for (var i = 0, l=this.current_year_array.length; i < l; i++) {
    value = this.current_year_array[i];
    name = this.year_name_dictionary[value];

    item_str = '<li data-value="' + value + '" class="year-version"><a href="javascript:void(0);">' + name + '</a></li>';
    item = $(item_str);

    fragment.append(item);

  }

  this.selected_filter_container.append(fragment);
  */


  this.dispatchEvent(new goog.events.Event(rippledot.component.TransactionFilter.ON_CHANGE));

};



//     ____    _  _____ _____ ____  ___  ______   __
//    / ___|  / \|_   _| ____/ ___|/ _ \|  _ \ \ / /
//   | |     / _ \ | | |  _|| |  _| | | | |_) \ V /
//   | |___ / ___ \| | | |__| |_| | |_| |  _ < | |
//    \____/_/   \_\_| |_____\____|\___/|_| \_\|_|
//



rippledot.component.TransactionFilter.prototype.create_category = function() {

  var arr = this.category_list_element.find('li');
  var item = null;
  var value = '';
  var name = '';

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    value = item.attr('data-value');
    name = '' + item.find('a').text();

    item.data('value', value);

    item.click(function(event){
      var item = $(event.currentTarget);
      var value = item.data('value');
      
      // console.log('has_category');
      // console.log(this.has_category(value))

      if (this.has_category(value)) {
        this.deselect_category(value);
      } else {

        this.select_category(value);
      }
      
    }.bind(this));

    this.category_item_array[i] = item;
    this.category_item_dictionary[value] = item;
    this.category_name_dictionary[value] = name;
  }

};

rippledot.component.TransactionFilter.prototype.has_category = function(str_param) {
  if (str_param == 'all') {


    if (this.current_category_array.length == 0) {
      return true;
    } else {
      return false;
    }

  } else {

    var has_item = this.current_category_array.indexOf(str_param) != -1;
    return has_item;
    
  }
};


/**
 * @param  {String} str_param
 */
rippledot.component.TransactionFilter.prototype.select_category = function(str_param) {

  // console.log('select_category: ' + str_param);

  if (str_param == 'all') {

    if (this.current_category_array.length != 0) {

      this.current_category_array = [];
      this.update_selected_elements();

    }

  } else {

    if ((goog.isDefAndNotNull(str_param) == true) &&
        (goog.isDefAndNotNull(this.category_item_dictionary[str_param]) == true) &&
        (this.current_category_array.indexOf(str_param) == -1)) {

      this.current_category_array[this.current_category_array.length] = str_param;
      this.update_selected_elements();
    }

  }
};

/**
 * @param  {String} str_param
 */
rippledot.component.TransactionFilter.prototype.deselect_category = function(str_param) {

  // console.log('deselect_category: ' + str_param);

  if (goog.isDefAndNotNull(str_param) == true &&
      goog.isDefAndNotNull(this.category_item_dictionary[str_param]) == true &&
      this.current_category_array.indexOf(str_param) != -1) {

    var temp_index = this.current_category_array.indexOf(str_param);
    this.current_category_array.splice(temp_index, 1);

    this.update_selected_elements();
  }
};


//     ____ ___  _   _ _   _ _____ ______   __
//    / ___/ _ \| | | | \ | |_   _|  _ \ \ / /
//   | |  | | | | | | |  \| | | | | |_) \ V /
//   | |__| |_| | |_| | |\  | | | |  _ < | |
//    \____\___/ \___/|_| \_| |_| |_| \_\|_|
//


rippledot.component.TransactionFilter.prototype.create_deal_type = function() {

  var arr = this.deal_type_list_element.find('li');
  var item = null;
  var value = '';
  var name = '';

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    value = item.attr('data-value');
    name = '' + item.find('a').text();

    item.data('value', value);

    item.click(function(event){
      var item = $(event.currentTarget);
      var value = item.data('value');

      if (this.has_deal_type(value)) {
        this.select_deal_type('all');   // this is the deselect
      } else {

        this.select_deal_type(value);     // no deselect deal_type
      }
      
      
    }.bind(this));

    this.deal_type_item_array[i] = item;
    this.deal_type_item_dictionary[value] = item;
    this.deal_type_name_dictionary[value] = name;
  }

};

rippledot.component.TransactionFilter.prototype.has_deal_type = function(str_param) {
  if (str_param == 'all') {
    return true;

  } else {

    var has_item = this.current_deal_type == str_param;
    return has_item;
    
  }
};


/**
 * @param  {String} str_param
 */
rippledot.component.TransactionFilter.prototype.select_deal_type = function(str_param) {

  // console.log('select_deal_type: ' + str_param);

  if ((goog.isDefAndNotNull(str_param) == true) &&
      (goog.isDefAndNotNull(this.deal_type_item_dictionary[str_param]) == true) ){

    this.current_deal_type = str_param;
    this.update_selected_elements();
  }
};

/**
 * @param  {String} str_param
 */
rippledot.component.TransactionFilter.prototype.deselect_deal_type = function(str_param) {

  // console.log('deselect_deal_type: ' + str_param);

  if (goog.isDefAndNotNull(str_param) == true &&
      goog.isDefAndNotNull(this.deal_type_item_dictionary[str_param]) == true &&
      this.current_deal_type == str_param) {

    this.current_deal_type = 'all';
    this.update_selected_elements();
  }
};


//   __   _______    _    ____
//   \ \ / / ____|  / \  |  _ \
//    \ V /|  _|   / _ \ | |_) |
//     | | | |___ / ___ \|  _ <
//     |_| |_____/_/   \_\_| \_\
//



/*
rippledot.component.TransactionFilter.prototype.create_year = function() {

  var arr = this.year_list_element.find('li');
  var item = null;
  var value = '';
  var name = '';

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    value = item.attr('data-value');
    name = '' + item.find('a').text();

    item.data('value', value);

    item.click(function(event){
      var item = $(event.currentTarget);
      var value = item.data('value');
      


      if (this.has_year(value)) {
        this.deselect_year(value);
      } else {

        this.select_year(value);
      }
      
    }.bind(this));

    this.year_item_array[i] = item;
    this.year_item_dictionary[value] = item;
    this.year_name_dictionary[value] = name;
  }

};

rippledot.component.TransactionFilter.prototype.has_year = function(str_param) {
  if (str_param == 'all') {


    if (this.current_year_array.length == 0) {
      return true;
    } else {
      return false;
    }

  } else {

    var has_item = this.current_year_array.indexOf(str_param) != -1;
    return has_item;
    
  }
};


rippledot.component.TransactionFilter.prototype.select_year = function(str_param) {

  // console.log('select_year: ' + str_param);

  if (str_param == 'all') {

    if (this.current_year_array.length != 0) {

      this.current_year_array = [];
      this.update_selected_elements();

    }

  } else {

    if ((goog.isDefAndNotNull(str_param) == true) &&
        (goog.isDefAndNotNull(this.year_item_dictionary[str_param]) == true) &&
        (this.current_year_array.indexOf(str_param) == -1)) {

      this.current_year_array[this.current_year_array.length] = str_param;
      this.update_selected_elements();
    }

  }
};

rippledot.component.TransactionFilter.prototype.deselect_year = function(str_param) {

  // console.log('deselect_year: ' + str_param);

  if (goog.isDefAndNotNull(str_param) == true &&
      goog.isDefAndNotNull(this.year_item_dictionary[str_param]) == true &&
      this.current_year_array.indexOf(str_param) != -1) {

    var temp_index = this.current_year_array.indexOf(str_param);
    this.current_year_array.splice(temp_index, 1);

    this.update_selected_elements();
  }
};
*/


