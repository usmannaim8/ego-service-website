const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('mobile-open');
    if (mainNav.style.display === 'flex') {
      mainNav.style.display = 'none';
    } else {
      mainNav.style.display = 'flex';
      mainNav.style.position = 'absolute';
      mainNav.style.top = '80px';
      mainNav.style.left = '1rem';
      mainNav.style.right = '1rem';
      mainNav.style.flexDirection = 'column';
      mainNav.style.background = 'rgba(15, 23, 42, 0.96)';
      mainNav.style.padding = '1rem';
      mainNav.style.borderRadius = '12px';
      mainNav.style.border = '1px solid rgba(255,255,255,0.1)';
      mainNav.style.zIndex = '100';
    }
  });
}

const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    langButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const selected = button.dataset.filter;
    projectCards.forEach((card) => {
      const match = selected === 'all' || card.dataset.category === selected;
      card.style.display = match ? 'block' : 'none';
    });
  });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you. Your message has been captured in this visual prototype.');
    contactForm.reset();
  });
}

const employeeLoginForm = document.getElementById('employeeLoginForm');
if (employeeLoginForm) {
  employeeLoginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = '../private/dashboard/index.html';
  });
}
