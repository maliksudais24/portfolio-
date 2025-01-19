console.log("JavaScript is working!");

let burger = document.querySelector(".ham-burger>svg");
let navbar = document.querySelector(".navbar");


burger.addEventListener("click", (e) => {
    e.preventDefault();
   if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 160;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector('.navbar a[href*="' + id + '"]');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });
};

// Initialize ScrollReveal with corrected syntax
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1000,
    delay: 100
});

// Reveal elements from top
ScrollReveal().reveal('.content, .heading', { origin: 'top' });
ScrollReveal().reveal('.about-content, .services-box', { origin: 'bottom' });
ScrollReveal().reveal('.social a, .img', { origin: 'left' });
ScrollReveal().reveal('.protfolio-box, .protfolio-box2', { origin: 'right' });
