let tl = gsap.timeline({repeat: -1, yoyo: true});

tl.fromTo('#left-eyeboll',{x: 3}, {x: -3,duration: '0.5', ease: Power0.easeNone})
 .fromTo('#right-eyeboll', {x: 3}, {x: -3,duration: '0.5', ease: Power0.easeNone}, 0)