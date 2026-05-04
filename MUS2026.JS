/* ════════════════════════════════════════════════════════════════════════
TKT — Tchoukoutou
Site vitrine — Interactions JavaScript
════════════════════════════════════════════════════════════════════════ */

// ── 1. Apparition progressive des éléments au scroll ────────────────────
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add(‘visible’);
}
});
}, {
threshold: 0.1,
rootMargin: ‘0px 0px -80px 0px’
});

document.querySelectorAll(’.reveal’).forEach(el => observer.observe(el));

// ── 2. Effet de fond sur la nav au scroll ───────────────────────────────
const nav = document.querySelector(‘nav’);

window.addEventListener(‘scroll’, () => {
if (window.scrollY > 100) {
nav.style.background = ‘rgba(15, 8, 5, 0.95)’;
nav.style.backdropFilter = ‘blur(10px)’;
nav.style.webkitBackdropFilter = ‘blur(10px)’;
} else {
nav.style.background = ‘linear-gradient(to bottom, rgba(15,8,5,0.85) 0%, rgba(15,8,5,0) 100%)’;
nav.style.backdropFilter = ‘none’;
nav.style.webkitBackdropFilter = ‘none’;
}
});
