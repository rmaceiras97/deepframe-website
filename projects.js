/* =============================================
   DEEPFRAME MEDIA — Project Data & Drawer
   ============================================= */

/*
  ┌─────────────────────────────────────────────────────┐
  │  HOW TO UPDATE PROJECTS                             │
  │                                                     │
  │  Each project supports these optional fields:       │
  │                                                     │
  │  websiteUrl: "https://clientsite.com"               │
  │    → Shows a "Visit Website" button in the drawer   │
  │    → Use for live website URLs                      │
  │                                                     │
  │  brandPdf: "https://drive.google.com/file/..."     │
  │    → URL to brand PDF (Google Drive or other)       │
  │    → Shows a "View Brand PDF" button                │
  │                                                     │
  │  image: "screenshots/nova-realty.jpg"               │
  │    → Drop a screenshot in /screenshots folder       │
  │    → Replaces the styled placeholder on the card   │
  │      AND in the drawer header automatically         │
  │                                                     │
  │  Leave any field out (or set to "") to hide it.    │
  └─────────────────────────────────────────────────────┘
*/

const PROJECTS = [
  {
    id: "capillus",
    title: "Capillus",
    category: "website",
    categoryLabel: "Website",
    location: "Miami, FL",
    year: "2024",
    tags: ["Web Design", "E-Commerce", "Product Site"],
    color: "#0d1b2a",
    accent: "#FF5500",
    websiteUrl: "https://www.capillus.com/?srsltid=AfmBOoq_gaxKU1a695kjChjWcNoBhkkRhj7gK3nDGp1mSsoKwrJvftOe",
    brandPdf: "",
    image: "assets/projects/capillus.png",
    description: "A professional website for Capillus — a leading hair regrowth technology company offering FDA-cleared laser therapy devices for hair restoration.",
    challenge: "Capillus needed a modern, conversion-focused website that effectively communicated the science behind their laser therapy technology while building trust with potential customers.",
    solution: "We delivered a clean, professional website with clear product information, customer testimonials, and educational content to help visitors understand the benefits of laser hair therapy.",
    results: ["Modern, professional web presence", "Clear product showcase and information", "Enhanced user experience across devices", "Improved customer confidence and trust"],
    visual: `
      <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0d1b2a 0%,#1b263b 40%,#2a3f5f 100%);padding:32px;gap:20px;">
        <div style="font-family:'Space Grotesk',sans-serif;font-size:clamp(2.5rem,6vw,4rem);font-weight:800;color:#FF5500;letter-spacing:-0.02em;line-height:1;">CAPILLUS</div>
        <div style="font-size:0.7rem;color:rgba(255,255,255,0.35);letter-spacing:0.2em;text-transform:uppercase;margin-top:-10px;">Hair Regrowth Technology</div>
        <div style="display:flex;flex-direction:column;gap:8px;width:100%;max-width:320px;margin-top:16px;">
          <div style="height:10px;background:rgba(255,85,0,0.7);border-radius:5px;width:80%;"></div>
          <div style="height:10px;background:rgba(255,255,255,0.1);border-radius:5px;width:60%;"></div>
          <div style="height:10px;background:rgba(255,255,255,0.06);border-radius:5px;width:90%;"></div>
        </div>
      </div>`
  },
  {
    id: "airbestpros",
    title: "AirBestPros",
    category: "website",
    categoryLabel: "Website",
    location: "Miami, FL",
    year: "2024",
    tags: ["Web Design", "Service Site", "Local Business"],
    color: "#0a1a2a",
    accent: "#FF5500",
    websiteUrl: "https://www.airbestpros.com/",
    brandPdf: "",
    image: "assets/projects/air-best-pross.png",
    description: "A professional service website for AirBestPros — an HVAC and air conditioning service provider delivering reliable climate control solutions to residential and commercial clients.",
    challenge: "AirBestPros needed a modern website that would help them stand out in the competitive HVAC market and generate quality service leads online.",
    solution: "We built a clean, service-focused website with clear calls-to-action, service descriptions, and an easy way for customers to request quotes and schedule appointments.",
    results: ["Professional online presence established", "Clear service offerings and pricing", "Streamlined customer inquiry process", "Mobile-optimized for on-the-go customers"],
    visual: `
      <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2a 0%,#1a2f45 50%,#2a4560 100%);padding:32px;gap:16px;">
        <div style="font-family:'Space Grotesk',sans-serif;font-size:clamp(2rem,5vw,3rem);font-weight:800;color:#FF5500;letter-spacing:0.02em;">AIRBESTPROS</div>
        <div style="font-size:0.65rem;color:rgba(255,255,255,0.35);letter-spacing:0.25em;text-transform:uppercase;margin-top:-10px;">HVAC Services</div>
        <div style="display:flex;gap:10px;margin-top:16px;">
          <div style="width:60px;height:60px;border-radius:12px;background:rgba(255,85,0,0.15);border:2px solid rgba(255,85,0,0.3);"></div>
          <div style="width:60px;height:60px;border-radius:12px;background:rgba(255,255,255,0.08);border:2px solid rgba(255,255,255,0.15);"></div>
        </div>
      </div>`
  },
  {
    id: "fundme-up-ai",
    title: "Fundme Up AI",
    category: "website",
    categoryLabel: "Website",
    location: "Miami, FL",
    year: "2024",
    tags: ["Web Design", "AI Platform", "Startup"],
    color: "#1a0a2a",
    accent: "#7777FF",
    websiteUrl: "https://fundmeupai.com/",
    brandPdf: "",
    image: "assets/projects/fund-me-up-ai.png",
    description: "A modern website for Fundme Up AI — an innovative AI-powered platform helping entrepreneurs and startups secure funding through intelligent matching and pitch optimization.",
    challenge: "Fundme Up AI needed a website that communicated innovation, trust, and professionalism to both startups seeking funding and investors looking for opportunities.",
    solution: "We created a clean, modern website that showcases the platform's capabilities while building credibility with clear messaging and professional design.",
    results: ["Modern, conversion-focused website", "Clear platform showcase", "Professional web presence", "Strong visual identity in the AI funding space"],
    visual: `
      <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a0a2a 0%,#2a1545 50%,#3a2060 100%);padding:32px;gap:20px;">
        <div style="font-family:'Space Grotesk',sans-serif;font-size:clamp(2.5rem,6vw,3.5rem);font-weight:800;color:#7777FF;letter-spacing:-0.02em;">FUNDME UP</div>
        <div style="font-size:0.65rem;color:rgba(255,255,255,0.3);letter-spacing:0.2em;text-transform:uppercase;margin-top:-14px;">AI Funding Platform</div>
        <div style="display:flex;gap:8px;margin-top:16px;">
          <div style="width:48px;height:48px;border-radius:8px;background:rgba(119,119,255,0.2);border:2px solid rgba(119,119,255,0.4);"></div>
          <div style="width:48px;height:48px;border-radius:8px;background:rgba(119,119,255,0.1);border:2px solid rgba(119,119,255,0.2);"></div>
          <div style="width:48px;height:48px;border-radius:8px;background:rgba(255,255,255,0.05);border:2px solid rgba(255,255,255,0.1);"></div>
        </div>
      </div>`
  },
  {
    id: "salty-at-sea",
    title: "Salty at Sea",
    category: "website",
    categoryLabel: "Website",
    location: "Miami, FL",
    year: "2024",
    tags: ["Web Design", "E-Commerce", "Lifestyle Brand"],
    color: "#0a1a2a",
    accent: "#00AACC",
    websiteUrl: "https://www.saltyatsea.com/",
    brandPdf: "",
    image: "assets/projects/salty-at-sea.png",
    description: "A vibrant e-commerce website for Salty at Sea — a coastal lifestyle brand offering ocean-inspired apparel, accessories, and beach essentials for those who live by the water.",
    challenge: "Salty at Sea needed an online store that captured the essence of coastal living while providing a seamless shopping experience for their growing customer base.",
    solution: "We designed and developed a clean, ocean-themed e-commerce site with intuitive navigation, product showcases, and mobile-optimized checkout for customers shopping from anywhere.",
    results: ["Beautiful coastal-themed online store", "Seamless product browsing experience", "Mobile-optimized shopping", "Brand personality shines through design"],
    visual: `
      <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2a 0%,#0a2a3a 50%,#0a3a4a 100%);padding:32px;gap:16px;">
        <div style="font-family:'Space Grotesk',sans-serif;font-size:clamp(2rem,5vw,3rem);font-weight:800;color:#00AACC;letter-spacing:0.02em;">SALTY AT SEA</div>
        <div style="font-size:0.65rem;color:rgba(255,255,255,0.3);letter-spacing:0.25em;text-transform:uppercase;margin-top:-10px;">Coastal Lifestyle</div>
        <div style="display:flex;gap:10px;margin-top:16px;">
          <div style="width:48px;height:48px;border-radius:50%;background:rgba(0,170,204,0.2);border:2px solid rgba(0,170,204,0.4);"></div>
          <div style="width:48px;height:48px;border-radius:50%;background:rgba(0,170,204,0.1);border:2px solid rgba(0,170,204,0.2);"></div>
          <div style="width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.08);border:2px solid rgba(255,255,255,0.15);"></div>
        </div>
      </div>`
  },
  {
    id: "gt-build",
    title: "GT BUILD",
    category: "brand",
    categoryLabel: "Brand",
    location: "Miami, FL",
    year: "2024",
    tags: ["Brand Identity", "Brand Guidelines", "Construction"],
    color: "#1a0a0a",
    accent: "#FF5500",
    websiteUrl: "",
    brandPdf: "https://drive.google.com/file/d/1S-4m2a-zdSXtgo6cMeRsTZGnp8sUB-Dc/view?usp=drive_link",
    image: "assets/projects/gt-build.png",
    description: "A complete brand identity system for GT BUILD — a construction and development company building quality projects across South Florida.",
    challenge: "GT BUILD needed a professional brand identity that would help them stand out in the competitive construction market and communicate their commitment to quality and reliability.",
    solution: "We created a comprehensive brand system with a bold logo, cohesive color palette, typography guidelines, and brand assets that work across all touchpoints from business cards to construction signage.",
    results: ["Complete brand identity system delivered", "Professional brand guidelines", "Strong market presence", "Cohesive brand across all materials"],
    visual: `
      <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a0a0a 0%,#2a1a0a 50%,#3a2510 100%);padding:32px;gap:20px;">
        <div style="font-family:'Space Grotesk',sans-serif;font-size:clamp(2.5rem,6vw,4rem);font-weight:900;color:#FF5500;letter-spacing:0.05em;line-height:1;">GT BUILD</div>
        <div style="font-size:0.7rem;color:rgba(255,255,255,0.35);letter-spacing:0.3em;text-transform:uppercase;margin-top:-10px;">Construction & Development</div>
        <div style="display:flex;gap:12px;margin-top:16px;">
          <div style="width:56px;height:56px;border-radius:4px;background:rgba(255,85,0,0.25);border:2.5px solid rgba(255,85,0,0.5);"></div>
          <div style="width:56px;height:56px;border-radius:4px;background:rgba(255,255,255,0.08);border:2.5px solid rgba(255,255,255,0.15);"></div>
        </div>
      </div>`
  }
];

