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



// slider TEXT animation

// swiper js for slider
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  on: {
    transitionEnd: function () {
      animateText();
    },
  },
});

function animateText() {
  // Reset the animation state of all slide texts
  gsap.set(".swiper-slide .slider_hero_text_container h1", { x: 0, opacity: 1 });

  // Animate the active slide's text
  gsap.fromTo(".swiper-slide-active .slider_hero_text_container h1",
    {
      x: 200,
      opacity: 0,
      skewX: 10,
      scale: 0.8
    },
    {
      x: 0,
      opacity: 1,
      skewX: 0,
      scale: 1,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
      stagger: {
        amount: 0.2
      }
    }
  );

}
// Initial animation
animateText();




// History section horizantal scroll

gsap.registerPlugin(ScrollTrigger);

gsap.to(".india_ki_heartbeat_video_container", {
  xPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".india_ki_heartbeat",
    scroller: "body",
    start: "top 0%",
    end: "+=" + window.innerWidth,
    scrub: 1,
    pin: true,
    markers: false,
  },
});
