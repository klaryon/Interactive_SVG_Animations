const animationIsOkay = window.matchMedia(
  "(prefers-reduced-motion: no-preference)"
).matches;

//turn this on to prevent animation for people who don't want it
// if (animationIsOkay) {
  gsap.from("#wobble", {
    xPercent: 100,
    yPercent: 100,
    duration: 2,
    scrollTrigger: {
      trigger: "#candy",
      pin: true,
      scrub: 1
    },
  });
// }