function i18nText(key, fallback) {
  if (window.DF_I18N && typeof window.DF_I18N.t === "function") {
    return window.DF_I18N.t(key);
  }
  return fallback;
}
function createProjectCard(project, options = {}) {
  const featuredClass = options.featured ? " featured" : "";
  const categoryLabel = project.category === "brand"
    ? i18nText("portfolio.category.brand", "Brand")
    : i18nText("portfolio.category.website", "Website");
  const imageHTML = project.image
    ? `<img src="${project.image}" alt="${project.title} preview" class="portfolio-card-img" />`
    : `<div class="portfolio-card-placeholder">${project.visual || ""}</div>`;

  const subtitle = project.tags && project.tags.length > 0
    ? project.tags.slice(0, 2).join(" · ")
    : project.categoryLabel;

  return `
    <article class="portfolio-card${featuredClass}" data-category="${project.category}" data-project="${project.id}" aria-label="${project.title} - click to view project details" tabindex="0">
      ${imageHTML}
      <div class="portfolio-card-overlay">
        <div class="portfolio-card-tag">${categoryLabel}</div>
        <div class="portfolio-card-title">${project.title}</div>
        <div class="portfolio-card-sub">${subtitle}</div>
      </div>
      <div class="portfolio-card-arrow" aria-hidden="true">↗</div>
    </article>`;
}

