// AOS Animate On Scroll
AOS.init({
  duration: 900,
  once: true,
  offset: 80,
});

// Scroll Spy for Navbar Active Link
const navLinksList = document.querySelectorAll('.nav-links a');
const sections = Array.from(document.querySelectorAll('section[id]'));

function onScrollSpy() {
  const scrollPos = window.scrollY + 120; // Offset for fixed header
  let currentSectionId = '';
  for (const section of sections) {
    if (scrollPos >= section.offsetTop) {
      currentSectionId = section.id;
    }
  }
  navLinksList.forEach(link => {
    link.classList.remove('active');
    if (currentSectionId && link.getAttribute('href') === '#' + currentSectionId) {
      link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', onScrollSpy);
onScrollSpy(); // Run on load

// Testimonials Slider with Dots and Auto Slide
const testimonials = document.querySelectorAll('.testimonial-card');
const dotsContainer = document.querySelector('.testimonial-dots');
let currentTestimonial = 0;
let testimonialInterval;

function showTestimonial(index) {
  testimonials.forEach((card, i) => {
    card.classList.toggle('active', i === index);
    if (dotsContainer) {
      dotsContainer.children[i].classList.toggle('active', i === index);
    }
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

function startTestimonialInterval() {
  clearInterval(testimonialInterval);
  testimonialInterval = setInterval(nextTestimonial, 5000);
}

if (testimonials.length > 0 && dotsContainer) {
  // Create dots
  testimonials.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => {
      currentTestimonial = i;
      showTestimonial(currentTestimonial);
      startTestimonialInterval();
    });
    dotsContainer.appendChild(dot);
  });
  showTestimonial(currentTestimonial);
  startTestimonialInterval();
}

// Navbar shrink on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}); 