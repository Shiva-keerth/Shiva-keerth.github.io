// ==========================================
// 1. TERMINAL TYPING EFFECT
// ==========================================
const typeTexts = [
    "> Initializing neural cores...",
    "> Loading 10 deployed architectures...",
    "> Connecting to vector databases...",
    "> System online. Welcome."
];

let tIdx = 0, cIdx = 0, deleting = false;
const typeEl = document.getElementById("typewriter");

function typeLoop() {
    const current = typeTexts[tIdx];
    if (deleting) {
        typeEl.textContent = current.substring(0, cIdx - 1);
        cIdx--;
    } else {
        typeEl.textContent = current.substring(0, cIdx + 1);
        cIdx++;
    }

    let speed = deleting ? 25 : 70;

    if (!deleting && cIdx === current.length) {
        speed = 1200;
        if (tIdx === typeTexts.length - 1) return; // Stop at last
        deleting = true;
    } else if (deleting && cIdx === 0) {
        deleting = false;
        tIdx++;
        speed = 400;
    }
    setTimeout(typeLoop, speed);
}

// ==========================================
// 2. SCROLL ANIMATIONS (Intersection Observer)
// ==========================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in, .slide-up').forEach(el => observer.observe(el));
}

// ==========================================
// 3. SKILL BARS ANIMATION
// ==========================================
function initSkillBars() {
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.skill-bar-fill');
                fills.forEach(fill => {
                    const width = fill.getAttribute('data-width');
                    setTimeout(() => { fill.style.width = width + '%'; }, 200);
                });
                barObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const container = document.querySelector('.skills-bars-container');
    if (container) barObserver.observe(container);
}

// ==========================================
// 4. CAROUSEL CONTROLS
// ==========================================
function initCarousel(trackId, prevId, nextId) {
    const track = document.getElementById(trackId);
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);
    if (!track || !prev || !next) return;

    const scrollAmount = 360;

    next.addEventListener('click', () => {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    prev.addEventListener('click', () => {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    // Touch/Drag support
    let isDown = false, startX, scrollLeft;
    track.addEventListener('mousedown', (e) => {
        isDown = true;
        track.style.cursor = 'grabbing';
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    });
    track.addEventListener('mouseleave', () => { isDown = false; track.style.cursor = 'grab'; });
    track.addEventListener('mouseup', () => { isDown = false; track.style.cursor = 'grab'; });
    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 1.5;
        track.scrollLeft = scrollLeft - walk;
    });
    track.style.cursor = 'grab';
}

// ==========================================
// 5. NEURAL NETWORK BACKGROUND (Canvas)
// ==========================================
function initNeuralCanvas() {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height, particles;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    function createParticles() {
        const count = window.innerWidth < 768 ? 35 : 80;
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 1.8 + 0.8
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 255, 180, 0.4)';
            ctx.fill();
        });

        // Lines
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 140) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(176, 38, 255, ${(1 - dist / 140) * 0.6})`;
                    ctx.lineWidth = 0.4;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => { resize(); createParticles(); });
    resize();
    createParticles();
    draw();
}

// ==========================================
// 6. NAVBAR SCROLL EFFECT
// ==========================================
function initNavScroll() {
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.borderBottomColor = 'rgba(176, 38, 255, 0.15)';
            nav.style.background = 'rgba(5, 5, 10, 0.95)';
        } else {
            nav.style.borderBottomColor = 'rgba(255,255,255,0.06)';
            nav.style.background = 'rgba(5, 5, 10, 0.85)';
        }
    });
}

// ==========================================
// 7. ACTIVE NAV LINK HIGHLIGHTING
// ==========================================
function initActiveNav() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.style.color = '';
                    if (link.getAttribute('href') === '#' + entry.target.id) {
                        link.style.color = '#00FFB4';
                    }
                });
            }
        });
    }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

    sections.forEach(s => observer.observe(s));
}

// ==========================================
// 8. MOBILE MENU TOGGLE
// ==========================================
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const links = document.querySelector('.nav-links');
    const buttons = document.querySelector('.nav-buttons');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const isOpen = links.style.display === 'flex';
        links.style.display = isOpen ? 'none' : 'flex';
        links.style.flexDirection = 'column';
        links.style.position = 'absolute';
        links.style.top = '60px';
        links.style.left = '0';
        links.style.right = '0';
        links.style.background = 'rgba(5,5,10,0.98)';
        links.style.padding = '20px';
        links.style.gap = '16px';
        links.style.borderBottom = '1px solid rgba(255,255,255,0.06)';

        if (buttons) {
            buttons.style.display = isOpen ? 'none' : 'flex';
            buttons.style.flexDirection = 'column';
            buttons.style.position = 'absolute';
            buttons.style.top = links.offsetHeight + 60 + 'px';
            buttons.style.left = '0';
            buttons.style.right = '0';
            buttons.style.background = 'rgba(5,5,10,0.98)';
            buttons.style.padding = '20px';
        }
    });
}

// ==========================================
// INIT EVERYTHING ON DOM LOAD
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeLoop, 600);
    initScrollAnimations();
    initSkillBars();
    initCarousel('services-track', 'services-prev', 'services-next');
    initCarousel('projects-track', 'projects-prev', 'projects-next');
    initNeuralCanvas();
    initNavScroll();
    initActiveNav();
    initMobileMenu();
});
