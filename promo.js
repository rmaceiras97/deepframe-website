/* ─────────────────────────────────────────────────────────────────
   DEEPFRAME MEDIA — Promo Modal  (24h Free Audit)
   Loaded ONLY from index.html — do not include on other pages.

   localStorage key : "df_promo24h_seen" = "1"
   Auto-open delay  : 1 000 ms (once per user)
   ───────────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── 1. Guard: home page only ─────────────────────────────────────
     Matches  /               (Netlify root)
              /index.html     (direct file load)
              index.html      (relative file: open)
  ─────────────────────────────────────────────────────────────────── */
  const pageName = window.location.pathname.split('/').pop() || 'index.html';
  if (pageName !== 'index.html' && pageName !== '') return;

  /* ── 2. Bootstrap after DOM is ready ─────────────────────────────── */
  document.addEventListener('DOMContentLoaded', init);

  function init() {

    /* ── Elements ──────────────────────────────────────────────────── */
    const overlay   = document.getElementById('promoOverlay');
    const modal     = document.getElementById('promoModal');
    const closeBtn  = document.getElementById('promoClose');
    const form      = document.getElementById('promoForm');
    const successEl = document.getElementById('promoSuccess');

    // Bail if any required element is missing (shouldn't happen on home page)
    if (!overlay || !modal || !closeBtn || !form || !successEl) return;
    if (window.DF_I18N && typeof window.DF_I18N.translate === 'function') {
      window.DF_I18N.translate(modal);
    }

    /* ── Constants ─────────────────────────────────────────────────── */
    const STORAGE_KEY = 'df_promo24h_seen';
    const OPEN_DELAY  = 1000;  // ms before auto-open
    const CLOSE_ANIM  = 220;   // ms — matches CSS .promo-closing duration

    /* ── State ─────────────────────────────────────────────────────── */
    let currentStep   = 1;
    let lastFocusedEl = null;
    const DEBUG_VALIDATION = false;

    /* ── i18n helper ───────────────────────────────────────────────── */
    const t = (key, fallback) =>
      (window.DF_I18N && window.DF_I18N.t(key)) || fallback || '';

    function getInvalidFields() {
      return Array.from(form.querySelectorAll(':invalid')).map((el) => el.name || el.id);
    }

    function logInvalidDetails() {
      const invalid = [...form.querySelectorAll(':invalid')];
      console.log(invalid.map(x => ({
        name: x.name,
        id: x.id,
        type: x.type,
        required: x.required,
        disabled: x.disabled,
        value: x.value,
        step:
          x.closest('[data-form-step],[data-promo-step]')?.getAttribute('data-form-step') ||
          x.closest('[data-form-step],[data-promo-step]')?.getAttribute('data-promo-step')
      })));
    }

    /* ── Inline error element (injected into form) ─────────────────── */
    const errorEl = document.createElement('p');
    errorEl.id = 'promoError';
    errorEl.style.cssText =
      'color:#ff6b6b;font-size:0.82rem;text-align:center;margin-top:12px;margin-bottom:0;';
    errorEl.setAttribute('aria-live', 'polite');
    errorEl.hidden = true;
    form.appendChild(errorEl);

    /* ═══════════════════════════════════════════════════════════════
       OPEN / CLOSE
    ═══════════════════════════════════════════════════════════════ */
    function openModal() {
      lastFocusedEl = document.activeElement;

      overlay.removeAttribute('hidden');
      overlay.removeAttribute('aria-hidden');
      modal.removeAttribute('hidden');
      modal.removeAttribute('aria-hidden');
      document.body.classList.add('promo-open');

      // Focus the close button once the entry animation starts
      setTimeout(() => closeBtn.focus(), 60);

      document.addEventListener('keydown', handleKeydown);
    }

    function closeModal() {
      localStorage.setItem(STORAGE_KEY, '1');

      // Trigger CSS exit animation
      modal.classList.add('promo-closing');
      overlay.classList.add('promo-closing');

      setTimeout(() => {
        modal.setAttribute('hidden', '');
        modal.setAttribute('aria-hidden', 'true');
        overlay.setAttribute('hidden', '');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('promo-open');
        modal.classList.remove('promo-closing');
        overlay.classList.remove('promo-closing');

        // Return focus to the element that was active before the modal opened
        if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
          lastFocusedEl.focus();
        }
      }, CLOSE_ANIM);

      document.removeEventListener('keydown', handleKeydown);
    }

    /* ═══════════════════════════════════════════════════════════════
       KEYBOARD — ESC + focus trap
    ═══════════════════════════════════════════════════════════════ */
    function handleKeydown(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = Array.from(
          modal.querySelectorAll(
            'button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter(el => !el.closest('[hidden]'));

        if (focusable.length === 0) return;
        const first = focusable[0];
        const last  = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    /* ═══════════════════════════════════════════════════════════════
       STEP NAVIGATION
    ═══════════════════════════════════════════════════════════════ */
    const TOTAL_STEPS = 3;
    const stepEls = Array.from(form.querySelectorAll('.promo-form-step'));

    function initStepRequiredState() {
      stepEls.forEach((stepEl) => {
        stepEl.querySelectorAll('input, select, textarea').forEach((field) => {
          field.dataset.requiredOriginal = field.required ? '1' : '0';
        });
      });
    }

    function setStepRequired(stepIndex) {
      stepEls.forEach((stepEl) => {
        const stepMatch = stepEl.id.match(/^promoStep(\d+)$/);
        const stepNum = stepMatch ? parseInt(stepMatch[1], 10) : 0;
        const isActiveStep = stepNum === stepIndex;

        stepEl.querySelectorAll('input, select, textarea').forEach((field) => {
          const isProtectedField =
            field.type === 'hidden' || field.name === 'form-name' || field.name === 'bot-field';

          if (isProtectedField) return;

          if (isActiveStep) {
            field.disabled = false;
            field.required = field.dataset.requiredOriginal === '1';
          } else {
            field.required = false;
            field.disabled = true;
          }
        });
      });
    }

    function enableAllFieldsForSubmit() {
      const changed = [];
      stepEls.forEach((stepEl) => {
        stepEl.querySelectorAll('input, select, textarea').forEach((field) => {
          const isProtectedField =
            field.type === 'hidden' || field.name === 'form-name' || field.name === 'bot-field';
          if (isProtectedField) return;
          if (field.disabled) {
            changed.push(field);
            field.disabled = false;
          }
        });
      });
      return () => {
        changed.forEach((field) => {
          field.disabled = true;
        });
      };
    }

    function goToStep(target) {
      if (target < 1 || target > TOTAL_STEPS) return;

      // Validate current step only when moving forward
      if (target > currentStep) {
        setStepRequired(currentStep);
        if (!validateStep(currentStep)) {
          showError();
          if (form.reportValidity) form.reportValidity();
          return;
        }
      }

      // Swap visible step
      const oldEl = document.getElementById(`promoStep${currentStep}`);
      const newEl = document.getElementById(`promoStep${target}`);

      if (oldEl) oldEl.hidden = true;
      if (newEl) {
        newEl.removeAttribute('hidden');
        setStepRequired(target);
        // Move focus to first interactive element in the new step
        const first = newEl.querySelector('input, select, button');
        if (first) setTimeout(() => first.focus(), 30);
      }

      updateProgress(target);
      currentStep = target;
      hideError();
    }

    function updateProgress(active) {
      const dots  = modal.querySelectorAll('.promo-progress-step');
      const lines = modal.querySelectorAll('.promo-progress-line');

      dots.forEach((dot, i) => {
        const n = i + 1;
        dot.classList.toggle('promo-progress-step--active', n === active);
        dot.classList.toggle('promo-progress-step--done',   n < active);

        if (n === active) {
          dot.setAttribute('aria-current', 'step');
        } else {
          dot.removeAttribute('aria-current');
        }
      });

      // Line[i] sits between step (i+1) and step (i+2)
      lines.forEach((line, i) => {
        line.classList.toggle('promo-progress-line--done', i + 1 < active);
      });
    }

    /* ═══════════════════════════════════════════════════════════════
       VALIDATION (per step)
    ═══════════════════════════════════════════════════════════════ */
    function validateStep(stepNum) {
      const stepEl = document.getElementById(`promoStep${stepNum}`);
      if (!stepEl) return true;

      // Text inputs
      const textInputs = stepEl.querySelectorAll(
        'input[type="text"][required], input[type="url"][required]'
      );
      for (const field of textInputs) {
        if (!field.value.trim()) {
          field.focus();
          return false;
        }
      }

      // Select
      const selects = stepEl.querySelectorAll('select[required]');
      for (const sel of selects) {
        if (!sel.value) {
          sel.focus();
          return false;
        }
      }

      // Required radio groups — collect group names that need a checked radio
      const needsCheck = new Set();
      const hasChecked  = new Set();

      stepEl.querySelectorAll('input[type="radio"][required]').forEach(r => {
        needsCheck.add(r.name);
      });
      stepEl.querySelectorAll('input[type="radio"]:checked').forEach(r => {
        hasChecked.add(r.name);
      });

      for (const name of needsCheck) {
        if (!hasChecked.has(name)) {
          const firstRadio = stepEl.querySelector(`input[type="radio"][name="${name}"]`);
          if (firstRadio) firstRadio.focus();
          return false;
        }
      }

      return true;
    }

    /* ═══════════════════════════════════════════════════════════════
       STEP 2 — Dynamic contactValue placeholder
       WhatsApp / Call  → phone format
       Email            → email format
    ═══════════════════════════════════════════════════════════════ */
    const contactValueInput = document.getElementById('promoContactValue');
    const methodRadios = form.querySelectorAll('input[name="contactMethod"]');

    function updateContactPlaceholder() {
      if (!contactValueInput) return;
      contactValueInput.placeholder = t('promo24h.contactValuePlaceholder', 'WhatsApp number or email');
    }

    methodRadios.forEach(r => r.addEventListener('change', updateContactPlaceholder));
    updateContactPlaceholder();

    // Keep placeholder in sync if the user switches language mid-session
    document.addEventListener('df:language-changed', updateContactPlaceholder);

    /* ═══════════════════════════════════════════════════════════════
       STEP 3 — Conditional website URL field
    ═══════════════════════════════════════════════════════════════ */
    const websiteUrlGroup  = document.getElementById('promoWebsiteUrlGroup');
    const hadWebsiteRadios = form.querySelectorAll('input[name="hadWebsite"]');

    hadWebsiteRadios.forEach(r => {
      r.addEventListener('change', () => {
        if (!websiteUrlGroup) return;
        if (r.value === 'yes' && r.checked) {
          websiteUrlGroup.removeAttribute('hidden');
        } else {
          websiteUrlGroup.setAttribute('hidden', '');
          // Clear the URL so it isn't submitted as empty
          const urlInput = document.getElementById('promoWebsiteUrl');
          if (urlInput) urlInput.value = '';
        }
        hideError();
        r.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });

    /* ═══════════════════════════════════════════════════════════════
       ERROR / SUCCESS STATE
    ═══════════════════════════════════════════════════════════════ */
    function showError() {
      errorEl.textContent = t('promo24h.error', 'Please complete the required fields.');
      errorEl.hidden = false;
    }

    function hideError() {
      errorEl.hidden = true;
    }

    function showSuccess() {
      // Conceal navigation chrome inside modal
      const progressEl = modal.querySelector('.promo-progress');
      const headerEl   = modal.querySelector('.promo-modal-header');
      if (progressEl) progressEl.hidden = true;
      if (headerEl)   headerEl.hidden = true;
      form.hidden = true;

      // Reveal success panel
      successEl.removeAttribute('hidden');

      // Move screen-reader focus to the success heading
      const heading = successEl.querySelector('h3');
      if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus();
      }
    }

    /* ═══════════════════════════════════════════════════════════════
       FORM SUBMISSION — POST to "/" (Netlify Forms, no redirect)
    ═══════════════════════════════════════════════════════════════ */
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      setStepRequired(currentStep);
      const stepValid = validateStep(currentStep);
      const htmlValid = form.reportValidity ? form.reportValidity() : true;
      if (!stepValid || !htmlValid) {
        showError();
        logInvalidDetails();
        if (DEBUG_VALIDATION) {
          console.log([...new FormData(form).entries()]);
          console.log('Invalid:', getInvalidFields());
        }
        return;
      }

      hideError();

      const restoreDisabledState = enableAllFieldsForSubmit();

      if (DEBUG_VALIDATION) {
        console.log([...new FormData(form).entries()]);
        console.log('Invalid:', getInvalidFields());
      }

      const submitBtn   = form.querySelector('[type="submit"]');
      const originalTxt = submitBtn ? submitBtn.textContent : '';

      if (submitBtn) {
        submitBtn.disabled    = true;
        submitBtn.textContent = '\u2026'; // "…" while awaiting response
      }

      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(new FormData(form)).toString(),
        });

        if (response.ok) {
          localStorage.setItem(STORAGE_KEY, '1');
          showSuccess();
        } else {
          throw new Error(`HTTP ${response.status}`);
        }
      } catch (_) {
        restoreDisabledState();
        setStepRequired(currentStep);
        showError();
        if (submitBtn) {
          submitBtn.disabled    = false;
          submitBtn.textContent = originalTxt;
        }
      }
    });

    /* ═══════════════════════════════════════════════════════════════
       EVENT WIRING — close triggers
    ═══════════════════════════════════════════════════════════════ */
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    /* ── Next buttons ──────────────────────────────────────────────── */
    modal.querySelectorAll('.promo-btn-next').forEach(btn => {
      btn.addEventListener('click', () => {
        goToStep(parseInt(btn.dataset.targetStep, 10));
      });
    });

    /* ── Back buttons (no validation, always allow) ────────────────── */
    modal.querySelectorAll('.promo-btn-back').forEach(btn => {
      btn.addEventListener('click', () => {
        goToStep(parseInt(btn.dataset.targetStep, 10));
        // goToStep's condition  target > currentStep  is false when going back,
        // so validation is skipped automatically.
      });
    });

    initStepRequiredState();
    setStepRequired(currentStep);

    /* ═══════════════════════════════════════════════════════════════
       AUTO-OPEN — 1 s delay, once per user
    ═══════════════════════════════════════════════════════════════ */
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTimeout(openModal, OPEN_DELAY);
    }

  } // end init()

})();
