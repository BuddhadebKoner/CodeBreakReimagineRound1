// for smooth scrolling 
const lenis = new Lenis()

// lenis.on('scroll', (e) => {
// })

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)




const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
    const dropdown = document.querySelector('.hamburgur-dropdown-content');

    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}

// Optional: Close the dropdown when clicking outside of it
window.onclick = function (event) {
    if (!event.target.closest('.menu-hamburgur')) {
        const dropdown = document.querySelector('.hamburgur-dropdown-content');

        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    }
}


// Map switcher
const mapImage = document.getElementById('mapImage');
const buttons = document.querySelectorAll('.map_switch');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add the active class to the clicked button
        button.classList.add('active');

        // Get the map name from the data-map attribute
        const mapName = button.getAttribute('data-map');

        // Change the image src attribute based on the clicked button
        mapImage.src = `./images/backgrounds/${mapName}.jpg`;
    });
});

gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
        opacity: 0,
        display: "none",
        duration: 1.5,
        delay: 3.5,
    }
);


// document.addEventListener("DOMContentLoaded", () => {
//     const loader = document.querySelector('.loading-page');
//     const sections = document.querySelectorAll('nav, #hero, #content, footer');

//     // Simulate a delay to demonstrate the loader (remove this in production)
//     setTimeout(() => {
//         loader.style.display = 'none';
//         sections.forEach(section => {
//             section.style.display = 'block';
//         });
//     }, 3000); 

//     // loader.style.display = 'none';
//     // sections.forEach(section => {
//     //     section.style.display = 'block';
//     // });
// });


document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector('.loading-page');
    const sections = document.querySelectorAll('nav, #hero, #content, footer');

    window.onload = () => {
        loader.style.display = 'none';
        sections.forEach(section => {
            section.style.display = 'block';
        });
    };
});
