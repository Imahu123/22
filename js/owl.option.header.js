/* OPTION HEADER */

$('header').find('.owl-carousel.header').owlCarousel({
	loop:true,
	items: 1,
	lazyLoad: true,
	nav: false,
	dots: false,
	mouseDrag: true,
	touchDrag: false,
	autoplay: true,
	autoplayTimeout: 4000,
	lightbox: true,
	navText: ['<span class="owl-arrow"><svg class="owl-icon" width="512" height="512" viewBox="0 0 512 512"><polygon points="375.7,512 392.3,495.4 152.9,256 392.3,16.6 375.7,0 119.7,256 "/></svg></span><span class="owl-arrow-bg"></span>', '<span class="owl-arrow"><svg class="owl-icon" width="512" height="512" viewBox="0 0 512 512"><polygon points="136.3,0 119.7,16.6 359.1,256 119.7,495.4 136.3,512 392.3,256 "/></svg></span><span class="owl-arrow-bg"></span>'],
	responsive:{
		0:{
			autoplay: false,
			mouseDrag: false,
			touchDrag: false,
			nav: false

		},
		642:{
			autoplay: true,
			mouseDrag: true,
			touchDrag: true,
			nav: false
		}
	}
});


/* OPTION BANDEAU01 */

$('header').find('.owl-carousel.bandeau01').owlCarousel({
	loop:true,
	lazyLoad: true,
	nav: false,
	dots: false,
	autoplay: true,
	autoplayTimeout: 4000,
	responsiveClass:true,
	margin:0,
	lightbox: true,
	navText: ['<span class="owl-arrow"><svg class="owl-icon" width="512" height="512" viewBox="0 0 512 512"><polygon points="375.7,512 392.3,495.4 152.9,256 392.3,16.6 375.7,0 119.7,256 "/></svg></span><span class="owl-arrow-bg"></span>', '<span class="owl-arrow"><svg class="owl-icon" width="512" height="512" viewBox="0 0 512 512"><polygon points="136.3,0 119.7,16.6 359.1,256 119.7,495.4 136.3,512 392.3,256 "/></svg></span><span class="owl-arrow-bg"></span>'],
	responsive:{
		0:{
			nav: false,
			items: 1
		},
		641:{
			items: 2
		},
		1025:{
			items: 3
		}
	}
});


/* OPTION PARTENAIRES */

$('.prefooter').find('.owl-carousel.partenaires').owlCarousel({
	loop:true,
	lazyLoad: true,
	nav: true,
	dots: false,
	autoplay: true,
	autoplayTimeout: 4000,
	responsiveClass:true,
	margin:20,
	lightbox: true,
	navText: ['<span class="owl-arrow"><svg class="owl-icon" width="512" height="512" viewBox="0 0 512 512"><polygon points="375.7,512 392.3,495.4 152.9,256 392.3,16.6 375.7,0 119.7,256 "/></svg></span><span class="owl-arrow-bg"></span>', '<span class="owl-arrow"><svg class="owl-icon" width="512" height="512" viewBox="0 0 512 512"><polygon points="136.3,0 119.7,16.6 359.1,256 119.7,495.4 136.3,512 392.3,256 "/></svg></span><span class="owl-arrow-bg"></span>'],
	responsive:{
		0:{
			nav: false,
			items: 3
		},
		641:{
			items: 3
		},
		1025:{
			items: 6
		}
	}
});

/* OPTION GALERIE01 */

$('header').find('.owl-carousel.galerie01').owlCarousel({
	items: 1,
	loop: true,
	lazyLoad: true,
	dots: false,
	autoplay: false,
	autoplayTimeout: 4000,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	lightbox: true,
	mouseDrag: false,
	syncedElement: 'div.owl-small',
	navText: ['<span class="owl-arrow"><svg class="owl-icon" width="512" height="512" viewBox="0 0 512 512"><polygon points="375.7,512 392.3,495.4 152.9,256 392.3,16.6 375.7,0 119.7,256 "/></svg></span><span class="owl-arrow-bg"></span>', '<span class="owl-arrow"><svg class="owl-icon" width="512" height="512" viewBox="0 0 512 512"><polygon points="136.3,0 119.7,16.6 359.1,256 119.7,495.4 136.3,512 392.3,256 "/></svg></span><span class="owl-arrow-bg"></span>'],
	responsive:{
		0:{
			nav: true
		},
		641:{
			nav: true
		}
	},
	thumbnails:{
		className: "galerie01",
		loop: true,
		lazyLoad: true,
		nav: false,
		dots: true,
		autoplay: false,
		autoplayTimeout: 4000,
		responsiveClass: true,
		margin: 10,
		lightbox: false,
		responsive:{  
			0:{  
				items: 1
			},
			641:{  
				items: 3
			},
			1025:{  
				items: 4
			}
		}
	}
});
