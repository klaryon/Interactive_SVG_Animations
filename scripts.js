// moves from existing value to some new value
// gsap.to('.rectangle', {
//     xPercent: 100
// })

// moves from some values to its existing value
gsap.from('.rectangles', {
    yPercent: 100,
    ease: "expo.out",
    duration: 2,
    stagger: {
        amount: 1,
        from: "center"
    }
})
