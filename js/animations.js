document.addEventListener('DOMContentLoaded', () => {
    // GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // Header animation
    gsap.from('header', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power2.out'
    });

    // Section animations
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Chart animations
    gsap.from('.chart', {
        scaleY: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.chart',
            start: 'top 80%'
        }
    });
});