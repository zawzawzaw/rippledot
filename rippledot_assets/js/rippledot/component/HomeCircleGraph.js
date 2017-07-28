// raphael circle drawing based on http://dmitrybaranovskiy.github.io/raphael/polar-clock.html

goog.provide('rippledot.component.HomeCircleGraph');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The HomeCircleGraph constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
rippledot.component.HomeCircleGraph = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, rippledot.component.HomeCircleGraph.DEFAULT, options);
  this.element = element;

  this.has_animate_in = false;

  this.container = this.element.find('.raphael-container');

  this.percent_obj = {
    'percent': 0
  };

  this.rotation_value = this.element.attr('data-rotation');
  this.rotation_value = parseFloat(this.rotation_value);

  this.percent_value = this.element.attr('data-percent');
  this.percent_value = parseFloat(this.percent_value);



  // RAPHAEL JS variables

  this.paper = null;
  this.path_container = null;
  this.path_bg = null;
  this.path = null;

  // ODOMETER JS variables

  this.odometer_value = this.element.attr('data-odometer-value');
  this.odometer_element = this.element.find('.odometer');

  this.copy_element = this.element.find('.page-home-infographic-copy');





  this.create_raphael();
    

  

  console.log('rippledot.component.HomeCircleGraph: init');
};
goog.inherits(rippledot.component.HomeCircleGraph, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
rippledot.component.HomeCircleGraph.DEFAULT = {
};

/**
 * HomeCircleGraph Event Constant
 * @const
 * @type {string}
 */
rippledot.component.HomeCircleGraph.EVENT_01 = '';



/**
 * @const
 */
rippledot.component.HomeCircleGraph.WIDTH = 280;

/**
 * @const
 */
rippledot.component.HomeCircleGraph.HEIGHT  = 280;


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//





rippledot.component.HomeCircleGraph.prototype.create_raphael = function() {

  this.paper = Raphael(this.container[0], rippledot.component.HomeCircleGraph.WIDTH, rippledot.component.HomeCircleGraph.HEIGHT);

  this.paper.customAttributes.arc = function (value, total, R) {
      var alpha = 360,
          alpha2 = 360 / total * value,
          a = (90 - alpha2) * Math.PI / 180,
          x = 140 + R * Math.cos(a),
          y = 140 - R * Math.sin(a),
          path;
      if (total == value) {
          path = [["M", 140, 140 - R], ["A", R, R, 0, 1, 1, 299.99, 140 - R]];                // 140 = center point
      } else {
          path = [["M", 140, 140 - R], ["A", R, R, 0, +(alpha2 > 180), 1, x, y]];
      }
      // return {path: path, stroke: color};
      return {path: path};
  };

  var path_bg_attr = {"stroke": "#DCDCDC", "stroke-width": 10};
  this.path_bg = this.paper.circle(140, 140, 130).attr(path_bg_attr);

  //this.path_container = 

  var path_attr = {"stroke": "#FD3D39", "stroke-width": 10, 'stroke-linecap': "round", 'stroke-opacity': 0};
  this.path = this.paper.path().attr(path_attr).attr({arc: [0, 1, 130]});       // 130 = radius of circle

  this.path.rotate(this.rotation_value, 140, 140);
  
  this.update_percent_instant(0);
};










rippledot.component.HomeCircleGraph.prototype.private_method_03 = function() {};



/**
 * @param  {Number} percent_param
 */
rippledot.component.HomeCircleGraph.prototype.update_percent = function(percent_param) {


  if (!percent_param || percent_param == 1) {
      percent_param = 1;
      /// this.path.animate({arc: [percent_param, 1, 130]}, 0, "bounce");
      this.path.animate({arc: [percent_param, 1, 130]}, 0);

  } else {
      // this.path.animate({arc: [percent_param, 1, 130]}, 0, "elastic");
      this.path.animate({arc: [percent_param, 1, 130]}, 0);
  }
  

};

/**
 * @param  {Number} percent_param
 */
rippledot.component.HomeCircleGraph.prototype.update_percent_instant = function(percent_param) {
  console.log('percent_param: ' + percent_param);
  this.percent_obj['percent'] = percent_param;
  this.path.animate({arc: [percent_param, 1, 130]}, 0, ">");

};

rippledot.component.HomeCircleGraph.prototype.private_method_04 = function() {};
rippledot.component.HomeCircleGraph.prototype.private_method_05 = function() {};
rippledot.component.HomeCircleGraph.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


rippledot.component.HomeCircleGraph.prototype.animate_in = function() {

  if (this.has_animate_in == false) {
    this.has_animate_in = true;

    TweenMax.to(this.percent_obj, 1.5, {
      'percent': this.percent_value,
      onUpdate: function(){

        this.update_percent(this.percent_obj['percent']);

      },
      onUpdateScope: this
    });



    TweenMax.to(this.path, 0.3, {raphael:{ 'stroke-opacity': 1 }, delay: 0.1});
    

    this.copy_element.addClass('animated-version');

    TweenMax.delayedCall(0.2, this.odometer_element.html, [this.odometer_value], this.odometer_element);
  }


};

rippledot.component.HomeCircleGraph.prototype.instant_animate_in = function() {

  if (this.has_animate_in == false) {
    this.has_animate_in = true;

    this.update_percent_instant(this.percent_value);
    TweenMax.to(this.path, 0, {raphael:{ 'stroke-opacity': 1 }, delay: 0.1});

    this.odometer_element.html(this.odometer_value);

    this.copy_element.addClass('animated-version');

  }


};


rippledot.component.HomeCircleGraph.prototype.public_method_05 = function() {};
rippledot.component.HomeCircleGraph.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
rippledot.component.HomeCircleGraph.prototype.on_event_handler_01 = function(event) {
};

/**
 * @param {object} event
 */
rippledot.component.HomeCircleGraph.prototype.on_event_handler_02 = function(event) {
};

/**
 * @param {object} event
 */
rippledot.component.HomeCircleGraph.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
rippledot.component.HomeCircleGraph.prototype.on_event_handler_04 = function(event) {
};






rippledot.component.HomeCircleGraph.prototype.sample_method_calls = function() {

  // sample override
  rippledot.component.HomeCircleGraph.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(rippledot.component.HomeCircleGraph.EVENT_01));
};