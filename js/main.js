/**
 * Main Application Logic
 * CS Portfolio - Vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProfile();
  renderFocusAreas();
  renderExperience();
  renderProjects();
  renderContacts();
  initTypingEffect();
  initScrollspy();
  initScrollReveal();
});

/**
 * Utility to check if a URL string is valid and present
 */
function isValidUrl(url) {
  return url !== null && url !== undefined && url !== 'null' && url !== 'undefined' && String(url).trim() !== '';
}

/* ==========================================================================
   1. Theme Management (Light / Dark Mode)
   ========================================================================== */
function getStoredTheme() {
  try { return localStorage.getItem('theme'); } catch (e) { return null; }
}

function storeTheme(theme) {
  try { localStorage.setItem('theme', theme); } catch (e) { /* storage blocked */ }
}

function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  // Saved choice wins; otherwise follow the OS setting
  let currentTheme = getStoredTheme() || (media.matches ? 'dark' : 'light');
  applyTheme(currentTheme);

  // Follow OS changes live until the user picks a theme manually
  media.addEventListener('change', (e) => {
    if (getStoredTheme()) return;
    currentTheme = e.matches ? 'dark' : 'light';
    applyTheme(currentTheme);
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
      storeTheme(currentTheme);
      applyTheme(currentTheme);
    });
  }
}

function applyTheme(theme) {
  // Always set the attribute explicitly so CSS never has to guess
  document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
  updateToggleIcon(theme);
}

function updateToggleIcon(theme) {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;

  if (theme === 'dark') {
    toggleBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
    toggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
    toggleBtn.setAttribute('title', 'Switch to Light Mode');
  } else {
    toggleBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
    toggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
    toggleBtn.setAttribute('title', 'Switch to Dark Mode');
  }
}

/* ==========================================================================
   1b. Render Profile (nav logo, hero, about bio, contact blurb, footer)
   The HTML keeps the same text as a fallback; data.js is the source of truth.
   ========================================================================== */
function renderProfile() {
  const p = portfolioData.profile;
  if (!p) return;

  // Set plain text on an element if both the element and the value exist
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  };

  setText('hero-name', p.name);
  setText('hero-status-text', p.statusBadge);
  setText('hero-intro', p.heroIntro);
  setText('about-bio', p.aboutBio);
  setText('contact-subtext', p.contactBlurb);
  setText('footer-name', p.name);
  setText('footer-year', String(new Date().getFullYear()));

  // Nav logo: "gurshiv.dev" -> gurshiv<span class="accent">.dev</span>
  const logo = document.getElementById('nav-logo');
  if (logo && p.handle) {
    const dot = p.handle.indexOf('.');
    logo.textContent = dot > 0 ? p.handle.slice(0, dot) : p.handle;
    if (dot > 0) {
      const accent = document.createElement('span');
      accent.className = 'accent';
      accent.textContent = p.handle.slice(dot);
      logo.appendChild(accent);
    }
    logo.setAttribute('aria-label', `${p.name} Portfolio Home`);
  }

  const photo = document.querySelector('.hero-photo');
  if (photo && p.name) photo.alt = `${p.name} - CS Student Portrait`;

  if (p.name && p.role) document.title = `${p.name} — ${p.role}`;
}

/* ==========================================================================
   2. Render Focus Areas (About Section)
   ========================================================================== */
function renderFocusAreas() {
  const container = document.getElementById('focus-areas-container');
  if (!container || !portfolioData.focusAreas) return;

  container.innerHTML = portfolioData.focusAreas.map(item => `
    <div class="icon-chip-card scroll-reveal">
      <div class="chip-header">
        <div class="chip-icon-badge ${item.accent}">
          ${item.icon}
        </div>
        <h3 class="chip-title">${item.title}</h3>
      </div>
      <p class="chip-desc">${item.description}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   3. Render Experience (Experience Section)
   ========================================================================== */
function renderExperience() {
  const container = document.getElementById('experience-container');
  if (!container || !portfolioData.experiences) return;

  container.innerHTML = portfolioData.experiences.map(exp => {
    const linkHtml = exp.link && isValidUrl(exp.link.href) ? `
      &middot; <a href="${exp.link.href}" target="_blank" rel="noopener noreferrer" class="exp-product-link" aria-label="Open ${exp.link.label} (live site)">${exp.link.label} <span aria-hidden="true">&#8599;</span></a>
    ` : '';

    return `
      <article class="experience-card scroll-reveal">
        <div class="exp-header">
          <div>
            <h3 class="exp-role">${exp.role}</h3>
            <p class="exp-company">${exp.company} &bull; <span class="exp-location">${exp.location}</span> ${linkHtml}</p>
          </div>
          <span class="exp-period-badge">${exp.period}</span>
        </div>

        <ul class="exp-bullets">
          ${exp.description.map(bullet => `<li>${bullet}</li>`).join('')}
        </ul>

        <div class="exp-skills">
          ${exp.skills.map(skill => `<span class="tech-tag">${skill}</span>`).join('')}
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   4. Render Projects (Projects Section)
   ========================================================================== */
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container || !portfolioData.projects) return;

  container.innerHTML = portfolioData.projects.map(proj => {
    const hasGithub = isValidUrl(proj.githubUrl);
    const hasLive = isValidUrl(proj.liveUrl);

    let linksHtml = '';
    if (hasGithub || hasLive) {
      linksHtml = `
        <div class="project-links">
          ${hasGithub ? `
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" aria-label="View ${proj.title} Source Code on GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              Code
            </a>
          ` : ''}
          ${hasLive ? `
            <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" aria-label="View ${proj.title} Live Demo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live Demo
            </a>
          ` : ''}
        </div>
      `;
    }

    return `
      <article class="project-card scroll-reveal">
        <div class="project-body">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>

          <div class="project-tech-tags">
            ${proj.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>

          ${linksHtml}
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   5. Render Contact Badges (Contact Section)
   ========================================================================== */
function renderContacts() {
  const container = document.getElementById('contact-badges-container');
  if (!container || !portfolioData.contacts) return;

  container.innerHTML = portfolioData.contacts.map(item => `
    <a href="${item.href}" target="_blank" rel="noopener noreferrer" class="contact-badge-item scroll-reveal" aria-label="${item.name}: ${item.value}">
      <div class="contact-icon-btn ${item.accent}">
        ${item.icon}
      </div>
      <span class="contact-label">${item.label}</span>
    </a>
  `).join('');
}

/* ==========================================================================
   6. One-Time Typing Effect (Hero Tagline)
   ========================================================================== */
function initTypingEffect() {
  const taglineEl = document.getElementById('hero-typing-tagline');
  if (!taglineEl) return;

  const textToType = portfolioData.profile.role || "CS Student & Aspiring Developer";
  taglineEl.innerHTML = `<span id="typed-text"></span><span class="typing-cursor"></span>`;
  const textSpan = document.getElementById('typed-text');

  let i = 0;
  function typeChar() {
    if (i < textToType.length) {
      textSpan.textContent += textToType.charAt(i);
      i++;
      setTimeout(typeChar, 60);
    }
  }

  setTimeout(typeChar, 400);
}

/* ==========================================================================
   7. Scrollspy Active Link Highlighting
   ========================================================================== */
function initScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   8. Scroll-Triggered Reveal Animations
   ========================================================================== */
function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
  }, 100);
}
