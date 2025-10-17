const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const yearTarget = document.getElementById('current-year');
const heroSection = document.querySelector('.hero');

if (navToggle && navLinks) {
  navToggle.setAttribute('aria-expanded', 'false');
  navLinks.dataset.open = 'false';

  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navLinks.dataset.open = (!isExpanded).toString();
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.dataset.open = 'false';
    });
  });
}

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

if (heroSection) {
  const resetHeroTilt = () => {
    heroSection.style.setProperty('--hero-tilt-x', '0');
    heroSection.style.setProperty('--hero-tilt-y', '0');
  };

  const updateHeroTilt = (event) => {
    if (event.pointerType === 'touch') {
      resetHeroTilt();
      return;
    }
    const rect = heroSection.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    heroSection.style.setProperty('--hero-tilt-x', (x * 12).toFixed(2));
    heroSection.style.setProperty('--hero-tilt-y', (y * 10).toFixed(2));
  };

  heroSection.addEventListener('pointermove', updateHeroTilt);
  heroSection.addEventListener('pointerleave', resetHeroTilt);
  heroSection.addEventListener('pointerup', resetHeroTilt);
}
