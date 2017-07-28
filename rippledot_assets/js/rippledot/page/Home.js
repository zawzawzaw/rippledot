goog.provide('rippledot.page.Home');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');


goog.require('rippledot.component.HomeCircleGraph');

goog.require('rippledot.page.Default')


/**
 * The Home constructor
 * @inheritDoc
 * @constructor
 * @extends {rippledot.page.Default}
 */
rippledot.page.Home = function(options, element) {

  rippledot.page.Default.call(this, options, element);
  this.options = $.extend(this.options, rippledot.page.Home.DEFAULT, options);

  this.has_map_animated = false;
  
  this.banner_text = $('#page-home-banner-copy');

  this.logo_container = $('#desktop-header-logo-container');
  this.logo = $('#desktop-header-logo');
  this.expanded_logo = $('#desktop-header-logo-expanded');
  
  this.is_alternative_banner_version = this.body.hasClass('alternative-banner-version');




  this.banner_image = $('#page-home-banner-image');
  

  // animated svg (manic.ui.AnimatedSVG)
  this.map_svg = $('#home-map-animated-svg');


  this.who_we_are_section = $('#page-home-about-section');


  this.expertise_01 = $('#page-home-expertise-01-section');
  this.expertise_02 = $('#page-home-expertise-02-section');
  this.expertise_03 = $('#page-home-expertise-03-section');
  

  /**
   * @type {rippledot.component.HomeCircleGraph}
   */
  this.graph_canvas_01 = null;

  /**
   * @type {rippledot.component.HomeCircleGraph}
   */
  this.graph_canvas_02 = null;

  /**
   * @type {rippledot.component.HomeCircleGraph}
   */
  this.graph_canvas_03 = null;




  
  


  // console.log('rippledot.page.Home: init');
};
goog.inherits(rippledot.page.Home, rippledot.page.Default);


/**
 * like jQuery options
 * @const {object}
 */
rippledot.page.Home.DEFAULT = {
};

/**
 * Home Event Constant
 * @const
 * @type {string}
 */
rippledot.page.Home.EVENT_01 = '';


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
rippledot.page.Home.prototype.init = function() {
  rippledot.page.Home.superClass_.init.call(this);

  if (manic.IS_MOBILE == false) {
    this.create_fullpage();
  }



  this.create_infographic();
  
};


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

rippledot.page.Home.prototype.create_fullpage = function() {

  if ($('#fullpage').length != 0){

    $('#fullpage').fullpage({
        'controlArrows': false,
        'verticalCentered': false,
        'animateAnchor': false,
        'scrollOverflow': true,

        'sectionSelector': '.fullpage-section',
        'slideSelector': '.fullpage-slide',

        'afterLoad': this.on_fullpage_section_load.bind(this),
        
        'afterRender': function(){

          this.update_page_layout();

        }.bind(this),
        'afterResize': function(){

          this.update_page_layout();

        }.bind(this)
    });



    $('#page-home-banner-section .scroll-down-cta').click(function(event){
      $.fn.fullpage.moveSectionDown();
    }.bind(this));

  } // end if


};





rippledot.page.Home.prototype.create_infographic = function() {
    
  this.graph_canvas_01  = new rippledot.component.HomeCircleGraph({}, $('#page-home-infographic-canvas-01'));
  this.graph_canvas_02  = new rippledot.component.HomeCircleGraph({}, $('#page-home-infographic-canvas-02'));
  this.graph_canvas_03  = new rippledot.component.HomeCircleGraph({}, $('#page-home-infographic-canvas-03'));

  console.log('manic.IS_MOBILE: ' + manic.IS_MOBILE);

  if (manic.IS_MOBILE == true) {

    this.graph_canvas_01.instant_animate_in();
    this.graph_canvas_02.instant_animate_in();
    this.graph_canvas_03.instant_animate_in();
  }

};


rippledot.page.Home.prototype.private_method_02 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