function renderWorkProjects() {
  const grid = document.getElementById("portfolioGrid");
  if (!grid) return;

  const emptyState = document.getElementById("portfolioEmpty");
  grid.innerHTML = "";

  PROJECTS.forEach((project, index) => {
    grid.insertAdjacentHTML("beforeend", createProjectCard(project, { featured: index === 0 }));
  });

  if (emptyState) {
    grid.appendChild(emptyState);
  }
}

function renderHomeFeaturedProjects() {
  const grid = document.getElementById("homeFeaturedGrid");
  if (!grid) return;

  const featured = PROJECTS.slice(0, 3);
  grid.innerHTML = featured
    .map((project, index) => createProjectCard(project, { featured: index === 0 }))
    .join("");
}

renderWorkProjects();
renderHomeFeaturedProjects();

/* =============================================
   PROJECT DRAWER
   ============================================= */
function initProjectDrawer() {
  let activeProjectId = null;

  // Build drawer HTML
  const drawer = document.createElement('div');
  drawer.id = 'projectDrawer';
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-modal', 'true');
  drawer.setAttribute('aria-labelledby', 'drawerTitle');
  drawer.innerHTML = `
    <div class="drawer-backdrop"></div>
    <div class="drawer-panel" role="document">
      <button class="drawer-close" aria-label="Close project details">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="drawer-body">
        <div class="drawer-visual" id="drawerVisual"></div>
        <div class="drawer-content">
          <div class="drawer-meta" id="drawerMeta"></div>
          <h2 class="drawer-title" id="drawerTitle"></h2>
          <p class="drawer-desc" id="drawerDesc"></p>
          <div class="drawer-section">
            <div class="drawer-section-label">${i18nText("drawer.challenge", "The Challenge")}</div>
            <p class="drawer-section-text" id="drawerChallenge"></p>
          </div>
          <div class="drawer-section">
            <div class="drawer-section-label">${i18nText("drawer.solution", "Our Solution")}</div>
            <p class="drawer-section-text" id="drawerSolution"></p>
          </div>
          <div class="drawer-section">
            <div class="drawer-section-label">${i18nText("drawer.results", "Results")}</div>
            <ul class="drawer-results" id="drawerResults"></ul>
          </div>
          <div class="drawer-tags" id="drawerTags"></div>
          <div class="drawer-actions" id="drawerActions"></div>
          <a href="contact.html" class="btn btn-primary drawer-cta">${i18nText("drawer.startSimilar", "Start a Similar Project")} →</a>
        </div>
      </div>
    </div>`;
  document.body.appendChild(drawer);

  // Inject styles
  const style = document.createElement('style');
  style.textContent = `
    #projectDrawer {
      position: fixed; inset: 0; z-index: 2000;
      opacity: 0; pointer-events: none;
    }
    #projectDrawer.open { pointer-events: all; }

    .drawer-backdrop {
      position: absolute; inset: 0;
      background: rgba(0,0,0,0.75);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
    }

    .drawer-panel {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      background: #161616;
      border-top: 1px solid rgba(255,255,255,0.08);
      border-radius: 24px 24px 0 0;
      max-height: 92svh;
      overflow-y: auto;
      transform: translateY(100%);
      -webkit-overflow-scrolling: touch;
    }
    @media (min-width: 900px) {
      .drawer-panel {
        top: 0; bottom: 0; right: 0; left: auto;
        width: min(580px, 55vw);
        border-radius: 0;
        border-top: none;
        border-left: 1px solid rgba(255,255,255,0.08);
        max-height: 100svh;
        transform: translateX(100%);
      }
    }
    /* Panel transform controlled by GSAP */

    .drawer-close {
      position: sticky; top: 0; left: 0;
      z-index: 10;
      float: right;
      margin: 16px 16px 0 0;
      width: 36px; height: 36px;
      border-radius: 50%;
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.1);
      color: #fff;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer;
      transition: background 0.2s ease, transform 0.2s ease;
      flex-shrink: 0;
    }
    .drawer-close:hover { background: #FF5500; transform: rotate(90deg); }

    .drawer-body { display: flex; flex-direction: column; }

    .drawer-visual {
      width: 100%; height: 220px;
      flex-shrink: 0;
      overflow: hidden;
    }
    @media (min-width: 900px) { .drawer-visual { height: 280px; } }

    .drawer-content {
      padding: 28px 24px 48px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    @media (min-width: 900px) { .drawer-content { padding: 32px 36px 64px; } }

    .drawer-meta {
      display: flex; flex-wrap: wrap; gap: 8px;
    }
    .drawer-meta-pill {
      font-size: 0.72rem; font-weight: 600;
      letter-spacing: 0.1em; text-transform: uppercase;
      padding: 5px 12px; border-radius: 100px;
    }
    .drawer-meta-category {
      background: rgba(255,85,0,0.15);
      color: #FF5500;
    }
    .drawer-meta-location {
      background: rgba(255,255,255,0.06);
      color: rgba(255,255,255,0.5);
    }
    .drawer-meta-year {
      background: rgba(255,255,255,0.04);
      color: rgba(255,255,255,0.35);
    }

    .drawer-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(1.6rem, 4vw, 2.2rem);
      font-weight: 700;
      color: #fff;
      letter-spacing: -0.02em;
      line-height: 1.1;
      margin: 0;
    }

    .drawer-desc {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.55);
      line-height: 1.7;
      margin: 0;
    }

    .drawer-section { display: flex; flex-direction: column; gap: 8px; }
    .drawer-section-label {
      font-size: 0.7rem; font-weight: 700;
      letter-spacing: 0.14em; text-transform: uppercase;
      color: #FF5500;
    }
    .drawer-section-text {
      font-size: 0.9rem;
      color: rgba(255,255,255,0.5);
      line-height: 1.7;
      margin: 0;
    }

    .drawer-results {
      display: flex; flex-direction: column; gap: 8px;
      margin: 0; padding: 0; list-style: none;
    }
    .drawer-results li {
      display: flex; align-items: flex-start; gap: 10px;
      font-size: 0.9rem; color: rgba(255,255,255,0.7);
      line-height: 1.5;
    }
    .drawer-results li::before {
      content: '';
      width: 16px; height: 16px;
      border-radius: 50%;
      background: rgba(255,85,0,0.15);
      border: 1.5px solid #FF5500;
      flex-shrink: 0;
      margin-top: 1px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 8.5l3 3 5-5' stroke='%23FF5500' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
      background-size: 12px; background-position: center; background-repeat: no-repeat;
    }

    .drawer-tags { display: flex; flex-wrap: wrap; gap: 6px; }
    .drawer-tag {
      font-size: 0.75rem; color: rgba(255,255,255,0.4);
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      padding: 5px 12px; border-radius: 100px;
    }

    .drawer-actions {
      display: flex; flex-wrap: wrap; gap: 10px;
    }
    .drawer-action-btn {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 12px 20px; border-radius: 100px;
      font-size: 0.875rem; font-weight: 600;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      text-decoration: none;
    }
    .drawer-action-btn:hover { transform: translateY(-2px); }
    .drawer-action-live {
      background: #FF5500; color: #fff;
    }
    .drawer-action-live:hover { box-shadow: 0 8px 24px rgba(255,85,0,0.35); }
    .drawer-action-pdf {
      background: rgba(255,255,255,0.07);
      border: 1.5px solid rgba(255,255,255,0.12);
      color: rgba(255,255,255,0.8);
    }
    .drawer-action-pdf:hover {
      border-color: rgba(255,255,255,0.3);
      background: rgba(255,255,255,0.1);
    }

    .drawer-cta { align-self: flex-start; margin-top: 4px; }

    /* Card pointer cursor */
    .portfolio-card[data-project] { cursor: pointer; }

    /* Card hover arrow always visible on mobile */
    @media (max-width: 767px) {
      .portfolio-card-arrow { opacity: 1 !important; }
    }
  `;
  document.head.appendChild(style);

  // GSAP animation guard
  let drawerAnimating = false;
  const drawerPanel = drawer.querySelector('.drawer-panel');
  const drawerBackdrop = drawer.querySelector('.drawer-backdrop');
  const isDesktop = () => window.matchMedia('(min-width: 900px)').matches;

  // Open drawer
  function openDrawer(projectId) {
    const project = PROJECTS.find(p => p.id === projectId);
    if (!project) return;
    if (drawerAnimating) return;
    activeProjectId = projectId;

    // Visual — use screenshot if available, else styled placeholder
    const visualEl = document.getElementById('drawerVisual');
    if (project.image) {
      visualEl.innerHTML = `<img src="${project.image}" alt="${project.title} preview" style="width:100%;height:100%;object-fit:cover;display:block;" />`;
    } else {
      visualEl.innerHTML = project.visual;
    }

    document.getElementById('drawerTitle').textContent = project.title;
    document.getElementById('drawerDesc').textContent = project.description;
    document.getElementById('drawerChallenge').textContent = project.challenge;
    document.getElementById('drawerSolution').textContent = project.solution;

    document.getElementById('drawerMeta').innerHTML = `
      <span class="drawer-meta-pill drawer-meta-category">${project.category === "brand" ? i18nText("portfolio.category.brand", "Brand") : i18nText("portfolio.category.website", "Website")}</span>
      <span class="drawer-meta-pill drawer-meta-location">📍 ${project.location}</span>
      <span class="drawer-meta-pill drawer-meta-year">${project.year}</span>
    `;

    document.getElementById('drawerResults').innerHTML =
      project.results.map(r => `<li>${r}</li>`).join('');

    document.getElementById('drawerTags').innerHTML =
      project.tags.map(t => `<span class="drawer-tag">${t}</span>`).join('');

    // Action buttons — website + brand PDF
    const actionsEl = document.getElementById('drawerActions');
    let actionsHTML = '';
    if (project.websiteUrl) {
      actionsHTML += `<a href="${project.websiteUrl}" target="_blank" rel="noopener" class="drawer-action-btn drawer-action-live">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        ${i18nText("drawer.visitWebsite", "Visit Website")} ↗
      </a>`;
    }
    if (project.brandPdf) {
      actionsHTML += `<a href="${project.brandPdf}" target="_blank" rel="noopener" class="drawer-action-btn drawer-action-pdf">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        ${i18nText("drawer.viewBrandPdf", "View Brand PDF")} ↗
      </a>`;
    }
    actionsEl.innerHTML = actionsHTML;
    actionsEl.style.display = actionsHTML ? 'flex' : 'none';

    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    drawerPanel.scrollTop = 0;

    // GSAP enter animation
    if (typeof gsap !== 'undefined') {
      drawerAnimating = true;
      const desktop = isDesktop();
      gsap.killTweensOf([drawer, drawerPanel]);
      gsap.set(drawer, { opacity: 0 });
      gsap.set(drawerPanel, {
        x: desktop ? '100%' : '0%',
        y: desktop ? '0%' : '100%',
        scale: 0.98, opacity: 0,
      });
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        onComplete() { drawerAnimating = false; },
      });
      tl.to(drawer, { opacity: 1, duration: 0.22 }, 0);
      tl.to(drawerPanel, { x: '0%', y: '0%', scale: 1, opacity: 1, duration: 0.28 }, 0);
    } else {
      drawer.style.opacity = '1';
    }

    setTimeout(() => drawer.querySelector('.drawer-close').focus(), 120);
  }

  // Close drawer
  function closeDrawer() {
    if (drawerAnimating) return;

    if (typeof gsap !== 'undefined') {
      drawerAnimating = true;
      const desktop = isDesktop();
      gsap.killTweensOf([drawer, drawerPanel]);
      const tl = gsap.timeline({
        defaults: { ease: 'power2.in' },
        onComplete() {
          drawer.classList.remove('open');
          document.body.style.overflow = '';
          gsap.set(drawer, { opacity: 0 });
          gsap.set(drawerPanel, { x: '0%', y: '0%', scale: 1, opacity: 1, clearProps: 'transform,opacity' });
          drawerAnimating = false;
        },
      });
      tl.to(drawerPanel, {
        x: desktop ? '100%' : '0%',
        y: desktop ? '0%' : '100%',
        scale: 0.98, opacity: 0, duration: 0.2,
      }, 0);
      tl.to(drawer, { opacity: 0, duration: 0.18 }, 0.02);
    } else {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  drawer.querySelector('.drawer-backdrop').addEventListener('click', closeDrawer);
  drawer.querySelector('.drawer-close').addEventListener('click', closeDrawer);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
  });

  function bindCards() {
    document.querySelectorAll('.portfolio-card[data-project]').forEach(card => {
      if (card.dataset.drawerBound === 'true') return;
      card.dataset.drawerBound = 'true';
      card.addEventListener('click', () => openDrawer(card.dataset.project));
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDrawer(card.dataset.project);
        }
      });
    });
  }

  bindCards();

  document.addEventListener('df:language-changed', () => {
    renderWorkProjects();
    renderHomeFeaturedProjects();
    bindCards();
    if (drawer.classList.contains('open') && activeProjectId) {
      openDrawer(activeProjectId);
    }
  });
}

