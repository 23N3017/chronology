gsap.registerPlugin(ScrollTrigger);

const imageContainer = document.querySelector('.image-container');
const layers = document.querySelectorAll('.image > *');

gsap.set(layers, {opacity: 0 });
gsap.set('#layer01', {opacity: 1});

ScrollTrigger.create({
    trigger: imageContainer,
    start:'top top',
    end: '+=2000',
    pin:true,
    scrub: true,

    onUpdate: (self) => {
        if (self.progress < 0.2) {
            gsap.to('#layer01', { opacity: 1 });
            gsap.to('#layer02, #layer03, #layer04, #layer05', { opacity: 0 });
        } else if (self.progress >= 0.2 && self.progress < 0.4) {
            gsap.to('#layer01, #layer02', { opacity: 1 });
            gsap.to('#layer03, #layer04, #layer05', { opacity: 0 });
        } else if (self.progress >= 0.4 && self.progress < 0.6){
            gsap.to('#layer01, #layer02, #layer03', { opacity: 1 });
            gsap.to('#layer04, #layer05', { opacity: 0 });
        } else if (self.progress >= 0.6 && self.progress < 0.8){
            gsap.to('#layer01, #layer02, #layer03 ,#layer04', { opacity: 1 });
            gsap.to('#layer05', { opacity: 0 });
        } else {
            gsap.to('#layer01, #layer02, #layer03, #layer04, #layer05', { opacity: 1 });
        }
    },
});