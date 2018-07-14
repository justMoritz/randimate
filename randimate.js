
  var randimate = function($selectors, type){
    type = type || false;
    
    var classLists = {
      all: ["bounce",	"flash",	"pulse",	"rubberBand",
"shake",	"headShake",	"swing",	"tada",
"wobble",	"jello",	"bounceIn",	"bounceInDown",
"bounceInLeft",	"bounceInRight",	"bounceInUp",	"bounceOut",
"bounceOutDown",	"bounceOutLeft",	"bounceOutRight",	"bounceOutUp",
"fadeIn",	"fadeInDown",	"fadeInDownBig",	"fadeInLeft",
"fadeInLeftBig",	"fadeInRight",	"fadeInRightBig",	"fadeInUp",
"fadeInUpBig",	"fadeOut",	"fadeOutDown",	"fadeOutDownBig",
"fadeOutLeft",	"fadeOutLeftBig",	"fadeOutRight",	"fadeOutRightBig",
"fadeOutUp",	"fadeOutUpBig",	"flipInX",	"flipInY",
"flipOutX",	"flipOutY",	"lightSpeedIn",	"lightSpeedOut",
"rotateIn",	"rotateInDownLeft",	"rotateInDownRight",	"rotateInUpLeft",
"rotateInUpRight",	"rotateOut",	"rotateOutDownLeft",	"rotateOutDownRight",
"rotateOutUpLeft",	"rotateOutUpRight",	"hinge",	"jackInTheBox",
"rollIn",	"rollOut",	"zoomIn",	"zoomInDown",
"zoomInLeft",	"zoomInRight",	"zoomInUp",	"zoomOut",
"zoomOutDown",	"zoomOutLeft",	"zoomOutRight",	"zoomOutUp",
"slideInDown",	"slideInLeft",	"slideInRight",	"slideInUp",
"slideOutDown",	"slideOutLeft",	"slideOutRight",	"slideOutUp" ],
      noout: ["bounce",	"flash",	"pulse",	"rubberBand",
"shake",	"headShake",	"swing",	"tada",
"wobble",	"jello",	"bounceIn",	"bounceInDown",
"bounceInLeft",	"bounceInRight",	"bounceInUp",	
"fadeIn",	"fadeInDown",	"fadeInDownBig",	"fadeInLeft",
"fadeInLeftBig",	"fadeInRight",	"fadeInRightBig",	"fadeInUp",
"fadeInUpBig",	"lightSpeedIn",	
"rotateIn",	"rotateInDownLeft",	"rotateInDownRight",	"rotateInUpLeft",
"rotateInUpRight",	"jackInTheBox",
"rollIn",	"zoomIn",	"zoomInDown",
"zoomInLeft",	"zoomInRight",	"zoomInUp"],
      fade: ["fadeIn",	"fadeInDown",	"fadeInDownBig",	"fadeInLeft",
"fadeInLeftBig",	"fadeInRight",	"fadeInRightBig",	"fadeInUp",
"fadeInUpBig"],
      zoom: ["rollIn",	"zoomIn",	"zoomInDown",
"zoomInLeft",	"zoomInRight",	"zoomInUp"],
      rotate: ["rotateIn",	"rotateInDownLeft",	"rotateInDownRight",	"rotateInUpLeft",
"rotateInUpRight"],
      bounce: ["bounce", "bounceIn",	"bounceInDown",
"bounceInLeft",	"bounceInRight",	"bounceInUp"],
    };
    
    var classes = classLists[type];
    if(!type){
      classes = classLists.all;
    }
    
    $selectors.each(function() {
      var randomnum   = Math.floor((Math.random() * classes.length) + 0),
          randomclass = classes[randomnum];
      $(this).addClass('wow').addClass(randomclass);
    });
    
    new WOW().init();
  };
