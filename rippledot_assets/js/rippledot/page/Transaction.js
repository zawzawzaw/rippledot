
goog.provide('rippledot.page.Transaction');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');


goog.require('rippledot.page.Default')

goog.require('rippledot.component.TransactionFilter');
goog.require('rippledot.component.TransactionDataItem');


/**
 * The Home constructor
 * @inheritDoc
 * @constructor
 * @extends {rippledot.page.Default}
 */
rippledot.page.Transaction = function(options, element) {

  rippledot.page.Default.call(this, options, element);
  this.options = $.extend(this.options, rippledot.page.Transaction.DEFAULT, options);


  this.is_transaction_detail_page = false;
  this.is_transaction_index_page = false;

  if (this.body.hasClass('page-transaction-detail') == true) {
    this.is_transaction_detail_page = true;
  }

  if (this.body.hasClass('page-transaction-index') == true) {
    this.is_transaction_index_page = true;
  }


  /**
   * @type {Array.<rippledot.component.TransactionDataItem>}
   */
  this.data_array = [];

  /**
   * @type {Array.<rippledot.component.TransactionDataItem>}
   */
  this.result_array = [];



  this.is_filter_open = false;

  this.item_container = null;
  this.transaction_filter_element = null;

  this.show_filter_btn = null;
  this.hide_filter_btn = null;

  this.load_more_container_container = null;
  this.load_more_container = null;
  this.load_more_btn = null;


  this.no_result_container = null;
  this.no_result = null;


  
  


  /**
   * @type {rippledot.component.TransactionFilter}
   */
  this.transaction_filter = null;

  this.random_object = {x:0};


  
  



  // console.log('rippledot.page.Transaction: init');
};
goog.inherits(rippledot.page.Transaction, rippledot.page.Default);


/**
 * like jQuery options
 * @const {object}
 */
rippledot.page.Transaction.DEFAULT = {
};

/**
 * Home Event Constant
 * @const
 * @type {string}
 */
rippledot.page.Transaction.EVENT_01 = '';


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
rippledot.page.Transaction.prototype.init = function() {
  rippledot.page.Transaction.superClass_.init.call(this);

  if (this.is_transaction_detail_page) {
    // this.create_fullpage();
  }

  if (this.is_transaction_index_page) {
    this.parse_data();
    this.create_html();
    this.create_image_container();  // create the manic-image-container

    this.create_transaction_buttons();
    this.create_transaction_filter();

    this.on_transaction_filter_change(null);    // call it once
  }

  /*
  // for both
  this.desktop_header.show_bg();
  this.desktop_sidebar.set_selected(1);
  this.desktop_sidebar.instant_change_color('normal');
  */
  
};


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


/*
rippledot.page.Transaction.prototype.create_fullpage = function() {

  if ($('#fullpage').length != 0){

    $('#fullpage').fullpage({
        'controlArrows': false,
        'verticalCentered': false,
        'animateAnchor': false,
        'scrollOverflow': true,

        'sectionSelector': '.fullpage-section',
        'slideSelector': '.fullpage-slide',

        'scrollOverflowOptions': {        // enables text selection iScroll
          'preventDefault':false
        },

        'afterLoad': this.on_fullpage_section_load.bind(this),
        
        'afterRender': function(){

          this.update_page_layout();

        }.bind(this),
        'afterResize': function(){

          this.update_page_layout();

        }.bind(this)
    });



  } // end if


};
*/


rippledot.page.Transaction.prototype.create_transaction_buttons = function() {


  this.show_filter_btn = $('#page-transaction-index-show-filter-btn');
  this.hide_filter_btn = $('#page-transaction-index-hide-filter-btn');

  this.load_more_container_container = $('#page-transaction-index-load-more-container');
  this.load_more_container = $('#page-transaction-index-load-more');
  this.load_more_btn = $('#page-transaction-index-load-more-btn');

  this.no_result_container = $('#page-transaction-index-no-result-container');
  this.no_result = $('#page-transaction-index-no-result');

  
  this.show_filter_btn.click(function(event){
    this.show_filter();
  }.bind(this));

  this.hide_filter_btn.click(function(event){
    this.hide_filter();
  }.bind(this));

  this.load_more_btn.click(function(event){
    this.load_more();
  }.bind(this));


};

rippledot.page.Transaction.prototype.create_transaction_filter = function() {

  
  this.transaction_filter_element = $('#page-transaction-index-filter');

  this.transaction_filter = new rippledot.component.TransactionFilter({}, this.transaction_filter_element);

  

  goog.events.listen(this.transaction_filter, rippledot.component.TransactionFilter.ON_CHANGE, this.on_transaction_filter_change.bind(this));
  


  
  
  
};



//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

