new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    /* sectionsColor: ['#E4D628', '#5BFEFF', '#ADDC7A', '#E4D628'], */
    navigation: true,
    afterLoad: function(origin, destination, direction) {
        if (destination.index === 0) {
            gsap.to('#section1 .divDentroDeSection', { opacity: 1, duration: 1 });
        } else {
            gsap.to('#section1 .divDentroDeSection', { opacity: 0, duration: 1 });
        }
        if (destination.index === 1) {
            gsap.to('#section2 .divDentroDeSection', { opacity: 1, duration: 1 });
        } else {
            gsap.to('#section2 .divDentroDeSection', { opacity: 0, duration: 1 });
        }
        if (destination.index === 2) {
            gsap.to('#section3 .divDentroDeSection', { opacity: 1, duration: 1 });
        } else {
            gsap.to('#section3 .divDentroDeSection', { opacity: 0, duration: 1 });
        }
        if (destination.index === 3) {
            gsap.to('#section4 .divDentroDeSection', { opacity: 1, duration: 1 });
        } else {
            gsap.to('#section4 .divDentroDeSection', { opacity: 0, duration: 1 });
        }
    }
});

AOS.init();
