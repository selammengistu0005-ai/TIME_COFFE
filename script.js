// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Sticky Navbar Style Change on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('shadow-md');
        navbar.classList.replace('bg-white/90', 'bg-white/95');
    } else {
        navbar.classList.remove('shadow-md');
        navbar.classList.replace('bg-white/95', 'bg-white/90');
    }
});

// Intersection Observer for Scroll Animations (Fade in up)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Run animation once
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach((elem) => {
    observer.observe(elem);
});