// http://www.tbyrne.org/export-flash-to-animated-svg
// http://tbyrne.org/portfolio/smil/beginElement.html

goog.provide('manic.ui.AnimatedSVG');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The AnimatedVG constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.AnimatedSVG = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.AnimatedSVG.DEFAULT, options);
  this.element = element;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  this.element.data('manic.ui.AnimatedSVG', this);
  this.element.on('play-svg', function(){
    this.play_svg();
  }.bind(this));


  // how to use: 
  // this.element.trigger('play-svg')


  this.is_loaded = false;
  this.play_on_load = false;
  this.has_played = false;


  this.svg_path = this.element.attr('data-image');
  this.element.load(this.svg_path, this.on_svg_load_complete.bind(this));

  // console.log('manic.ui.AnimatedSVG: init');
};
goog.inherits(manic.ui.AnimatedSVG, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
manic.ui.AnimatedSVG.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * AnimatedVG Event Constant
 * @const
 * @type {string}
 */
manic.ui.AnimatedSVG.EVENT_01 = '';

/**
 * AnimatedVG Event Constant
 * @const
 * @type {string}
 */
manic.ui.AnimatedSVG.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.AnimatedSVG.prototype.actual_play = function() {


  this.element.addClass('play-version');

  var animateNodes = this.element.find("animate[begin='indefinite']");

  var animateNodes2 = this.element.find("animateTransform");
  for(var i=0; i<animateNodes2.length; ++i){
    var node = animateNodes2[i];
    if($(node).attr("begin")=="indefinite"){
      animateNodes.push(node);
    }
  }
  if(!animateNodes.length){
    console.log("playSvg: No indefinite animation nodes found.");
    return;
  }
  var dur = parseFloat(animateNodes.attr("dur"));
  var repeat = parseFloat(animateNodes[0].getAttribute("repeatCount"));
  if(!isNaN(repeat) && repeat>0){
    dur *= repeat;
  }
  
  if(animateNodes[0]['beginElement']){
    
    for(var i=0; i<animateNodes.length; ++i){
      animateNodes[i]['beginElement']();
    }

    /*
    if(onComplete){
      setTimeout(function(){
        onComplete();
      }, dur*1000);
    }
    */
  }else{

    var timeDif = (new Date()).getTime()-window.startTime-6000;

    var timeVal = (timeDif/1000)+"s";

    var beginWas = animateNodes.attr("begin");

    animateNodes.attr("begin", timeVal);

    setTimeout(function(){
      // if(onComplete)onComplete();
      animateNodes.attr("begin", beginWas);
    }, dur*1000);

  }

};
manic.ui.AnimatedSVG.prototype.private_method_02 = function() {};
manic.ui.AnimatedSVG.prototype.private_method_03 = function() {};
manic.ui.AnimatedSVG.prototype.private_method_04 = function() {};
manic.ui.AnimatedSVG.prototype.private_method_05 = function() {};
manic.ui.AnimatedSVG.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.ui.AnimatedSVG.prototype.play_svg = function() {

  if (this.is_loaded == true) {

    if (this.has_played == false) {

      this.has_played = true;

      this.actual_play();

      
    } else {
      console.log('dont play again');
    }

  } else {
    this.play_on_load = true;
  }

};
manic.ui.AnimatedSVG.prototype.public_method_02 = function() {};
manic.ui.AnimatedSVG.prototype.public_method_03 = function() {};
manic.ui.AnimatedSVG.prototype.public_method_04 = function() {};
manic.ui.AnimatedSVG.prototype.public_method_05 = function() {};
manic.ui.AnimatedSVG.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
manic.ui.AnimatedSVG.prototype.on_svg_load_complete = function(event) {

  // init ?
  this.is_loaded = true;

  if (this.play_on_load == true) {
    this.play_svg();
  }
};

/**
 * @param {object} event
 */
manic.ui.AnimatedSVG.prototype.on_play_complete = function(event) {
};

/**
 * @param {object} event
 */
manic.ui.AnimatedSVG.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
manic.ui.AnimatedSVG.prototype.on_event_handler_04 = function(event) {
};






manic.ui.AnimatedSVG.prototype.sample_method_calls = function() {

  // sample override
  manic.ui.AnimatedSVG.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(manic.ui.AnimatedSVG.EVENT_01));
};