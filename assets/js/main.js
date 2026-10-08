// NAVIGATION SCROLL EFFECT
const topbar = document.querySelector('.topbar');
if (topbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      topbar.classList.add('scrolled');
    } else {
      topbar.classList.remove('scrolled');
    }
  });
}

// MOBILE MENU TOGGLE
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.style.display === 'flex';
    mainNav.style.display = isOpen ? 'none' : 'flex';
    menuToggle.setAttribute('aria-expanded', !isOpen);
  });

  const links = mainNav.querySelectorAll('a');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.style.display = 'none';
    });
  });
}

// LANGUAGE SWITCHER
const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    langButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    const lang = button.dataset.lang;
    console.log('Language switched to:', lang);
  });
});

// PROJECT FILTERS
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length && projectCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      const selected = button.dataset.filter;
      projectCards.forEach((card) => {
        const match = selected === 'all' || card.dataset.category === selected;
        card.style.display = match ? 'block' : 'none';
        if (match) {
          card.style.animation = 'fadeInUp 0.4s ease-out';
        }
      });
    });
  });
}

// CONTACT FORM SUBMISSION
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = contactForm.querySelector('#name').value;
    alert(`Thank you, ${name}. Your message has been recorded in this visual prototype.`);
    contactForm.reset();
  });
}

// EMPLOYEE LOGIN
const employeeLoginForm = document.getElementById('employeeLoginForm');
if (employeeLoginForm) {
  employeeLoginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const empId = employeeLoginForm.querySelector('#employeeId').value;
    if (empId) {
      sessionStorage.setItem('employeeId', empId);
      window.location.href = '../private/dashboard/index.html';
    }
  });
}

// SCROLL REVEAL ANIMATIONS
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.section, .feature-card, .project-card, .reason-box').forEach((el) => {
  observer.observe(el);
});

// COUNTER ANIMATION (for stats)
function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 50);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 50);
}

const statNumbers = document.querySelectorAll('.stat-card strong');
let hasAnimated = false;

if (statNumbers.length) {
  const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasAnimated) {
      statNumbers.forEach((el) => {
        const text = el.textContent;
        const num = parseInt(text.replace(/\D/g, ''));
        if (!isNaN(num)) {
          animateCounter(el, num);
        }
      });
      hasAnimated = true;
      statsObserver.unobserve(entries[0].target);
    }
  });

  if (statNumbers[0]) {
    statsObserver.observe(statNumbers[0].closest('.stat-card'));
  }
}

// PORTAL NAVIGATION ACTIVE STATE
const currentPath = window.location.pathname;
const portalLinks = document.querySelectorAll('.portal-menu a, .main-nav a');
portalLinks.forEach((link) => {
  const href = link.getAttribute('href');
  if (href && currentPath.includes(href.split('/').pop())) {
    link.classList.add('active');
  }
});

console.log('EGO SERVICE Platform - Phase 1 Initialized');
