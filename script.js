document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle Functionality
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sunIcon = themeToggleBtn.querySelector('.sun-icon');
  const moonIcon = themeToggleBtn.querySelector('.moon-icon');
  const body = document.body;

  // Initialize theme from localStorage or system settings
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    applyDarkTheme();
  } else {
    applyLightTheme();
  }

  themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      applyLightTheme();
    } else {
      applyDarkTheme();
    }
  });

  function applyDarkTheme() {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
    localStorage.setItem('theme', 'dark');
  }

  function applyLightTheme() {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
    localStorage.setItem('theme', 'light');
  }

  // 2. Interactive RTL-to-GDSII PD Flow Visualizer
  const flowBtns = document.querySelectorAll('.flow-step-btn');
  const flowContentPanels = document.querySelectorAll('.flow-stage-content');

  flowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetStage = btn.getAttribute('data-stage');

      // Update active button state
      flowBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update active content panel state
      flowContentPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === `flow-content-${targetStage}`) {
          panel.classList.add('active');
        }
      });
    });
  });

  // 3. Contact Form Submission (Simulated API call)
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get form fields
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;

      // Visual feedback for submit loading state (press button down)
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      // Simulate network request delay (1.5 seconds)
      setTimeout(() => {
        // Simple client-side success response
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;

        formFeedback.classList.remove('hidden', 'error');
        formFeedback.classList.add('success');
        formFeedback.textContent = 'Thank you! Your message has been sent successfully. Vinod will get back to you soon.';

        // Clear input values
        contactForm.reset();

        // Hide notification after 6 seconds
        setTimeout(() => {
          formFeedback.classList.add('hidden');
        }, 6000);
      }, 1500);
    });
  }

  // 4. Scroll Reveal Animations (Intersection Observer for Premium Micro-interactions)
  const revealElements = document.querySelectorAll('.clay-card, .section-header, .stat-item, .timeline-item');

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once revealed, no need to track it again
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
  });

  revealElements.forEach(element => {
    // Add initial animation prep styles via JS to support non-JS fallback
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.2), transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.2)';
    revealOnScroll.observe(element);
  });

  // CSS class to animate in
  const style = document.createElement('style');
  style.textContent = `
    .revealed {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);

  // 5. Mouse Torch Effect
  const torchOverlay = document.createElement('div');
  torchOverlay.id = 'torch-overlay';
  document.body.appendChild(torchOverlay);

  let mouseX = -1000;
  let mouseY = -1000;
  let currentX = -1000;
  let currentY = -1000;
  let isMoving = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      torchOverlay.style.opacity = '1';
      isMoving = true;
    }
  });

  document.addEventListener('mouseleave', () => {
    torchOverlay.style.opacity = '0';
    isMoving = false;
  });

  // Check if device supports touch (disable torch on mobile/touch interfaces)
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    function animateTorch() {
      // Easing for smooth lagging torch follow effect
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      
      document.documentElement.style.setProperty('--mouse-x', `${currentX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${currentY}px`);
      
      requestAnimationFrame(animateTorch);
    }
    animateTorch();
  } else {
    torchOverlay.style.display = 'none';
  }
});