rippledot.page.Home.prototype.animate_in_map = function() {

  if (this.has_map_animated == false) {
    this.has_map_animated = true;


    // this.map_svg.trigger('play-svg');  // play the map
    TweenMax.delayedCall(0.5, this.map_svg.trigger, ['play-svg'], this.map_svg)     // delayed play

  }
  
};
rippledot.page.Home.prototype.animate_in_graph = function() {

  console.log('animate_in_graph');

  if (this.graph_canvas_01 == null) {

    TweenMax.delayedCall(0.7, this.animate_in_graph, [], this);

  } else {


    TweenMax.delayedCall(0.6, this.graph_canvas_01.animate_in, [], this.graph_canvas_01);
    TweenMax.delayedCall(0.6 + 0.5, this.graph_canvas_02.animate_in, [], this.graph_canvas_02);
    TweenMax.delayedCall(0.6 + 1.0, this.graph_canvas_03.animate_in, [], this.graph_canvas_03);
  }

  
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
rippledot.page.Home.prototype.on_fullpage_section_load = function(anchorLink, index) {

  var target_str = 'fullpage-slide-' + anchorLink + '-version';

  



  // this.body.removeClass('fullpage-slide-banner-version fullpage-slide-who-we-are-version fullpage-slide-expertise-1-version fullpage-slide-expertise-2-version fullpage-slide-expertise-3-version fullpage-slide-our-people-version');
  // this.body.addClass(target_str);

  // console.log('anchorLink: ' + anchorLink);

  switch(anchorLink) {
    case 'banner':

      this.banner_text.addClass('animated-version');

      this.desktop_header.hide_bg();

      if (this.is_alternative_banner_version == true) {
        TweenMax.delayedCall(0.3, this.desktop_sidebar.change_color, ['normal'], this.desktop_sidebar);
      } else {
        TweenMax.delayedCall(0.3, this.desktop_sidebar.change_color, ['red'], this.desktop_sidebar);
      }

      this.desktop_sidebar.set_selected(-1);

      this.logo_container.addClass('full-version')
      TweenMax.to(this.logo, 0.5, {autoAlpha:0});
      TweenMax.to(this.expanded_logo, 0.5, {autoAlpha:1});
      break;

    case 'who-we-are':
      this.desktop_header.show_bg();
      TweenMax.delayedCall(0.3, this.desktop_sidebar.change_color, ['normal'], this.desktop_sidebar);
      this.desktop_sidebar.set_selected(0);

      this.animate_in_map();

      this.who_we_are_section.addClass('animated-version');

      this.logo_container.removeClass('full-version')
      TweenMax.to(this.logo, 0.5, {autoAlpha:1});
      TweenMax.to(this.expanded_logo, 0.5, {autoAlpha:0});
      break;

    case 'expertise-1':
      this.desktop_header.hide_bg();
      TweenMax.delayedCall(0.3, this.desktop_sidebar.change_color, ['white'], this.desktop_sidebar);
      this.desktop_sidebar.set_selected(1);
      this.expertise_01.addClass('animated-version');

      this.logo_container.removeClass('full-version')
      TweenMax.to(this.logo, 0.5, {autoAlpha:1});
      TweenMax.to(this.expanded_logo, 0.5, {autoAlpha:0});

      break;

    case 'expertise-2':
      this.desktop_header.hide_bg();
      TweenMax.delayedCall(0.3, this.desktop_sidebar.change_color, ['white'], this.desktop_sidebar);
      this.desktop_sidebar.set_selected(1);
      this.expertise_02.addClass('animated-version');

      this.logo_container.removeClass('full-version')
      TweenMax.to(this.logo, 0.5, {autoAlpha:1});
      TweenMax.to(this.expanded_logo, 0.5, {autoAlpha:0});
      break;

    case 'expertise-3':
      this.desktop_header.hide_bg();
      TweenMax.delayedCall(0.3, this.desktop_sidebar.change_color, ['white'], this.desktop_sidebar);
      this.desktop_sidebar.set_selected(1);
      this.expertise_03.addClass('animated-version');

      this.logo_container.removeClass('full-version')
      TweenMax.to(this.logo, 0.5, {autoAlpha:1});
      TweenMax.to(this.expanded_logo, 0.5, {autoAlpha:0});
      break;

    case 'our-people':
      this.desktop_header.show_bg();
      TweenMax.delayedCall(0.3, this.desktop_sidebar.change_color, ['normal'], this.desktop_sidebar);
      this.desktop_sidebar.set_selected(2);

      this.animate_in_graph();

      this.logo_container.removeClass('full-version')
      TweenMax.to(this.logo, 0.5, {autoAlpha:1});
      TweenMax.to(this.expanded_logo, 0.5, {autoAlpha:0});

      break;

    default:
      this.desktop_header.show_bg();
      TweenMax.delayedCall(0.3, this.desktop_sidebar.change_color, ['normal'], this.desktop_sidebar);
      this.desktop_sidebar.set_selected(-1);

      this.logo_container.removeClass('full-version')
      TweenMax.to(this.logo, 0.5, {autoAlpha:1});
      TweenMax.to(this.expanded_logo, 0.5, {autoAlpha:0});
      break;
  }
};
















/**
 * @param {object} event
 */
rippledot.page.Home.prototype.on_event_handler_02 = function(event) {
};



rippledot.page.Home.prototype.sample_method_calls = function() {

  // sample override
  rippledot.page.Home.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(rippledot.page.Home.EVENT_01));
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
rippledot.page.Home.prototype.update_page_layout = function() {
  rippledot.page.Home.superClass_.update_page_layout.call(this);


  if (manic.IS_MOBILE == true){

    this.banner_image.css({
      'height': this.window_height + 'px'
    });

  } else {

    this.banner_image.css({
      'height': ''
    });

  }

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
rippledot.page.Home.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  rippledot.page.Home.superClass_.scroll_to_target.call(this, str_param, str_param_2, str_param_3);
  

  
}

/**
 * @override
 * @inheritDoc
 */
rippledot.page.Home.prototype.on_scroll_to_no_target = function() {
  rippledot.page.Home.superClass_.on_scroll_to_no_target.call(this);

  
}



goog.exportSymbol('rippledot.page.Home', rippledot.page.Home);