// gsap.to("#box", {
//   x: 500,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "cyan",
//   rotate: 360,
//   borderRadius: "50%",
// });
// gsap.from("h1", {
//   duration: 1,
//   y: 30,
//   delay: 1,
//   opacity: 0,
//   stagger: 1,
// });

// gsap.to("#box", {
//   x: 500,
//   duration: 1,
//   delay: 1,
//   repeat: -1, // repeat indefinitely
//   // if i want to repeat 5 times, i can use repeat: 5 .... 5 means total 6 times (1 initial + 5 repeats)
//   yoyo: true, // makes the animation reverse back to the start
// });

// timeline

// gsap.to("#box", {
//   x: 500,
//   duration: 1,
//   delay: 1,
// });

// gsap.to("#box2", {
//   x: 500,
//   duration: 1,
//   delay: 2,
//   backgroundColor: "cyan",
// });

// gsap.to("#box3", {
//   x: 500,
//   duration: 1,
//   delay: 3,
//   backgroundColor: "blueviolet",
// });

// timeline is works synchronously
// const tl = gsap.timeline({});

// tl.to("#box", {
//   x: 500,
//   duration: 1,
//   delay: 1,
// });
// tl.to("#box2", {
//   x: 500,
//   duration: 1,
//   backgroundColor: "cyan",
// });
// tl.to("#box3", {
//   x: 500,
//   duration: 1,
//   backgroundColor: "blueviolet",
// });

// const tl = gsap.timeline();

// tl.from("h2", {
//   y: -30,
//   opacity: 0,
//   duration: 0.5,
//   delay: 0.5,
// });

// tl.from("nav ul li", {
//   y: -30,
//   opacity: 0,
//   duration: 0.5,
//   stagger: 0.2,
// });

// tl.from("h1", {
//   y: 30,
//   opacity: 0,
//   duration: 0.5,
//   delay: 0.5,
//   scale: 0.5,
// });