rippledot.page.Transaction.prototype.show_filter = function(){

  if (this.is_filter_open == false) {
    this.is_filter_open = true;


    this.item_container_container.addClass('open-version');
    this.transaction_filter_element.addClass('expand-version');
    TweenMax.to(this.transaction_filter_element, 0.5, {autoAlpha:1});

    TweenMax.killTweensOf(this.show_filter_btn);
    TweenMax.killTweensOf(this.hide_filter_btn);

    TweenMax.to(this.show_filter_btn, 0.5, {autoAlpha:0});
    TweenMax.to(this.hide_filter_btn, 0.5, {autoAlpha:1, delay:0.3});

    this.load_more_container.addClass('open-version');
    this.no_result.addClass('open-version');

    // constant update layout
    TweenMax.to(this.random_object, 0.5, {x:100, delay: 0.1, onUpdate: this.on_filter_update, onUpdateScope: this});
  }
}

rippledot.page.Transaction.prototype.hide_filter = function(){

  if (this.is_filter_open == true) {
    this.is_filter_open = false;

    this.item_container_container.removeClass('open-version');
    this.transaction_filter_element.removeClass('expand-version');
    TweenMax.to(this.transaction_filter_element, 0.5, {autoAlpha:0});

    TweenMax.killTweensOf(this.show_filter_btn);
    TweenMax.killTweensOf(this.hide_filter_btn);

    TweenMax.to(this.show_filter_btn, 0.5, {autoAlpha:1, delay:0.3});
    TweenMax.to(this.hide_filter_btn, 0.5, {autoAlpha:0});


    this.load_more_container.removeClass('open-version');
    this.no_result.removeClass('open-version');

    // constant update layout
    TweenMax.to(this.random_object, 0.7, {x:100, delay: 0.4, onUpdate: this.on_filter_update, onUpdateScope: this});
  }
}

rippledot.page.Transaction.prototype.on_filter_update = function(){
  this.update_manic_image_containers();
};


rippledot.page.Transaction.prototype.load_more = function(){

  /**
   * @type {rippledot.component.TransactionDataItem}
   */
  var data_item = null;

  for (var i = 0, l=this.result_array.length; i < l; i++) {

    data_item = this.result_array[i];
    data_item.show_item();
  }

  this.update_manic_image_containers();

  TweenMax.to(this.load_more_container_container, 0.5, {autoAlpha:0});


};



//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param  {String} anchorLink
 * @param  {Number} index
 */
rippledot.page.Transaction.prototype.on_fullpage_section_load = function(anchorLink, index) {
  // console.log('anchorLink: ' + anchorLink);

  /*
  switch(anchorLink) {
    case 'banner':

      // this.desktop_header.show_bg();
      TweenMax.delayedCall(0.3, this.desktop_sidebar.change_color, ['normal'], this.desktop_sidebar);
      
      break;

    case 'related':
      this.desktop_header.show_bg();
      TweenMax.delayedCall(0.3, this.desktop_sidebar.change_color, ['white'], this.desktop_sidebar);

      break;

    default:
      this.desktop_header.show_bg();
      TweenMax.delayedCall(0.3, this.desktop_sidebar.change_color, ['normal'], this.desktop_sidebar);
      break;
  }
  */
};








//     ___  _   _   _____ ___ _   _____ _____ ____     ____ _   _    _    _   _  ____ _____
//    / _ \| \ | | |  ___|_ _| | |_   _| ____|  _ \   / ___| | | |  / \  | \ | |/ ___| ____|
//   | | | |  \| | | |_   | || |   | | |  _| | |_) | | |   | |_| | / _ \ |  \| | |  _|  _|
//   | |_| | |\  | |  _|  | || |___| | | |___|  _ <  | |___|  _  |/ ___ \| |\  | |_| | |___
//    \___/|_| \_| |_|   |___|_____|_| |_____|_| \_\  \____|_| |_/_/   \_\_| \_|\____|_____|
//

/**
 * @param {object} event
 */
rippledot.page.Transaction.prototype.on_transaction_filter_change = function(event) {
  // console.log('on_transaction_filter_change');

  this.result_array = [];

  /**
   * @type {rippledot.component.TransactionDataItem}
   */
  var data_item = null;

  var result_num = 0;

  for (var i = 0, l=this.data_array.length; i < l; i++) {

    data_item = this.data_array[i];

    data_item.hide_item();  // hide everyone


    if (this.is_item_valid(data_item) == true) {

      // data_item.show_item();

      this.result_array[this.result_array.length] = data_item;
      result_num++;

    } else {
      // data_item.hide_item();

    }
  } // for



  if (result_num > 9 ) {

    // show only 9

    for (var i = 0, l=9; i < l; i++) {
      
      data_item = this.result_array[i];
      data_item.show_item();
    }

    TweenMax.to(this.load_more_container_container, 0.5, {autoAlpha:1});
    TweenMax.to(this.no_result_container, 0.5, {autoAlpha:0});

  } else if (result_num == 0) {
    // show no result
    
    TweenMax.to(this.load_more_container_container, 0.5, {autoAlpha:0});
    TweenMax.to(this.no_result_container, 0.5, {autoAlpha:1});
      
  } else {
    // show all less than or equal to 9

    for (var i = 0, l=this.result_array.length; i < l; i++) {

      data_item = this.result_array[i];
      data_item.show_item();
    }

    TweenMax.to(this.load_more_container_container, 0.5, {autoAlpha:0});
    TweenMax.to(this.no_result_container, 0.5, {autoAlpha:0});

  } // end if







  this.update_manic_image_containers();

};


