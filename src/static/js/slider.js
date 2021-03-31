import Swiper from './swiper.js'

const amazingSlider = new Swiper('.footer__slider', {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
	    el: '.dots',
	    type: 'bullets',
	    clickable: true
	},
	mousewheel: {
        forceToAxis: true
    },
    breakpoints: {
    	850: {
    		slidesPerView: 3
    	},
    	500: {
    		slidesPerView: 2
    	},
    }

});