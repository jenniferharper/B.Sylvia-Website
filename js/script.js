gsap.registerPlugin(ScrollTrigger);
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