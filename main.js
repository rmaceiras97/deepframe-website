/* =============================================
   DEEPFRAME MEDIA — Main JavaScript
   ============================================= */

// ── Google Business Profile Review URL ──────────
// Paste your GBP review link here when available.
const GBP_REVIEW_URL = "PASTE_GBP_REVIEW_LINK_HERE";

document.addEventListener('DOMContentLoaded', () => {

  // Wire Leave-a-Review button
  const reviewBtn = document.getElementById('leaveReviewBtn');
  if (reviewBtn) {
    reviewBtn.href = GBP_REVIEW_URL;
  }

  // -----------------------------------------------
  // GSAP — Hero intro + circle micro-float
  // -----------------------------------------------
  if (typeof gsap !== 'undefined') {
    const heroTitle = document.querySelector('.hero-title');
    const heroDesc  = document.querySelector('.hero-desc');
    const heroActions = document.querySelector('.hero-actions');
    const heroEyebrow = document.querySelector('.hero-eyebrow');
    const heroRing  = document.querySelector('.hero-ring-img');

    // Intro stagger (only on home page where hero exists)
    if (heroTitle) {
      const heroEls = [heroEyebrow, heroTitle, heroDesc, heroActions].filter(Boolean);
      const heroReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Remove CSS fade-up so it doesn't conflict with GSAP
      heroEls.forEach(el => {
        el.classList.remove('fade-up', 'fade-in');
        el.classList.add('visible');
      });

      if (heroReduced) {
        // Skip animation — just show everything
        gsap.set(heroEls, { opacity: 1, y: 0, clearProps: 'transform' });
      } else {
        // Set initial hidden state, then animate TO visible
        gsap.set(heroEls, { opacity: 0, y: 12 });
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
        if (heroEyebrow) tl.to(heroEyebrow, { opacity: 1, y: 0, duration: 0.5 }, 0);
        tl.to(heroTitle,                     { opacity: 1, y: 0, duration: 0.7 }, 0.1);
        if (heroDesc)    tl.to(heroDesc,     { opacity: 1, y: 0, duration: 0.6 }, 0.25);
        if (heroActions) tl.to(heroActions,   { opacity: 1, y: 0, duration: 0.5 }, 0.4);
      }
    }

    // Golden circle micro-float (replaces CSS @keyframes floatRing)
    if (heroRing) {
      heroRing.classList.remove('fade-in');
      heroRing.classList.add('visible');
      heroRing.style.animation = 'none';
      gsap.set(heroRing, { opacity: 1 });
      gsap.to(heroRing, {
        y: '+=6',
        rotation: 1,
        duration: 9,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }

    // -------------------------------------------
    // Scroll-reveal via IntersectionObserver
    // -------------------------------------------
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Single items: data-reveal
    // Staggered grids: data-reveal-stagger on the parent
    const revealSingles = document.querySelectorAll('[data-reveal]');
    const revealGrids   = document.querySelectorAll('[data-reveal-stagger]');

    if (prefersReduced) {
      // Skip all animation — just make everything visible
      revealSingles.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
      revealGrids.forEach(grid => {
        Array.from(grid.children).forEach(c => { c.style.opacity = '1'; c.style.transform = 'none'; });
      });
    } else {
      // Set initial hidden state
      revealSingles.forEach(el => gsap.set(el, { opacity: 0, y: 14 }));
      revealGrids.forEach(grid => {
        Array.from(grid.children).forEach(c => gsap.set(c, { opacity: 0, y: 14 }));
      });

      const revealObs = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          obs.unobserve(el);

          if (el.hasAttribute('data-reveal-stagger')) {
            // Animate children with stagger
            gsap.to(Array.from(el.children), {
              opacity: 1, y: 0, duration: 0.65,
              ease: 'power2.out', stagger: 0.08,
            });
          } else {
            gsap.to(el, { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' });
          }
        });
      }, { threshold: 0.15 });

      revealSingles.forEach(el => revealObs.observe(el));
      revealGrids.forEach(el => revealObs.observe(el));
    }
  }

  // -----------------------------------------------
  // 1. Navigation — Scroll Effect + Hamburger
  // -----------------------------------------------
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');
  const mobileLinks = document.querySelectorAll('.nav-mobile-link');

  // Scroll: add .scrolled class
  const handleScroll = () => {
    if (window.scrollY > 30) {
      nav && nav.classList.add('scrolled');
    } else {
      nav && nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .nav-mobile-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // -----------------------------------------------
  // 2. Scroll Animations (Intersection Observer)
  // -----------------------------------------------
  const animatedEls = document.querySelectorAll('.fade-up, .fade-in');

  if (animatedEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    animatedEls.forEach(el => observer.observe(el));
  }

  // -----------------------------------------------
  // 3. Portfolio Filter
  // -----------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter cards
        document.querySelectorAll('.portfolio-card[data-category]').forEach(card => {
          const category = card.dataset.category;
          if (filter === 'all' || category === filter) {
            card.removeAttribute('data-hidden');
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.setAttribute('data-hidden', 'true');
          }
        });
      });
    });
  }

  // -----------------------------------------------
  // 4. Contact Form (Multi-step)
  // -----------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    const steps = Array.from(contactForm.querySelectorAll('[data-form-step]'));
    const stepLabels = Array.from(contactForm.querySelectorAll('[data-step-label]'));
    const progressFill = document.getElementById('contactProgressFill');
    let currentStep = 0;

    const validateStep = (index) => {
      const step = steps[index];
      if (!step) return true;

      const requiredFields = Array.from(step.querySelectorAll('[required]'));
      for (const field of requiredFields) {
        if (!field.checkValidity()) {
          field.reportValidity();
          field.focus();
          return false;
        }
      }
      return true;
    };

    const renderStep = (index) => {
      steps.forEach((step, i) => {
        step.classList.toggle('is-active', i === index);
      });

      stepLabels.forEach((label, i) => {
        label.classList.toggle('is-active', i <= index);
      });

      if (progressFill && steps.length > 1) {
        const percent = (index / (steps.length - 1)) * 100;
        progressFill.style.width = percent + '%';
      }
    };

    contactForm.querySelectorAll('[data-next-step]').forEach(btn => {
      btn.addEventListener('click', () => {
        const next = Number(btn.getAttribute('data-next-step'));
        if (!validateStep(currentStep)) return;
        currentStep = next;
        renderStep(currentStep);
      });
    });

    contactForm.querySelectorAll('[data-prev-step]').forEach(btn => {
      btn.addEventListener('click', () => {
        const prev = Number(btn.getAttribute('data-prev-step'));
        currentStep = prev;
        renderStep(currentStep);
      });
    });

    renderStep(currentStep);

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validateStep(currentStep)) return;

      const submitBtn = contactForm.querySelector('.form-submit');
      const originalText = submitBtn ? submitBtn.textContent : 'Send Message';

      if (submitBtn) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
      }

      // Submit to Netlify Forms via AJAX, then redirect
      try {
        const formData = new FormData(contactForm);
        formData.set('form-name', 'contact');
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString(),
        });
        if (response.ok) {
          window.location.href = '/thanks.html';
          return;
        }
        throw new Error('Submission failed');
      } catch (_) {
        // Fallback: show inline error, restore button
        if (submitBtn) {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }
        alert(window.DF_I18N ? window.DF_I18N.t('contact.errorMsg') || 'Something went wrong. Please try again.' : 'Something went wrong. Please try again.');
        return;
      }
    });
  }

  // -----------------------------------------------
  // 5. Smooth number counter (hero stats)
  // -----------------------------------------------
  const counters = document.querySelectorAll('.count-up');

  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || '';
          let current = 0;
          const duration = 1800;
          const step = target / (duration / 16);

          const tick = () => {
            current = Math.min(current + step, target);
            el.textContent = Math.floor(current) + suffix;
            if (current < target) requestAnimationFrame(tick);
          };

          tick();
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  // -----------------------------------------------
  // 6. Cursor glow effect (desktop only)
  // -----------------------------------------------
  if (window.matchMedia('(pointer: fine)').matches) {
    const glow = document.createElement('div');
    glow.style.cssText = `
      position: fixed; pointer-events: none; z-index: 9999;
      width: 400px; height: 400px; border-radius: 50%;
      background: radial-gradient(circle, rgba(255,85,0,0.06) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      transition: left 0.15s ease, top 0.15s ease;
      will-change: left, top;
    `;
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    }, { passive: true });
  }

  // -----------------------------------------------
  // 7. Year in footer
  // -----------------------------------------------
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
