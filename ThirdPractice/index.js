let initialPath = `M 10 90 Q 200 90 390 90 `;

let finalPath = `M 10 90 Q 200 90 390 90 `;

const string = document.querySelector("#string");

string.addEventListener("mousemove", (e) => {
  initialPath = `M 10 90 Q ${e.x} ${e.y} 390 90`;

  gsap.to("svg path", {
    attr: { d: initialPath },
    duration: 0.5,
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1,
    ease: "elastic.out(1, 0.3)",
  });
});
