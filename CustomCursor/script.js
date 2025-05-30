const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const image = document.querySelector("#imagea");

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x - 10,
    y: e.y - 10,
    duration: 0.3,
    ease: "back.out",
  });
});

image.addEventListener("mouseenter", (e) => {
  gsap.to(cursor, {
    scale: 2,
    backgroundColor: "gray",
  });
});

image.addEventListener("mouseleave", (e) => {
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "transparent",
  });
});
