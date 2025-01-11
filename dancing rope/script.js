let initialPath = `M 10 100 Q 500 100 990 100`;

let finalPath = `M 10 100 Q 500 100 990 100`;

let string = document.querySelector("#string");

string.addEventListener("mousemove", function (point) {
  path = `M 10 100 Q 500 ${point.y} 990 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 1,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 2,
    ease: "elastic.out(1,0.2)",
  });
});
