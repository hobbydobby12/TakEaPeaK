// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Intro transition
const intro = document.getElementById('intro');
const introBox = document.getElementById('introBox');
const reveal = document.getElementById('reveal');

// Monogram pulse and slight lead
const monoWrap = document.getElementById('monoWrap');

introBox.addEventListener('click', () => {
  // quick monogram pulse
  monoWrap.classList.add('pulse');
  setTimeout(() => monoWrap.classList.remove('pulse'), 520);

  // optional: nudge it forward for flair
  monoWrap.style.transform = 'translate3d(0,-4px,0) scale(1.02)';
  setTimeout(() => {
    monoWrap.style.transform = '';
  }, 600);

  // Play reveal wipe
  reveal.style.transform = 'scaleY(1)';
  // Add quick pulse to box
  introBox.style.transform = 'translateY(0) scale(1.02)';
  setTimeout(() => {
    // Hide intro and show site
    intro.style.transition = 'opacity .6s ease';
    intro.style.opacity = '0';
    document.body.classList.add('ready');
  }, 450);
  setTimeout(() => {
    intro.style.display = 'none';
  }, 1050);
});

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav.classList.remove('open');
    }
  });
});

// Demo: prevent form submit
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks! This is a demo — hook this form to your backend or email service.');
});
