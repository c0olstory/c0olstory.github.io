//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}
function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

// if (document.querySelector('.slider-main__body')) {
// 	new Swiper('.slider-main__body', {
// 		observer: true,
// 		observeParents: true,
// 		slidesPerView: 1,
// 		spaceBetween: 32,
// 		watchOverflow: true,
// 		speed: 800,
// 		loop: true,
// 		loopAdditionalSlides: 5,
// 		preloadImages: false,
// 		parallax: true,
// 		// Dotts
// 		pagination: {
// 			el: '.controls-slider-main__dotts',
// 			clickable: true,
// 		},
// 		// Arrows
// 		navigation: {
// 			nextEl: '.slider-main .slider-arrow_next',
// 			prevEl: '.slider-main .slider-arrow_prev',
// 		}
// 	});
// }

// if (document.querySelector('.slider-rooms__body')) {
// 	new Swiper('.slider-rooms__body', {
// 		observer: true,
// 		observeParents: true,
// 		slidesPerView: 'auto',
// 		spaceBetween: 24,
// 		speed: 800,
// 		loop: true,
// 		watchOverflow: true,
// 		loopAdditionalSlides: 5,
// 		preloadImages: false,
// 		parallax: true,
// 		// Dotts
// 		pagination: {
// 			el: '.slider-rooms__dotts',
// 			clickable: true,
// 		},
// 		// Arrows
// 		navigation: {
// 			nextEl: '.slider-rooms .slider-arrow_next',
// 			prevEl: '.slider-rooms .slider-arrow_prev',
// 		}
// 	});
// }
//
if (document.querySelector('.slider-rooms__body')) {
	new Swiper('.slider-rooms__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 'auto',
		spaceBetween: 24,
		speed: 800,
		loop: true,
		watchOverflow: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
		// Dotts
		pagination: {
			el: '.slider-rooms__dotts',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.slider-rooms .slider-arrow_next',
			prevEl: '.slider-rooms .slider-arrow_prev',
		}
	});
}

//
if (document.querySelector('.slider-school__body')) {
	new Swiper('.slider-school__body', {
		observer: true,
		observeParents: true,
		// slidesPerView: 'auto',
		slidesPerView: 1,
		spaceBetween: 32,
		speed: 800,
		loop: true,
		watchOverflow: true,
		// Dotts
		pagination: {
			el: '.slider-school__dotts',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.slider-school .slider-arrow_next',
			prevEl: '.slider-school .slider-arrow_prev',
		}
		// breakpoints: {
		// 	// when window width is >= 320px
		// 	320: {
		// 		slidesPerView: 1.1,
		// 		spaceBetween: 16
		// 	},
		// 	// // when window width is >= 768px
		// 	768: {
		// 		slidesPerView: 1.5,
		// 		spaceBetween: 20
		// 	},
		// 	// when window width is >= 992px
		// 	992: {
		// 		slidesPerView: 2.4,
		// 		spaceBetween: 32
		// 	}
		// }
	})
}

if (document.querySelector('.slider-auto__body')) {
	new Swiper('.slider-auto__body', {
		observer: true,
		observeParents: true,
		// slidesPerView: 'auto',
		centeredSlides: true,
		initialSlide: 1,
		// slidesPerView: 2.4,
		// spaceBetween: 32,
		speed: 800,
		loop: true,
		watchOverflow: true,
		// Dotts
		pagination: {
			el: '.slider-auto__dotts',
			clickable: true,
		},
		// keyboard: {
		// 	enabled: true,
		// 	onlyInViewport: true,
		// 	pageUpDown: true,
		// },
		// Arrows
		navigation: {
			nextEl: '.slider-auto .slider-arrow_next',
			prevEl: '.slider-auto .slider-arrow_prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.1,
				spaceBetween: 16
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1.5,
				spaceBetween: 18
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 1.5,
				spaceBetween: 20
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 1.5,
				spaceBetween: 32
			}
		}
	})
}

if (document.querySelector('.slider-training__body')) {
	new Swiper('.slider-training__body', {
		observer: true,
		observeParents: true,
		centeredSlides: true,
		initialSlide: 1,
		speed: 800,
		loop: true,
		watchOverflow: true,
		// Dotts
		pagination: {
			el: '.slider-training__dotts',
			clickable: true,
		},
		// keyboard: {
		// 	enabled: true,
		// 	onlyInViewport: true,
		// 	pageUpDown: true,
		// },
		// Arrows
		navigation: {
			nextEl: '.slider-training .slider-arrow_next',
			prevEl: '.slider-training .slider-arrow_prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.1,
				spaceBetween: 16
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1.5,
				spaceBetween: 18
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 1.5,
				spaceBetween: 20
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 1.5,
				spaceBetween: 32
			}
		}
	})
}



