
goog.provide('rippledot.page.People');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');


goog.require('rippledot.page.Default')


/**
 * The Home constructor
 * @inheritDoc
 * @constructor
 * @extends {rippledot.page.Default}
 */
rippledot.page.People = function(options, element) {

  rippledot.page.Default.call(this, options, element);
  this.options = $.extend(this.options, rippledot.page.People.DEFAULT, options);

  this.is_people_detail_page = false;
  this.is_people_index_page = false;

  if (this.body.hasClass('page-people-detail') == true) {
    this.is_people_detail_page = true;
  }

  if (this.body.hasClass('page-people-index') == true) {
    this.is_people_index_page = true;
  }
  
  


  this.transaction_expandable_content = null;
  this.transaction_expandable_btn_container = null;
  this.transaction_expandable_btn = null;

  this.is_transaction_expanded = false;
  
  



  // console.log('rippledot.page.People: init');
};
goog.inherits(rippledot.page.People, rippledot.page.Default);


/**
 * like jQuery options
 * @const {object}
 */
rippledot.page.People.DEFAULT = {
};

/**
 * Home Event Constant
 * @const
 * @type {string}
 */
rippledot.page.People.EVENT_01 = '';


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
rippledot.page.People.prototype.init = function() {
  rippledot.page.People.superClass_.init.call(this);

  if (this.is_people_detail_page == true) {
    // this.create_fullpage();
    this.create_expanding_detail_transaction();
  }

  /*
  this.desktop_header.show_bg();
  this.desktop_sidebar.set_selected(2);
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
rippledot.page.People.prototype.create_fullpage = function() {

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



rippledot.page.People.prototype.create_expanding_detail_transaction = function() {


  this.transaction_expandable_content = $('#page-people-detail-transactions-content .transactions-expandable-content');
  this.transaction_expandable_btn_container = $('#page-people-detail-transactions-content .cta-container');
  this.transaction_expandable_btn = $('#page-people-detail-transactions-content .transactions-expandable-btn');



  if (this.transaction_expandable_content.length != 0 && this.transaction_expandable_btn.length != 0) {

    this.transaction_expandable_btn.click(function(event){

      event.preventDefault();
      this.expand_detail_transaction();

    }.bind(this));

  }
  
  

};


rippledot.page.People.prototype.private_method_02 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


rippledot.page.People.prototype.expand_detail_transaction = function() {

  if (this.is_transaction_expanded == false) {
    this.is_transaction_expanded = true;

    this.transaction_expandable_btn_container.slideUp(500);
    this.transaction_expandable_content.slideDown(500, this.expand_detail_transaction_delayed.bind(this));

  }
};

rippledot.page.People.prototype.expand_detail_transaction_delayed = function() {

  // console.log('expand_detail_transaction_delayed');

  // $.fn.fullpage.reBuild();
  

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
rippledot.page.People.prototype.on_fullpage_section_load = function(anchorLink, index) {
  // console.log('anchorLink: ' + anchorLink);

  /*
  switch(anchorLink) {
    case 'detail':

      // this.desktop_header.show_bg();
      TweenMax.delayedCall(0.3, this.desktop_sidebar.change_color, ['normal'], this.desktop_sidebar);
      
      break;

    case 'transactions-adviced':
      this.desktop_header.show_bg();
      TweenMax.delayedCall(0.3, this.desktop_sidebar.change_color, ['normal'], this.desktop_sidebar);

      break;

    default:
      this.desktop_header.show_bg();
      TweenMax.delayedCall(0.3, this.desktop_sidebar.change_color, ['normal'], this.desktop_sidebar);
      break;
  }
  */
};

/**
 * @param {object} event
 */
rippledot.page.People.prototype.on_event_handler_02 = function(event) {
};



rippledot.page.People.prototype.sample_method_calls = function() {

  // sample override
  rippledot.page.People.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(rippledot.page.People.EVENT_01));
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
rippledot.page.People.prototype.update_page_layout = function() {
  rippledot.page.People.superClass_.update_page_layout.call(this);



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
rippledot.page.People.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  rippledot.page.People.superClass_.scroll_to_target.call(this, str_param, str_param_2, str_param_3);
  

  
}

/**
 * @override
 * @inheritDoc
 */
rippledot.page.People.prototype.on_scroll_to_no_target = function() {
  rippledot.page.People.superClass_.on_scroll_to_no_target.call(this);

  
}


goog.exportSymbol('rippledot.page.People', rippledot.page.People);