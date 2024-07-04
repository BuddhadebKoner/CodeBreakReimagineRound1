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

