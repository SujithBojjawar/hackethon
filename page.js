// Particles.js Background
particlesJS('particles', {
    particles: {
        number: { value: 120, density: { enable: true, value_area: 800 } },
        color: { value: '#00e6ff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#00e6ff', opacity: 0.3, width: 1 },
        move: { enable: true, speed: 3, direction: 'none', random: true, out_mode: 'out' }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth Scroll for Scroll Button
document.querySelector('.scroll-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('#profile');
    target.scrollIntoView({ behavior: 'smooth' });
});