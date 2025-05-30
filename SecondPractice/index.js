// const tl = gsap.timeline();

// scrolling animation
// gsap.from("#page1 .box", {
//   scale: 0,
//   duration: 0.5,
//   delay: 0.5,
// });

// gsap.from("#page2 .box", {
//   scale: 0,
//   duration: 0.5,
//   scrollTrigger: {
//     trigger: "#page2 .box",
//     scroller: "body",
//     start: "top 90%",
//     // scrub is used to create a smooth animation that follows the scroll
//     scrub: 2,
//   },
// });

gsap.to("#page2 h2", {
  transform: "translateX(-200%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0",
    end: "top -150%",
    scrub: 2,
    pin: true, // pin the element during the scroll
  },
});
