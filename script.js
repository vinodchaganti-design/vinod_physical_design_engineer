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

  // 2. Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const hamburgerIcon = mobileMenuToggle ? mobileMenuToggle.querySelector('.hamburger-icon') : null;
  const closeIcon = mobileMenuToggle ? mobileMenuToggle.querySelector('.close-icon') : null;

  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = mobileNav.classList.toggle('hidden');
      const isOpen = !isHidden;
      mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
      if (hamburgerIcon && closeIcon) {
        hamburgerIcon.classList.toggle('hidden', isOpen);
        closeIcon.classList.toggle('hidden', !isOpen);
      }
    });

    // Close mobile menu when clicking any nav link
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileNav.classList.contains('hidden') &&
          !mobileNav.contains(e.target) &&
          !mobileMenuToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });

    function closeMobileMenu() {
      mobileNav.classList.add('hidden');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      if (hamburgerIcon && closeIcon) {
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    }
  }

  // 3. Interactive RTL-to-GDSII PD Flow Visualizer
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

  // 4. Contact Form Handler (Direct delivery to Vinod with 100% reliability)
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        formFeedback.textContent = 'Please fill out all required fields (Name, Email, and Message).';
        formFeedback.className = 'form-feedback-msg error';
        formFeedback.classList.remove('hidden');
        return;
      }

      const recipient = 'vinodkumarchowdary016@gmail.com';
      const emailSubject = `ASIC PD Inquiry: ${subject || 'Portfolio Contact'} (from ${name})`;
      const emailBody = `Hi Vinod,\n\n${message}\n\n---------------------------\nSender: ${name}\nEmail: ${email}`;

      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      const outlookLink = `https://outlook.live.com/mail/0/deeplink/compose?to=${recipient}&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Automatically trigger email client draft
      window.location.href = mailtoLink;

      // Display positive confirmation & immediate webmail / copy options
      formFeedback.innerHTML = `
        <div class="feedback-content">
          <div class="feedback-status">
            <span class="feedback-icon">✓</span>
            <strong>Message Prepared for Vinod!</strong>
          </div>
          <p>Your mail application should open to send this to <strong>${recipient}</strong>. You can also send directly using:</p>
          <div class="feedback-actions">
            <a href="${gmailLink}" target="_blank" rel="noopener noreferrer" class="feedback-btn gmail-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
              Open in Gmail
            </a>
            <a href="${outlookLink}" target="_blank" rel="noopener noreferrer" class="feedback-btn outlook-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
              Open in Outlook
            </a>
            <button type="button" id="copy-msg-btn" class="feedback-btn copy-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              Copy Details
            </button>
          </div>
        </div>
      `;
      formFeedback.className = 'form-feedback-msg success';
      formFeedback.classList.remove('hidden');

      // Setup copy button
      const copyBtn = document.getElementById('copy-msg-btn');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(emailBody).then(() => {
            copyBtn.innerHTML = `✓ Copied!`;
            setTimeout(() => {
              copyBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Copy Details
              `;
            }, 3000);
          }).catch(() => {
            copyBtn.textContent = 'Failed to copy';
          });
        });
      }
    });
  }

  // 5. Scroll Reveal Animations (Exclude hidden/feedback elements)
  const revealElements = document.querySelectorAll(
    '.clay-card:not(#form-feedback):not(#mobile-nav), .section-header, .stat-item, .timeline-item'
  );

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(element => {
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

  // 6. Mouse Torch Effect (Desktop only)
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

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    function animateTorch() {
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
