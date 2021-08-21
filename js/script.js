gsap.registerPlugin(ScrollTrigger);



////////// slider
var container = $('.slider .wrapper');
var boxes = document.querySelectorAll('.section');

let tlSlider = gsap.timeline({
	scrollTrigger: {
		trigger: ".slider",
		start: "center center-=100",
		end: function(){  
			return "+=" + container[0].scrollWidth;
		},
		scrub: true,
		pin: true,
		toggleClass: "is-active",
		refreshPriority: 1,
	}
});

refresher();
function refresher(){
	gsap.set(boxes, {clearProps:"all"}); 
	tlSlider.clear();
	tlSlider.to(boxes, {	
		x: function(){  
		return -(container[0].scrollWidth - document.documentElement.clientWidth) + "px";
		},
	});
};



//---------- Navigation
//////hamburger and menu changes/////
$('.navbar-toggler').click(function(){
	$(this).toggleClass('open');
});

$('.nav-item a').click(function() {
   $('.navbar-toggler').removeClass('open');
});

$('.nav-link').on('click',function() {
  $('.navbar-collapse').collapse('hide');
});

//////scroll change nav/////
var scrollUp = document.querySelector('.navbar');

// adds bg color when start scrolling
ScrollTrigger.create({
start: 'top top-=50',
toggleClass: {className: 'nav--scrolled', targets: scrollUp}
});


ScrollTrigger.create({
start: 'top top-=50',
toggleClass: {className: 'nav--up', targets: scrollUp},

onUpdate: ({direction}) => {
	if (direction == -1) {
	scrollUp.classList.remove('nav--up');
	} else {
	scrollUp.classList.add('nav--up');
}}
});






//////////////////////////////

////Image reveal
// gsap.utils.toArray('.clip-me').forEach(section => {
// 	const cov = document.querySelectorAll('.clip-me .cover');
// 	const img = document.querySelectorAll('.clip-me .img-fluid');

// 	gsap.set(img,{transformOrigin:'50% 100%'});
// 	let tl = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: section,
// 			start: 'top center',
// 			toggleActions: 'play none none none', 
// 		}
// 	}); 
// 	tl.to(cov,{background:"#000000"},0)
// 	tl.from(cov, { scaleX: 0, transformOrigin: "bottom", duration:0.8},0);
// 	tl.from(img,{ opacity:0, delay:0.3, duration:1.5 },0);
// });
/////////////////////////////////////

// image zoom
$(".full-img-feature").each(function() {
	const img = document.querySelectorAll('.full-img-feature .zoom');
	gsap.set(img,{ width:'100%', height:'100%'});
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger:".full-img-feature",
			start: 'top center+=200',
			toggleActions: 'play reverse play reverse',  
		}
	}); 
	tl.from(img, 1, { width:'150%', height:'150%', transformOrigin:"50% 50%"});
  });

///////////////////////////////////////

////All titiles title animation
gsap.utils.toArray('.up-text').forEach(section => {
	gsap.from(section, {
		skewX:-25,
		scale:.5,
		opacity:0,
		yPercent:100,
		duration:1,
		ease:Back.easeOut,
		scrollTrigger: {
		trigger: section,
		start: 'top bottom+=100',
		toggleActions: 'play none none none',
		}
	});
});


///////////////////////////////////////


var windowWidth = $(window).width();
$(window).resize(function(){	
	if ($(window).width() != windowWidth) {
	windowWidth = $(window).width();
	
	// refresher.clear();
	refresher();	
	}
});


///////////////////

var imgLoad = imagesLoaded('.overflow-wrapper');

var progressBar = $(".c-preloader__progress"),
    count = $(".c-preloader__count"),
    images = $("img").length,
    loadedCount = 0,
    loadingProgress = 0,
    tlProgress = new TimelineMax();
 
imgLoad.on( 'progress', function( instance, image ) {
    loadProgress();
});
 
function loadProgress(imgLoad, image) {

    loadedCount++;
  
    loadingProgress = (loadedCount/images);
    console.log(loadingProgress);

    TweenMax.to(tlProgress, 1, {progress:loadingProgress});
}

var tlProgress = new TimelineMax({
    paused: true,
    onUpdate: countPercent,
    onComplete: loadComplete
});
 
tlProgress
	.to('html',{overflow:'hidden'},0)
    .to(progressBar, 1, {width:"100%"},0)
	.set('.hero', {yPercent:100},0)
	.to(count, 0.5, {autoAlpha:0},1)


function countPercent() {
      var newPercent = (tlProgress.progress()*100).toFixed();
      count.text(newPercent + "%");
}

function loadComplete() {
  var tlEnd = new TimelineMax({
	// onComplete: loadCompleteOther
  });
  tlEnd
      .to('html',{overflow:'visible'},0)
      .to(".c-preloader", 0.5, { yPercent:-101, opacity:0, transformOrigin: "center top"},0)
	  .to('.hero',0.5,  {yPercent:0},'-=0.5')
}


