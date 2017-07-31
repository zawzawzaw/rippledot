
goog.provide('rippledot.page.Whoweare');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');


goog.require('rippledot.page.Default')


/**
 * The Home constructor
 * @inheritDoc
 * @constructor
 * @extends {rippledot.page.Default}
 */
rippledot.page.Whoweare = function(options, element) {

  rippledot.page.Default.call(this, options, element);
  this.options = $.extend(this.options, rippledot.page.Whoweare.DEFAULT, options);


  this.is_press_release_page = false;
  if (this.body.hasClass('page-press-release') == true) {
    this.is_press_release_page = true;
  }



  // console.log('rippledot.page.Whoweare: init');
};
goog.inherits(rippledot.page.Whoweare, rippledot.page.Default);


/**
 * like jQuery options
 * @const {object}
 */
rippledot.page.Whoweare.DEFAULT = {
};

/**
 * Home Event Constant
 * @const
 * @type {string}
 */
rippledot.page.Whoweare.EVENT_01 = '';


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
rippledot.page.Whoweare.prototype.init = function() {
  rippledot.page.Whoweare.superClass_.init.call(this);

  if (this.is_press_release_page == true) {
    this.create_press_release_filter();
  }
  
};






rippledot.page.Whoweare.prototype.create_press_release_filter = function() {

  $('#page-press-release-sidebar ul li').click(function(event){

    var target = $(event.currentTarget);
    var value = target.attr('data-value');

    this.set_press_release_year(value);

  }.bind(this));

};

rippledot.page.Whoweare.prototype.private_method_02 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//





/**
 * @param {String} str_param
 */
rippledot.page.Whoweare.prototype.set_press_release_year = function(str_param) {


  if (goog.isDefAndNotNull(str_param) && str_param != '') {

    if (str_param == 'all') {

      // view all
      $('#page-press-release-item-container .page-press-release-item').removeClass('hidden-version');
      $('#page-press-release-item-container').removeClass('no-results-version');

    } else {


      $('#page-press-release-item-container .page-press-release-item').addClass('hidden-version');

      var selected_elements = $('#page-press-release-item-container .page-press-release-item[data-year="' + str_param + '"]');
      selected_elements.removeClass('hidden-version');

      if (selected_elements.length == 0) {

        $('#page-press-release-item-container').addClass('no-results-version');

      } else {

        $('#page-press-release-item-container').removeClass('no-results-version');

      }


    }

  } else {

    // view all
    $('#page-press-release-item-container .page-press-release-item').removeClass('hidden-version');
    $('#page-press-release-item-container').removeClass('no-results-version');

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
rippledot.page.Whoweare.prototype.update_page_layout = function() {
  rippledot.page.Whoweare.superClass_.update_page_layout.call(this);



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
rippledot.page.Whoweare.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  rippledot.page.Whoweare.superClass_.scroll_to_target.call(this, str_param, str_param_2, str_param_3);
  

  
}

/**
 * @override
 * @inheritDoc
 */
rippledot.page.Whoweare.prototype.on_scroll_to_no_target = function() {
  rippledot.page.Whoweare.superClass_.on_scroll_to_no_target.call(this);

  
}


goog.exportSymbol('rippledot.page.Whoweare', rippledot.page.Whoweare);