document.addEventListener('DOMContentLoaded', initProjectDrawer);

/* =============================================
   IN-SITE PDF VIEWER (no download)
   ============================================= */
function openPdfViewer(pdfUrl, title) {
  // Build modal if it doesn't exist yet
  if (!document.getElementById('pdfViewerModal')) {
    const modal = document.createElement('div');
    modal.id = 'pdfViewerModal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Brand Guidelines Viewer');
    modal.innerHTML = `
      <div class="pdf-modal-backdrop"></div>
      <div class="pdf-modal-panel">
        <div class="pdf-modal-header">
          <span class="pdf-modal-title" id="pdfModalTitle"></span>
          <button class="pdf-modal-close" aria-label="Close viewer">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="pdf-modal-body">
          <iframe
            id="pdfFrame"
            title="Brand Guidelines"
            allowfullscreen
            sandbox="allow-same-origin allow-scripts allow-forms"
          ></iframe>
        </div>
      </div>`;
    document.body.appendChild(modal);

    // Inject styles
    const style = document.createElement('style');
    style.textContent = `
      #pdfViewerModal {
        position: fixed; inset: 0; z-index: 3000;
        opacity: 0; pointer-events: none;
        transition: opacity 0.3s ease;
      }
      #pdfViewerModal.open {
        opacity: 1; pointer-events: all;
      }
      .pdf-modal-backdrop {
        position: absolute; inset: 0;
        background: rgba(0,0,0,0.88);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
      }
      .pdf-modal-panel {
        position: absolute;
        inset: 16px;
        background: #111;
        border-radius: 20px;
        border: 1px solid rgba(255,255,255,0.08);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transform: scale(0.96);
        transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        box-shadow: 0 40px 120px rgba(0,0,0,0.6);
      }
      @media (min-width: 900px) {
        .pdf-modal-panel {
          inset: 32px;
          border-radius: 24px;
        }
      }
      #pdfViewerModal.open .pdf-modal-panel {
        transform: scale(1);
      }
      .pdf-modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px;
        border-bottom: 1px solid rgba(255,255,255,0.07);
        flex-shrink: 0;
        gap: 12px;
      }
      .pdf-modal-title {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 0.9rem;
        font-weight: 600;
        color: rgba(255,255,255,0.7);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .pdf-modal-close {
        width: 34px; height: 34px;
        border-radius: 50%;
        background: rgba(255,255,255,0.07);
        border: 1px solid rgba(255,255,255,0.1);
        color: #fff;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; flex-shrink: 0;
        transition: background 0.2s ease, transform 0.2s ease;
      }
      .pdf-modal-close:hover {
        background: #FF5500;
        transform: rotate(90deg);
      }
      .pdf-modal-body {
        flex: 1;
        position: relative;
        overflow: hidden;
        background: #1a1a1a;
      }
      #pdfFrame {
        width: 100%; height: 100%;
        border: none;
        display: block;
        /* Disable context menu / right-click saving */
        -webkit-user-select: none;
        user-select: none;
      }
      /* Transparent overlay blocks right-click on the iframe */
      .pdf-modal-body::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 1;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);

    // Close on backdrop click
    modal.querySelector('.pdf-modal-backdrop').addEventListener('click', closePdfViewer);
    modal.querySelector('.pdf-modal-close').addEventListener('click', closePdfViewer);

    // Close on Escape (but don't close project drawer at same time)
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && document.getElementById('pdfViewerModal').classList.contains('open')) {
        e.stopImmediatePropagation();
        closePdfViewer();
      }
    }, true);

    // Block right-click on the iframe to prevent "Save as"
    modal.addEventListener('contextmenu', e => e.preventDefault());
  }

  // Set title and load PDF
  document.getElementById('pdfModalTitle').textContent = title;

  // Use #toolbar=0&navpanes=0&scrollbar=1 to hide browser PDF download toolbar
  const frame = document.getElementById('pdfFrame');
  frame.src = pdfUrl + '#toolbar=0&navpanes=0&scrollbar=1&view=FitH';

  const modal = document.getElementById('pdfViewerModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  setTimeout(() => modal.querySelector('.pdf-modal-close').focus(), 150);
}

function closePdfViewer() {
  const modal = document.getElementById('pdfViewerModal');
  if (!modal) return;
  modal.classList.remove('open');
  // Small delay before clearing src so close animation plays
  setTimeout(() => {
    document.getElementById('pdfFrame').src = '';
    document.body.style.overflow = '';
  }, 300);
}
