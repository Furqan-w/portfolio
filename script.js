/* -------------------------------------------------------------
   Premium Portfolio JS Interactions
------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initTypewriter();
  initCanvasBackground();
  initScrollAnimations();
  initProjectFilter();
  initContactForm();
  initCursorGlow();
});

/* ==========================================
   Theme Management
   ========================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  // Check local storage or system preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let currentTheme = 'dark'; // default
  
  if (savedTheme) {
    currentTheme = savedTheme;
  } else if (!systemPrefersDark) {
    currentTheme = 'light';
  }
  
  // Set theme attributes
  document.body.setAttribute('data-theme', currentTheme);
  
  // Toggle click listener
  themeToggleBtn.addEventListener('click', () => {
    const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    
    // Dispatch a custom event to notify the canvas background to refresh its colors
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
  });
}

/* ==========================================
   Mobile Menu Navigation
   ========================================== */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  // Toggle menu drawer
  mobileToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('open');
    
    // Toggle burger icon to Close icon shape
    const isOpen = navMenu.classList.contains('open');
    mobileToggle.innerHTML = isOpen 
      ? `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
         </svg>`
      : `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
         </svg>`;
  });
  
  // Close menu drawer when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      mobileToggle.innerHTML = `
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      `;
    });
  });
  
  // Close menu drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
      navMenu.classList.remove('open');
      mobileToggle.innerHTML = `
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      `;
    }
  });
}

/* ==========================================
   Typewriter Effect
   ========================================== */
function initTypewriter() {
  const typewriterText = document.getElementById('typewriter-text');
  const words = ['Full-Stack Developer', 'Creative UI/UX Designer', 'Solution Engineer'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      // Remove characters
      typewriterText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // faster deletion
    } else {
      // Add characters
      typewriterText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 120; // standard typing speed
    }
    
    // Logic controls
    if (!isDeleting && charIndex === currentWord.length) {
      // Word completed, pause before starting deletion
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      // Cycle to the next word
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500;
    }
    
    setTimeout(type, typingSpeed);
  }
  
  // Launch loop
  setTimeout(type, 1000);
}

/* ==========================================
   Interactive Particle Background
   ========================================== */
function initCanvasBackground() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let animationId;
  let particlesArray = [];
  const numberOfParticles = 80;
  
  // Track Mouse Interactions
  const mouse = {
    x: null,
    y: null,
    radius: 120 // Radius of influence
  };
  
  // Handle mouse movements
  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  
  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });
  
  // Colors dynamically fetched from styles.css variables
  let accentPrimary, accentSecondary;
  function getThemeColors() {
    const rootStyles = getComputedStyle(document.documentElement);
    accentPrimary = rootStyles.getPropertyValue('--accent-primary').trim();
    accentSecondary = rootStyles.getPropertyValue('--accent-secondary').trim();
  }
  getThemeColors();
  
  // Listens for theme toggle notifications
  window.addEventListener('themeChanged', () => {
    getThemeColors();
    // Update particle colors on theme change
    particlesArray.forEach(p => p.updateColor());
  });
  
  // Particle Class Model
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.8 - 0.4;
      this.speedY = Math.random() * 0.8 - 0.4;
      this.updateColor();
    }
    
    updateColor() {
      // Distribute colors between primary and secondary
      this.color = Math.random() > 0.5 ? accentPrimary : accentSecondary;
    }
    
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
    
    update() {
      // Normal drift speed
      this.x += this.speedX;
      this.y += this.speedY;
      
      // Keep within canvas limits
      if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
      if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
      
      // Mouse push/pull logic
      if (mouse.x !== null && mouse.y !== null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          // Push particles slightly away
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 1.5;
          this.y -= Math.sin(angle) * force * 1.5;
        }
      }
    }
  }
  
  function initParticles() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }
  
  function connectParticles() {
    let maxDistance = 140;
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        let dx = particlesArray[a].x - particlesArray[b].x;
        let dy = particlesArray[a].y - particlesArray[b].y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          // Adjust line thickness and opacity based on closeness
          let opacity = (1 - (distance / maxDistance)) * 0.15;
          ctx.strokeStyle = document.body.getAttribute('data-theme') === 'dark' 
            ? `rgba(138, 92, 246, ${opacity})` 
            : `rgba(99, 102, 241, ${opacity})`;
            
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }
  
  function handleResize() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
    initParticles();
  }
  
  // Responsive resize
  window.addEventListener('resize', handleResize);
  
  // Set dimensions initially
  handleResize();
  
  // Animation Frame Loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particlesArray.forEach(p => {
      p.update();
      p.draw();
    });
    
    connectParticles();
    animationId = requestAnimationFrame(animate);
  }
  
  animate();
}

/* ==========================================
   Scroll reveals and Interactive numbers
   ========================================== */
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  const header = document.getElementById('main-header');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');
  
  // Sticky header transition shadows
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = 'var(--shadow-md)';
      header.style.padding = '0.5rem 0';
    } else {
      header.style.boxShadow = 'none';
      header.style.padding = '0';
    }
    
    // Dynamic Active Navigation Links highlights
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  // Intersection Observer for scroll reveal fade-ins
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // If skill section cards are revealed, trigger progress bars widths
        if (entry.target.classList.contains('skills-category')) {
          const bars = entry.target.querySelectorAll('.skill-progress');
          bars.forEach(bar => {
            bar.style.width = bar.getAttribute('data-percent');
          });
        }
        
        // If About stats are revealed, animate counter values
        if (entry.target.classList.contains('stat-item')) {
          const numEl = entry.target.querySelector('.stat-number');
          animateCounter(numEl);
        }
        
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(reveal => {
    revealObserver.observe(reveal);
  });
  
  // Skills category observer fallback trigger
  const skillCategories = document.querySelectorAll('.skills-category');
  skillCategories.forEach(cat => {
    revealObserver.observe(cat);
  });
  
  // Stat counters observer fallback trigger
  const statItems = document.querySelectorAll('.stat-item');
  statItems.forEach(item => {
    revealObserver.observe(item);
  });
}

function animateCounter(element) {
  if (!element || element.classList.contains('counted')) return;
  element.classList.add('counted');
  
  const target = +element.getAttribute('data-target');
  let currentVal = 0;
  const duration = 1500; // time in ms
  const increment = target / (duration / 16); // ~60fps
  
  const counterLoop = () => {
    currentVal += increment;
    if (currentVal < target) {
      element.textContent = Math.floor(currentVal);
      requestAnimationFrame(counterLoop);
    } else {
      element.textContent = target + '+';
    }
  };
  
  counterLoop();
}

/* ==========================================
   Portfolio Filter Logic
   ========================================== */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active states
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden');
          // Brief timeout for animations to trigger
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.95)';
          // Hide completely once transition finishes
          setTimeout(() => {
            card.classList.add('hidden');
          }, 300);
        }
      });
    });
  });
}

/* ==========================================
   Contact Form Validation & Submit feedback
   ========================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const feedbackMsg = document.getElementById('form-feedback-msg');
  const yearSpan = document.getElementById('footer-year');
  
  // Set current year inside footer
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameVal = document.getElementById('form-name').value.trim();
    const emailVal = document.getElementById('form-email').value.trim();
    const messageVal = document.getElementById('form-message').value.trim();
    
    // Check validation matches
    if (!nameVal || !emailVal || !messageVal) {
      showFeedback('Please fill out all required fields.', 'error');
      return;
    }
    
    if (!validateEmail(emailVal)) {
      showFeedback('Please provide a valid email address.', 'error');
      return;
    }
    
    // Mimic API post submission states
    const submitBtn = form.querySelector('button[type="submit"]');
    const origBtnHTML = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = `Sending... <span class="typewriter-cursor"></span>`;
    
    setTimeout(() => {
      // Simulating success return
      showFeedback('Thank you, Alex! Your message has been sent successfully. I will get back to you shortly.', 'success');
      form.reset();
      
      submitBtn.disabled = false;
      submitBtn.innerHTML = origBtnHTML;
    }, 1500);
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function showFeedback(text, type) {
    feedbackMsg.textContent = text;
    feedbackMsg.className = 'form-feedback ' + type;
    
    // Reset feedback notice after 6 seconds
    setTimeout(() => {
      feedbackMsg.className = 'form-feedback';
      feedbackMsg.textContent = '';
    }, 6000);
  }
}

/* ==========================================
   Cursor follower effect handler
   ========================================== */
function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;
  
  // Reveal glow on first movement
  document.addEventListener('mousemove', (e) => {
    glow.style.opacity = '1';
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
  
  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });
}
