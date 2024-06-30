// mouse follow cursor animation

document.addEventListener("DOMContentLoaded", () => {
  let cursor = document.querySelector('#mouseFollow');
  let isMouseMoving = false;

  document.addEventListener("mousemove", (event) => {
    if (!isMouseMoving) {
      isMouseMoving = true;
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    }

    gsap.to(cursor, {
      x: event.clientX,
      y: event.clientY,
      duration: 0.7,
      ease: "back.out(1.7)"
    });
  });

  // Optionally, hide the cursor when the mouse stops moving
  document.addEventListener("mouseleave", () => {
    gsap.to(cursor, { opacity: 0, duration: 0.3 });
    isMouseMoving = false;
  });
});

// end here mouse follow cursor animation
gsap.to(".navbar-links-a-tag", {
  opacity: 1,
  stagger: 0.1,
  delay: 0.5,
  ease: "power4.out",
  duration: 0.02,
});


// history horizontal scroll animation
gsap.to("#battlegroundTextOutline", {
  transform: "translateX(-80%)",
  scrollTrigger: {
    trigger: ".india_ki_heartbeat",
    scroller: "body",
    start: "top 0%",
    end: "bottom -100%",
    scrub: 1,
    pin : true,
    markers: true,
  },
});