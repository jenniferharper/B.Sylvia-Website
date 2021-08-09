
gsap.registerPlugin(ScrollTrigger);
var container = $('.slider .wrapper');
var boxes = document.querySelectorAll('.section');

	gsap.to(boxes, {
		x: function(){  
		return -(container[0].scrollWidth - document.documentElement.clientWidth) + "px";
		},
		// ease: "none",
		scrollTrigger: {
			trigger: container,
			start: "center center",
			end: function(){  
				return "+=" + container[0].scrollWidth;
			},
			scrub: true,
			pin: 'body',
			toggleClass: "is-active",
		}
	});




////Image reveal
  gsap.utils.toArray('.clip-me').forEach(section => {
	const cov = document.querySelectorAll('.clip-me .cover');
	const img = document.querySelectorAll('.clip-me .img-fluid');

	gsap.set(img,{transformOrigin:'50% 100%'});
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: section,
			start: 'top center',
			toggleActions: 'play none none none', 
			markers:true,
		}
	}); 
	tl.to(cov,{background:"#000000"},0)
	tl.from(cov, { scaleX: 0, transformOrigin: "bottom", duration:0.8},0);
	tl.from(img,{ opacity:0, delay:0.3, duration:1.5 },0);
});

// image zoom
$(".full-img-feature").each(function() {
	const img = document.querySelectorAll('.full-img-feature .img-fluid');
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
		start: 'top bottom',
		toggleActions: 'play none none none',
		}
	});
});



// (function($) {
// var controller = new ScrollMagic.Controller();
// TweenLite.defaultEase =  Power2.easeInOut;
  


// // only show preloader if js is working
// var elem = document.querySelector('#preloader');
// elem.style.display = 'block';
// var elem = document.querySelector('.is-loading');
// elem.style.overflow = 'hidden';


// // number of loaded images for preloader progress
// var loadedCount = 0; //current number of images loaded
// var imagesToLoad = $('.img-fluid').length; //number of slides with .bcg container
// var loadingProgress = 0; //timeline progress - starts at 0
 


// $('.img-fluid').imagesLoaded({
//     background: true
// }).progress( function( instance, image ) {
//     loadProgress();
// });
 
// function loadProgress(imgLoad, image)
// {
//     //one more image has been loaded
//     loadedCount++;
 
//     loadingProgress = (loadedCount/imagesToLoad);
 
//     // GSAP tween of our progress bar timeline
//     TweenLite.to(progressTl, 0.7, {progress:loadingProgress, ease:Linear.easeNone});
 
// }

// //progress timeline
// var progressTl = new TimelineMax({
//     paused: true,
//     onUpdate: progressUpdate,
//     onComplete: loadComplete
// });
 
// progressTl
//     //tween the progress bar width
//     .to($('.progress span'), 1, {width:100, ease:Linear.easeNone});
 
// //as the progress bar width updates and grows we put the percentage loaded in the screen
// function progressUpdate()
// {
//     //the percentage loaded based on the tween's progress
//     loadingProgress = Math.round(progressTl.progress() * 100);
 
//     //we put the percentage in the screen
//     $(".txt-perc").text(loadingProgress + '%');
 
// }

// function loadComplete() { 
//     // preloader out
//     var preloaderOutTl = new TimelineMax();
 
// 	preloaderOutTl
//         .set($('body.is-loading'), {css:{overflow:"visible"}})
// 		.to($('#preloader'), 0.7, {yPercent: -100, ease:Power4.easeInOut})		
//         .from($('.up-text'), 1,{opacity:0, ease:Power1.easeOut },'0' )
// 		.from($('.up-text'), 1,{y: '200%', ease:Power1.easeOut  },'0' )
// 		.from($('.hello'), 1, {yPercent: 100, ease:Power4.easeInOut},'0')

		
//     return preloaderOutTl;
// }



// // navigation bar color change
// if ($( window ).width() >= 768) {
// 	var tween = new TimelineMax();
// 	tween.to('.navbar-light', 0, {backgroundColor:'#fff'},0)
// 		.to('.nav-item', 0, {color:'#333'},0)
		
// 	var scene = new ScrollMagic.Scene({triggerElement: ".hero", offset:0,  triggerHook:0})
// 	.setTween(tween)
// 	.addTo(controller)

// 	var tween = new TimelineMax();
// 	tween.to('.navbar', 1, {backgroundColor:'#f2f2f2'},0)
// 	.to('.nav-item', 1, {color:'#333'},0)
// 	var scene = new ScrollMagic.Scene({triggerElement: ".products", offset:0,  triggerHook:0})
// 	.setTween(tween)
// 	.addTo(controller)

// 	var tween = new TimelineMax();
// 	tween.to('.navbar', 1, {backgroundColor:'#5F0017'},0)
// 	.to('.nav-item', 1, {color:'#fff'},0)
// 	.to('.navbar-toggler i',  1, {color:'#fff'},0)
// 	.to('.logo', 1, {fill:'#fff'},0)
// 	.to('.logo-circle', 1, {fill:'#ffa9a7'},0)

// 	var scene = new ScrollMagic.Scene({triggerElement: ".testimonials", triggerHook:0, offset:'-150'})
// 	.setTween(tween)
// 	.addTo(controller)

// 	var tween = new TimelineMax();
// 	tween.to('.navbar', 1, {backgroundColor:'#fff'},0)
// 	.to('.nav-item', 1, {color:'#333'},0)
// 	.to('.navbar-toggler i',  1, {color:'#c31e22'},0)
// 	.to('.logo', 1, {fill:'#5F0017'},0)
// 	.to('.logo-circle', 1, {fill:'#f8c4d0'},0)

// 	var scene = new ScrollMagic.Scene({triggerElement: ".cta", triggerHook:0, offset:'-150'})
// 	.setTween(tween)
// 	.addTo(controller)

// }









// // scroll screenLeft 
// if (!Modernizr.touch){

// var tween = new TimelineMax();
// tween.to('.scroll-left', 1, {x:'-150%'},0)


// var scene = new ScrollMagic.Scene({
// 	triggerElement: '.testimonials',
// 	duration:'200%',
// 	triggerHook: '0',
// 	offset:'350',
// 	})
// 	.setPin('.testimonials')
// 	.setTween(tween)
// 	.addTo(controller)	
// }

// })(jQuery);