/**
 * @param  {rippledot.component.TransactionDataItem}  item_param
 * @return {Boolean}            [description]
 */
rippledot.page.Transaction.prototype.is_item_valid = function (item_param) {

  var is_category_valid = true;   // true by default
  var is_deal_type_valid = false;   // false by default
  // var is_year_valid = true;


  var category = '';
  var deal_type = '';
  // var year = '';

  var has_category = false;
  var has_deal_type = false;
  // var has_year = false;


  // CATEGORY

  if (this.transaction_filter.current_category_array.length == 0) {
    // all are valid
    is_category_valid = true;
  } else {


    for (var i = 0, l=this.transaction_filter.current_category_array.length; i < l; i++) {

      category = this.transaction_filter.current_category_array[i];
      has_category = item_param.data_category_array.indexOf(category) != -1;

      if (has_category == false) {
        is_category_valid = false;
      }
    }

  }



  // deal_type
  
  if (this.transaction_filter.current_deal_type == 'all') {
    // all are valid
    is_deal_type_valid = true;
  } else {

    has_deal_type = item_param.data_deal_type == this.transaction_filter.current_deal_type;

    if (has_deal_type == true){
      is_deal_type_valid = true;
    }
  }


  // YEAR
  /*
  if (this.transaction_filter.current_year_array.length == 0) {
    // all are valid
    is_year_valid = true;
  } else {


    for (var i = 0, l=this.transaction_filter.current_year_array.length; i < l; i++) {

      year = this.transaction_filter.current_year_array[i];
      has_year = item_param.data_year_array.indexOf(year) != -1;

      if (has_year == false) {
        is_year_valid = false;
      }
    }

  }
  */
  




  /*
  
  this.transaction_filter.current_deal_type_array = [];
  this.transaction_filter.current_year_array = [];

  item_param.data_category_array = [];
  item_param.data_deal_type = '';
  item_param.data_year_array = [];
  */
  



  
  // return is_category_valid && is_deal_type_valid && is_year_valid;
  return is_category_valid && is_deal_type_valid;

  return false;
};



rippledot.page.Transaction.prototype.sample_method_calls = function() {

  // sample override
  rippledot.page.Transaction.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(rippledot.page.Transaction.EVENT_01));
};

//    ____   _    ____  ____  _____
//   |  _ \ / \  |  _ \/ ___|| ____|
//   | |_) / _ \ | |_) \___ \|  _|
//   |  __/ ___ \|  _ < ___) | |___
//   |_| /_/   \_\_| \_\____/|_____|
//


rippledot.page.Transaction.prototype.parse_data = function() {

  var arr = $('#page-transaction-index-data-item-container .page-transaction-index-data-item');
  var item = null;

  /**
   * @type {rippledot.component.TransactionDataItem}
   */
  var data_item = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);

    data_item = new rippledot.component.TransactionDataItem({}, item);

    this.data_array[this.data_array.length] = data_item;
  }

};

rippledot.page.Transaction.prototype.create_html = function(){

  this.item_container = $('#page-transaction-index-item-container');
  this.item_container_container = $('#page-transaction-index-item-container-container');

  /**
   * @type {rippledot.component.TransactionDataItem}
   */
  var data_item = null;

  var fragment = $(document.createDocumentFragment());

  for (var i = 0, l=this.data_array.length; i < l; i++) {

    data_item = this.data_array[i];
    data_item.create_html_element();
    fragment.append(data_item.html_element);
    
  }


  this.item_container.append(fragment);

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
rippledot.page.Transaction.prototype.update_page_layout = function() {
  rippledot.page.Transaction.superClass_.update_page_layout.call(this);



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
rippledot.page.Transaction.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  rippledot.page.Transaction.superClass_.scroll_to_target.call(this, str_param, str_param_2, str_param_3);
  

  
}

/**
 * @override
 * @inheritDoc
 */
rippledot.page.Transaction.prototype.on_scroll_to_no_target = function() {
  rippledot.page.Transaction.superClass_.on_scroll_to_no_target.call(this);

  
}



goog.exportSymbol('rippledot.page.Transaction', rippledot.page.Transaction);