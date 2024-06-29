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
  