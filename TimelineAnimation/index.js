const timeline = gsap.timeline({ paused: true });

timeline.to("#full", {
  right: 0,
  duration: 0.6,
});

timeline.from("#full ul li", {
  opacity: 0,
  duration: 0.2,
  stagger: 0.2,
  x: 150,
});
timeline.from("#full button", {
  opacity: 0,
  duration: 0.3,
});

const menu = document.querySelector("#main #nav button");
const close = document.querySelector("#full button");

menu.addEventListener("click", () => {
  timeline.play();
  menu.style.display = "none";
});

close.addEventListener("click", () => {
  timeline.reverse();
  menu.style.display = "block";
});
