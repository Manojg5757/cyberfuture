// Intersection Observer for Scroll Animations
const revealElements = document.querySelectorAll('.reveal');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

revealElements.forEach(el => {
    observer.observe(el);
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background shift on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(3, 3, 5, 0.95)';
        nav.style.width = '100%';
        nav.style.maxWidth = '100%';
        nav.style.top = '0';
        nav.style.borderRadius = '0';
        nav.style.borderBottom = '1px solid var(--glass-border)';
    } else {
        nav.style.background = 'var(--bg-card)';
        nav.style.width = '90%';
        nav.style.maxWidth = '1100px';
        nav.style.top = '1.5rem';
        nav.style.borderRadius = '24px';
        nav.style.borderBottom = '1px solid var(--glass-border)';
    }
});
