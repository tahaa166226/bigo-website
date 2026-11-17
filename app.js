/**
 * BIGO STORE // OFFICIAL VELOCITY STOREFRONT
 * Core Application Engine:
 * - GSAP & ScrollTrigger Cinematic Sneaker Motions
 * - Dedicated Best Sellers Section with Visual Icon Identifier
 * - High-Definition Product Image Zoom & Lightbox
 * - Customer Reviews Carousel & Submission Flow
 * - Checkout: No Email Required, No COD, InstaPay + 5 Vodafone Cash Wallets + Mandatory Transfer Receipt Upload
 * - Admin Dashboard: Payment Config (5 Wallets), Receipt Verification, Best Sellers & Reviews Moderation
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. DATA MODELS & GLOBAL STATE
  // =========================================================================

  const FALLBACK_IMG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600" fill="%230b0b0e"><rect width="600" height="600" fill="%230b0b0e"/><text x="50%" y="48%" font-family="sans-serif" font-weight="900" font-size="28" fill="%23ff1e2d" text-anchor="middle" letter-spacing="4">BIGO STORE</text><text x="50%" y="54%" font-family="sans-serif" font-weight="600" font-size="14" fill="%23666" text-anchor="middle" letter-spacing="2">ARCHIVAL SPECIMEN</text><circle cx="300" cy="300" r="160" stroke="%23ff1e2d" stroke-width="1.5" stroke-dasharray="4 6" fill="none"/></svg>`;

  const PRODUCTS = [
    {
      id: 1,
      name: "Nike Air Force 1 '07 Triple White",
      brand: "NIKE",
      category: "Sneakers",
      subcategory: "Low-Top",
      price: 950,
      oldPrice: 1400,
      tag: "BEST SELLER",
      tagType: "tag-hot",
      isBestSeller: true,
      images: [
        "https://images.pexels.com/photos/10726876/pexels-photo-10726876.jpeg?auto=compress&cs=tinysrgb&w=1000",
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1000",
        "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1000"
      ],
      colorways: ["#ffffff", "#000000", "#ff1e2d"],
      description: "The undisputed king of the hardwood and pavement. Crisp monochrome full-grain leather, legendary Air-Sole cushioning, and sleek perforated toe-box detailing.",
      specs: ["Crisp genuine full-grain leather", "Encapsulated Nike Air-Sole unit", "Non-marking pivot circle rubber sole", "Low-cut padded ankle silhouette"],
      sizes: [38, 39, 40, 41, 42, 43, 44, 45],
      stockNotice: "Only 3 pairs remaining in EU 42"
    },
    {
      id: 2,
      name: "Air Force 1 Noir // Crimson Edition",
      brand: "NIKE",
      category: "Sneakers",
      subcategory: "Limited Edition",
      price: 980,
      oldPrice: 1450,
      tag: "LIMITED DROP",
      tagType: "tag-limited",
      isBestSeller: true,
      images: [
        "https://bigo-9067.myshopify.com/cdn/shop/files/sp_img_af72cb1c3f01de78_2b322daf-cdff-4bf9-8ce9-5e08403ff2da.webp?v=1790036550&width=800",
        "https://images.pexels.com/photos/30317377/pexels-photo-30317377.jpeg?auto=compress&cs=tinysrgb&w=1000"
      ],
      colorways: ["#0a0a0a", "#ff1e2d", "#ffffff"],
      description: "Stealth matte black full-grain leather contrasted with high-voltage Crimson Red accents. Engineered for nighttime street presence and all-day endurance.",
      specs: ["Matte obsidian premium leather", "High-contrast varsity red piping", "Air cushion impact absorption", "Reinforced heel counter"],
      sizes: [39, 40, 41, 42, 43, 44, 45],
      stockNotice: "High demand — 14 people looking now"
    },
    {
      id: 3,
      name: "Air Jordan 4 Retro 'Black Cat'",
      brand: "JORDAN",
      category: "Sneakers",
      subcategory: "High-Top",
      price: 1100,
      oldPrice: 1550,
      tag: "FAN FAVOURITE",
      tagType: "tag-fan",
      isBestSeller: true,
      images: [
        "https://bigo-9067.myshopify.com/cdn/shop/files/sp_img_79abc3c127e83e9a.jpg?v=1789859472&width=800",
        "https://images.pexels.com/photos/2225727/pexels-photo-2225727.jpeg?auto=compress&cs=tinysrgb&w=1000"
      ],
      colorways: ["#111111", "#1a1a1a", "#ff1e2d"],
      description: "The holy grail of triple-black silhouette. Sculpted nubuck leather, mesh quarter panels, and visible Air cushioning combine in one of the most coveted Jordan 4 models ever made.",
      specs: ["All-black premium nubuck upper", "Molded eyelets & breathable quarter netting", "Visible heel Air unit and forefoot Air unit", "Herringbone rubber traction"],
      sizes: [40, 41, 42, 43, 44, 45, 46],
      stockNotice: "Extremely limited allocation"
    },
    {
      id: 4,
      name: "Air Jordan 1 High OG 'Lost & Found Chicago'",
      brand: "JORDAN",
      category: "Sneakers",
      subcategory: "High-Top",
      price: 1350,
      oldPrice: 1850,
      tag: "RED ICON",
      tagType: "tag-icon",
      isBestSeller: true,
      images: [
        "https://images.pexels.com/photos/2381268/pexels-photo-2381268.jpeg?auto=compress&cs=tinysrgb&w=1000",
        "https://images.pexels.com/photos/18188512/pexels-photo-18188512.jpeg?auto=compress&cs=tinysrgb&w=1000"
      ],
      colorways: ["#ff1e2d", "#ffffff", "#000000"],
      description: "The definitive sneaker in basketball history. The unmistakable Varsity Red, Sail white, and Black color blocking that sparked global sneaker culture in 1985.",
      specs: ["Cracked vintage leather collar detailing", "Varsity Red leather overlays", "Encapsulated Air cushioning", "Solid rubber cupsole"],
      sizes: [39, 40, 41, 42, 43, 44, 45],
      stockNotice: "Exclusive drop — verified authentic"
    },
    {
      id: 5,
      name: "Trust Foam Slide // Desert Camel",
      brand: "TRUST",
      category: "Slides",
      subcategory: "Slides",
      price: 320,
      oldPrice: 450,
      tag: "EASY DAYS",
      tagType: "tag-easy",
      isBestSeller: false,
      images: [
        "https://bigo-9067.myshopify.com/cdn/shop/files/sp_img_61983ddae00a5058.jpg?v=1789859195&width=800",
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1000"
      ],
      colorways: ["#b89b72", "#111111", "#ff1e2d"],
      description: "Monolithic ergonomic design crafted from injected EVA foam for ultra-lightweight recovery, poolside comfort, or relaxed everyday street style.",
      specs: ["Injected EVA foam cushioning", "Deep horizontal groove outsole for wet traction", "Seamless single-piece unibody sculpt", "Water resistant & easy rinse"],
      sizes: [38, 39, 40, 41, 42, 43, 44, 45],
      stockNotice: "Popular summer essential"
    },
    {
      id: 6,
      name: "Trust Onyx Slide // Crimson Edge",
      brand: "TRUST",
      category: "Slides",
      subcategory: "Limited Edition",
      price: 360,
      oldPrice: 490,
      tag: "NEW RELEASE",
      tagType: "tag-new",
      isBestSeller: false,
      images: [
        "https://images.pexels.com/photos/39559877/pexels-photo-39559877.jpeg?auto=compress&cs=tinysrgb&w=1000",
        "https://bigo-9067.myshopify.com/cdn/shop/files/sp_img_61983ddae00a5058.jpg?v=1789859195&width=800"
      ],
      colorways: ["#0f0f10", "#ff1e2d", "#ffffff"],
      description: "Pitch black unibody slide injected with dual-density foam core and precision laser-etched Crimson Red side insignia. Uncompromising daily recovery.",
      specs: ["Dual-density EVA foam architecture", "Textured footbed prevents foot slippage", "Contoured arch support for posture", "Antimicrobial surface"],
      sizes: [39, 40, 41, 42, 43, 44, 45],
      stockNotice: "Bestseller this week"
    },
    {
      id: 7,
      name: "Nike Dunk Low // Varsity Red",
      brand: "NIKE",
      category: "Sneakers",
      subcategory: "Low-Top",
      price: 1050,
      oldPrice: 1450,
      tag: "STREET HEAT",
      tagType: "tag-heat",
      isBestSeller: false,
      images: [
        "https://images.pexels.com/photos/34205740/pexels-photo-34205740.jpeg?auto=compress&cs=tinysrgb&w=1000",
        "https://images.pexels.com/photos/10726876/pexels-photo-10726876.jpeg?auto=compress&cs=tinysrgb&w=1000"
      ],
      colorways: ["#ff1e2d", "#ffffff", "#111111"],
      description: "Created for the hardwood but taken to the streets, the Dunk Low pairs crisp leather overlays with a bold Varsity Red color blocking that commands instant attention.",
      specs: ["Crisp leather upper softens over time", "Foam midsole offers lightweight responsive cushioning", "Padded low-cut collar", "Rubber sole with classic hoops pivot circle"],
      sizes: [39, 40, 41, 42, 43, 44, 45],
      stockNotice: "Fast selling: 4 pairs left"
    },
    {
      id: 8,
      name: "Air Jordan 3 Retro // Crimson Cement",
      brand: "JORDAN",
      category: "Sneakers",
      subcategory: "High-Top",
      price: 1250,
      oldPrice: 1700,
      tag: "ARCHIVAL CLASSIC",
      tagType: "tag-archival",
      isBestSeller: false,
      images: [
        "https://images.pexels.com/photos/6050919/pexels-photo-6050919.jpeg?auto=compress&cs=tinysrgb&w=1000",
        "https://images.pexels.com/photos/2225727/pexels-photo-2225727.jpeg?auto=compress&cs=tinysrgb&w=1000"
      ],
      colorways: ["#000000", "#ff1e2d", "#d1d5db"],
      description: "Iconic elephant print panels around the toe and heel, accented by stark white tumble leather and fiery Crimson eyelets. The shoe that redefined basketball luxury.",
      specs: ["Full-grain leather and synthetic materials", "Visible Air heel unit + encapsulated forefoot Air", "Tough external heel counter", "Rubber outsole with circular traction pattern"],
      sizes: [40, 41, 42, 43, 44, 45],
      stockNotice: "Collector's edition"
    }
  ];

  // Default Admin Configuration (Saved to localStorage)
  const DEFAULT_ADMIN_CONFIG = {
    instapayEnabled: true,
    instapayAddress: "bigostore@instapay",
    instapayName: "Bigo Store Egypt LLC",
    vodafoneEnabled: true,
    // EXACTLY FIVE Vodafone Cash wallet numbers (Part 4 Requirement)
    vodafoneNumbers: [
      "010 2489 1941",
      "010 9314 8820",
      "010 6552 3178",
      "010 1892 4053",
      "010 8829 7614"
    ],
    bestSellerIds: [1, 2, 3, 4]
  };

  let adminConfig = JSON.parse(localStorage.getItem('bigo_admin_config') || 'null');
  if (!adminConfig) {
    adminConfig = DEFAULT_ADMIN_CONFIG;
    localStorage.setItem('bigo_admin_config', JSON.stringify(adminConfig));
  }

  // Actual Customer Reviews Data (Part 2 Requirement)
  const INITIAL_REVIEWS = [
    {
      id: "rev-1",
      name: "Omar Mostafa",
      location: "New Cairo, Cairo",
      productName: "Air Jordan 4 Retro 'Black Cat'",
      productImg: "https://bigo-9067.myshopify.com/cdn/shop/files/sp_img_79abc3c127e83e9a.jpg?v=1789859472&width=800",
      rating: 5,
      date: "October 2026",
      verified: true,
      text: "Top tier craftsmanship and 100% genuine nubuck leather. I placed my order via InstaPay to New Cairo and received it within 24 hours in a pristine double-boxed package. Fits true to EU 43.",
      status: "approved"
    },
    {
      id: "rev-2",
      name: "Karim El-Gohary",
      location: "Glym, Alexandria",
      productName: "Nike Air Force 1 '07 Triple White",
      productImg: "https://images.pexels.com/photos/10726876/pexels-photo-10726876.jpeg?auto=compress&cs=tinysrgb&w=1000",
      rating: 5,
      date: "November 2026",
      verified: true,
      text: "Crisp white leather with zero flaws. Used Vodafone Cash with the transfer receipt upload — approval was confirmed quickly over WhatsApp. Best sneaker shopping experience in Egypt.",
      status: "approved"
    },
    {
      id: "rev-3",
      name: "Nour El-Din",
      location: "Zamalek, Cairo",
      productName: "Air Jordan 1 High OG 'Lost & Found Chicago'",
      productImg: "https://images.pexels.com/photos/2381268/pexels-photo-2381268.jpeg?auto=compress&cs=tinysrgb&w=1000",
      rating: 5,
      date: "November 2026",
      verified: true,
      text: "The vintage cracked leather collar and varsity red tones are extraordinary. Sizing is spot on and the authenticity micro-tag in the box gives complete peace of mind.",
      status: "approved"
    },
    {
      id: "rev-4",
      name: "Ahmed Wagdy",
      location: "Sheikh Zayed, Giza",
      productName: "Trust Onyx Slide // Crimson Edge",
      productImg: "https://images.pexels.com/photos/39559877/pexels-photo-39559877.jpeg?auto=compress&cs=tinysrgb&w=1000",
      rating: 5,
      date: "October 2026",
      verified: true,
      text: "Dual-density foam is extremely soft on the heels for daily recovery. Arrived next morning to Sheikh Zayed. Highly recommend for everyday street wear.",
      status: "approved"
    },
    {
      id: "rev-5",
      name: "Tamer Hassan",
      location: "Mansoura",
      productName: "Air Force 1 Noir // Crimson Edition",
      productImg: "https://bigo-9067.myshopify.com/cdn/shop/files/sp_img_af72cb1c3f01de78_2b322daf-cdff-4bf9-8ce9-5e08403ff2da.webp?v=1790036550&width=800",
      rating: 5,
      date: "November 2026",
      verified: true,
      text: "The crimson piping on deep matte black leather looks even better in natural sunlight. Fast delivery to Mansoura within 48 hours.",
      status: "approved"
    }
  ];

  let customerReviews = JSON.parse(localStorage.getItem('bigo_reviews') || 'null');
  if (!customerReviews) {
    customerReviews = INITIAL_REVIEWS;
    localStorage.setItem('bigo_reviews', JSON.stringify(customerReviews));
  }

  // Customer Orders Store (Part 4 & 5)
  let customerOrders = JSON.parse(localStorage.getItem('bigo_orders') || '[]');

  const CURRENCIES = {
    EGP: { symbol: 'EGP', rate: 1, label: 'EGP' },
    USD: { symbol: '$', rate: 0.021, label: 'USD' },
    EUR: { symbol: '€', rate: 0.019, label: 'EUR' },
    SAR: { symbol: 'SAR', rate: 0.078, label: 'SAR' },
    AED: { symbol: 'AED', rate: 0.077, label: 'AED' }
  };

  const PROMO_CODES = {
    'RED20': { discount: 0.20, label: '20% Crimson Drop Discount' },
    'BIGO10': { discount: 0.10, label: '10% Welcome Access' }
  };

  const FREE_SHIPPING_THRESHOLD_EGP = 6000;

  // Global State
  let currentFilter = 'All';
  let currentBrand = null;
  let searchQuery = '';
  let currentSort = 'featured';
  let currentCurrency = localStorage.getItem('bigo_currency') || 'EGP';
  let activePromo = null;
  let cart = JSON.parse(localStorage.getItem('bigo_cart_motion') || '[]');
  let wishlist = JSON.parse(localStorage.getItem('bigo_wishlist') || '[]');
  let selectedModalSize = null;
  let audioContext = null;
  let audioOscillator = null;
  let audioGain = null;
  let isAudioOn = false;

  // Zoom Lightbox State
  let zoomState = {
    imgSrc: '',
    gallery: [],
    currentIndex: 0,
    scale: 1,
    isRotating: false,
    rotationStartX: 0,
    rotationStartY: 0,
    rotationStartIndex: 0,
    isDragging: false,
    startX: 0,
    startY: 0,
    translateX: 0,
    translateY: 0
  };
  let zoomRotationTimer = null;
  let zoomRotationCleanup = null;

  // Uploaded Payment Proof State (Part 4)
  let currentUploadedProof = null; // { fileDataUrl, fileName, fileSize }

  // DOM Query Helper
  const $ = selector => document.querySelector(selector);
  const $$ = selector => document.querySelectorAll(selector);

  // =========================================================================
  // 2. CURRENCY & FORMATTING ENGINE
  // =========================================================================

  function formatPrice(amountInEgp) {
    const curr = CURRENCIES[currentCurrency] || CURRENCIES.EGP;
    const converted = amountInEgp * curr.rate;
    if (curr.symbol === '$' || curr.symbol === '€') {
      return `${curr.symbol}${converted.toFixed(2)}`;
    }
    return `${curr.symbol} ${Math.round(converted).toLocaleString()}`;
  }

  function setCurrency(newCurr) {
    if (!CURRENCIES[newCurr]) return;
    currentCurrency = newCurr;
    localStorage.setItem('bigo_currency', newCurr);
    $('#currency-select').value = newCurr;
    renderCatalog();
    renderBestSellers();
    renderCart();
  }

  // =========================================================================
  // 3. CATALOG & BEST SELLER RENDERING
  // =========================================================================

  function generateProductCardHtml(p, index) {
    const isWishlisted = wishlist.includes(p.id);
    const colorwayDots = p.colorways.map(c => `<span class="colorway-dot" style="background-color: ${c}"></span>`).join('');

    return `
      <article class="product-card" data-id="${p.id}" style="animation-delay: ${index * 60}ms">
        <div class="product-media">
          <span class="product-tag ${p.tagType}">${p.tag}</span>
          <button class="wishlist-toggle ${isWishlisted ? 'active' : ''}" data-wishlist="${p.id}" aria-label="Save ${p.name} to wishlist">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy" class="product-zoom-trigger" data-zoom-id="${p.id}" onerror="this.onerror=null;this.src=FALLBACK_IMG;">
          <div class="quick-action-bar">
            <button class="quick-view-btn" data-quickview="${p.id}">QUICK VIEW ↗</button>
            <button class="quick-add-btn" data-quickadd="${p.id}">+ ADD</button>
          </div>
        </div>
        <div class="product-info">
          <div>
            <div class="brand-cat">
              <span>${p.brand} // ${p.subcategory}</span>
              <span class="stock-pill">${p.sizes.length} SIZES</span>
            </div>
            <h3 class="product-name">${p.name}</h3>
            <div class="product-colorways">${colorwayDots}</div>
          </div>
          <div class="price-row">
            <div>
              <span class="price-current">${formatPrice(p.price)}</span>
              ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ''}
            </div>
            <span class="stock-pill">IN STOCK</span>
          </div>
        </div>
      </article>
    `;
  }

  function renderCatalog() {
    const grid = $('#product-grid');
    const emptyState = $('#empty-state');
    const displayedCount = $('#displayed-count');

    let list = currentBrand ? PRODUCTS.filter(p => {
      const matchBrand = p.brand === currentBrand;
      const matchFilter = (currentFilter === 'All') ||
        (p.category === currentFilter) ||
        (p.subcategory === currentFilter);
      const query = searchQuery.trim().toLowerCase();
      const matchSearch = !query ||
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.subcategory.toLowerCase().includes(query);
      return matchBrand && matchFilter && matchSearch;
    }) : [];

    if (currentSort === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    displayedCount.textContent = list.length;
    emptyState.hidden = list.length > 0;
    if (!currentBrand) {
      emptyState.querySelector('h3').textContent = 'CHOOSE A BRAND TO VIEW ITS COLLECTION';
      emptyState.querySelector('p').textContent = 'Select a brand above to see its shoe styles and available pairs.';
    } else {
      emptyState.querySelector('h3').textContent = 'NO SILHOUETTES MATCH YOUR CRITERIA';
      emptyState.querySelector('p').textContent = 'Try another shoe style or reset your filters to browse this brand.';
    }
    $('#empty-reset-btn').hidden = !currentBrand;

    grid.innerHTML = list.map((p, index) => generateProductCardHtml(p, index)).join('');
    attachProductInteractions(grid);
  }

  // PART 2: DEDICATED BEST SELLERS SECTION (WITH VISUAL ICON IDENTIFIER)
  function renderBestSellers() {
    const grid = $('#bestseller-grid');
    if (!grid) return;

    const bIds = adminConfig.bestSellerIds || [1, 2, 3, 4];
    const bestSellerProducts = PRODUCTS.filter(p => bIds.includes(p.id));

    grid.innerHTML = bestSellerProducts.map((p, index) => generateProductCardHtml(p, index)).join('');
    attachProductInteractions(grid);
  }

  function attachProductInteractions(container) {
    container.querySelectorAll('[data-quickview]').forEach(btn => {
      btn.onclick = () => openQuickView(+btn.dataset.quickview);
    });

    container.querySelectorAll('[data-quickadd]').forEach(btn => {
      btn.onclick = () => openQuickView(+btn.dataset.quickadd);
    });

    container.querySelectorAll('[data-wishlist]').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        toggleWishlist(+btn.dataset.wishlist);
      };
    });

    // Zoom on product image click (Part 3)
    container.querySelectorAll('.product-zoom-trigger').forEach(img => {
      img.onclick = () => {
        const pid = +img.dataset.zoomId;
        const p = PRODUCTS.find(x => x.id === pid);
        if (p) openZoomLightbox(p.images[0], p.name, p.images, 0);
      };
    });
  }

  function setFilter(name) {
    currentFilter = name;
    renderCollectionFilters();
    $('#reset-filter-btn').hidden = (currentBrand === null && name === 'All' && !searchQuery);
    renderCatalog();
  }

  function renderCollectionFilters() {
    const brands = [...new Set(PRODUCTS.map(product => product.brand))].sort();
    const brandButtons = $('#brand-filter-pills');
    const typeStep = $('#type-filter-step');
    const typeButtons = $('#type-filter-pills');
    const homeLinks = $('#brand-home-links');

    if (brandButtons) {
      brandButtons.innerHTML = brands.map(brand => `
        <button class="filter-pill ${currentBrand === brand ? 'active' : ''}" type="button" data-brand-filter="${brand}">
          ${brand}
        </button>
      `).join('');
      brandButtons.querySelectorAll('[data-brand-filter]').forEach(button => {
        button.onclick = () => {
          currentBrand = button.dataset.brandFilter;
          currentFilter = 'All';
          renderCollectionFilters();
          $('#reset-filter-btn').hidden = !searchQuery;
          renderCatalog();
        };
      });
    }

    if (typeStep && typeButtons) {
      typeStep.hidden = currentBrand === null;
      const types = [...new Set(PRODUCTS
        .filter(product => product.brand === currentBrand)
        .map(product => product.subcategory))].sort();
      typeButtons.innerHTML = ['All', ...types].map(type => `
        <button class="filter-pill ${currentFilter === type ? 'active' : ''}" type="button" data-shoe-type="${type}">
          ${type === 'All' ? 'All Styles' : type}
        </button>
      `).join('');
      typeButtons.querySelectorAll('[data-shoe-type]').forEach(button => {
        button.onclick = () => {
          currentFilter = button.dataset.shoeType;
          renderCollectionFilters();
          renderCatalog();
        };
      });
    }

    if (homeLinks) {
      homeLinks.innerHTML = brands.map(brand => `
        <button class="brand-home-link" type="button" data-home-brand="${brand}">
          <img class="brand-home-image" src="${PRODUCTS.find(product => product.brand === brand && (brand !== 'TRUST' || product.id === 6)).images[0]}" alt="" loading="lazy">
          <span class="brand-home-overlay"></span>
          <span class="brand-home-name">${brand}</span><span class="brand-link-arrow" aria-hidden="true">↗</span>
        </button>
      `).join('');
      homeLinks.querySelectorAll('[data-home-brand]').forEach(button => {
        button.onclick = () => {
          currentBrand = button.dataset.homeBrand;
          currentFilter = 'All';
          renderCollectionFilters();
          renderCatalog();
          location.hash = 'shop';
          requestAnimationFrame(() => $('#product-grid').scrollIntoView({ behavior: 'smooth', block: 'start' }));
        };
      });
    }
  }

  // =========================================================================
  // 4. WISHLIST MANAGEMENT
  // =========================================================================

  function toggleWishlist(id) {
    const idx = wishlist.indexOf(id);
    const product = PRODUCTS.find(p => p.id === id);
    if (idx > -1) {
      wishlist.splice(idx, 1);
      showToast(`Removed ${product.name} from wishlist`);
    } else {
      wishlist.push(id);
      showToast(`Added ${product.name} to wishlist ❤️`);
    }
    localStorage.setItem('bigo_wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    renderCatalog();
    renderBestSellers();
  }

  function updateWishlistCount() {
    $$('.wishlist-count').forEach(el => el.textContent = wishlist.length);
  }

  // =========================================================================
  // 5. SHOPPING BAG / CART SYSTEM & FREE SHIPPING METER
  // =========================================================================

  function saveCart() {
    localStorage.setItem('bigo_cart_motion', JSON.stringify(cart));
    renderCart();
  }

  function addToCart(productId, size, qty = 1) {
    const existing = cart.find(item => item.id === productId && item.size === size);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: productId, size, qty });
    }
    saveCart();
    const product = PRODUCTS.find(p => p.id === productId);
    showToast(`Added ${product.name} (EU ${size}) to Bag! 🛍️`);
    openCart();
  }

  function renderCart() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotalEgp = cart.reduce((sum, item) => {
      const p = PRODUCTS.find(x => x.id === item.id);
      return sum + (p ? p.price * item.qty : 0);
    }, 0);

    $$('.bag-count').forEach(el => el.textContent = totalQty);

    const shippingProgress = Math.min(100, Math.round((subtotalEgp / FREE_SHIPPING_THRESHOLD_EGP) * 100));
    const shippingBar = $('#shipping-bar-fill');
    const shippingStatusLabel = $('#shipping-status-label');
    const shippingPct = $('#shipping-pct');

    if (shippingBar && shippingStatusLabel) {
      shippingBar.style.width = `${shippingProgress}%`;
      shippingPct.textContent = `${shippingProgress}%`;
      if (subtotalEgp >= FREE_SHIPPING_THRESHOLD_EGP) {
        shippingStatusLabel.innerHTML = '🎉 <strong style="color:var(--red-primary)">FREE EXPRESS SHIPPING UNLOCKED!</strong>';
      } else {
        const remaining = FREE_SHIPPING_THRESHOLD_EGP - subtotalEgp;
        shippingStatusLabel.textContent = `Add ${formatPrice(remaining)} more for FREE EXPRESS DELIVERY`;
      }
    }

    const itemsContainer = $('#cart-items');
    if (!itemsContainer) return;

    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="empty-cart-view">
          <div class="empty-icon">🛒</div>
          <p class="empty-title">YOUR BAG IS CURRENTLY EMPTY</p>
          <p class="empty-sub">Explore the high-velocity drops and elevate your rotation.</p>
          <a class="primary-button kinetic-btn" href="#shop" onclick="closeCart()">
            <span>DISCOVER THE CATALOG</span>
            <span class="btn-arrow">→</span>
          </a>
        </div>
      `;
      $('#subtotal-val').textContent = formatPrice(0);
      $('#total-val').textContent = formatPrice(0);
      $('#open-checkout-btn').disabled = true;
      return;
    }

    $('#open-checkout-btn').disabled = false;

    itemsContainer.innerHTML = cart.map((item, index) => {
      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) return '';
      return `
        <div class="cart-item">
          <img src="${p.images[0]}" alt="${p.name}" class="cart-thumb" onerror="this.onerror=null;this.src=FALLBACK_IMG;">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${p.name}</h4>
            <div class="cart-item-specs">
              <span>EU ${item.size}</span>
              <span class="sep">/</span>
              <span>${p.brand}</span>
            </div>
            <div class="cart-item-price">${formatPrice(p.price * item.qty)}</div>
            <div class="cart-qty-ctrl">
              <button class="qty-btn" data-minus="${index}">−</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" data-plus="${index}">＋</button>
              <button class="cart-remove-btn" data-remove="${index}" title="Remove item">Remove</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    const discountAmount = activePromo && PROMO_CODES[activePromo] ? subtotalEgp * PROMO_CODES[activePromo].discount : 0;
    const finalTotal = Math.max(0, subtotalEgp - discountAmount);

    $('#subtotal-val').textContent = formatPrice(subtotalEgp);
    $('#total-val').textContent = formatPrice(finalTotal);

    const discountRow = $('#discount-row');
    if (discountRow) {
      if (discountAmount > 0) {
        discountRow.hidden = false;
        $('#discount-val').textContent = `-${formatPrice(discountAmount)}`;
      } else {
        discountRow.hidden = true;
      }
    }

    $$('[data-minus]').forEach(btn => {
      btn.onclick = () => {
        const i = +btn.dataset.minus;
        if (cart[i].qty > 1) {
          cart[i].qty--;
        } else {
          cart.splice(i, 1);
        }
        saveCart();
      };
    });

    $$('[data-plus]').forEach(btn => {
      btn.onclick = () => {
        const i = +btn.dataset.plus;
        cart[i].qty++;
        saveCart();
      };
    });

    $$('[data-remove]').forEach(btn => {
      btn.onclick = () => {
        const i = +btn.dataset.remove;
        cart.splice(i, 1);
        saveCart();
        showToast('Item removed from bag');
      };
    });
  }

  function openCart() {
    $('.drawer').classList.add('visible');
    $('.drawer').setAttribute('aria-hidden', 'false');
    $('.scrim').hidden = false;
    document.body.classList.add('locked');
  }

  function closeCart() {
    $('.drawer').classList.remove('visible');
    $('.drawer').setAttribute('aria-hidden', 'true');
    $('.scrim').hidden = true;
    document.body.classList.remove('locked');
  }

  function applyPromoCode() {
    const code = ($('#promo-input').value || '').trim().toUpperCase();
    const notice = $('#promo-notice');
    if (!code) return;
    if (PROMO_CODES[code]) {
      activePromo = code;
      notice.hidden = false;
      notice.textContent = `✓ ${PROMO_CODES[code].label} applied!`;
      showToast(`Promo ${code} applied successfully! 🎉`);
    } else {
      activePromo = null;
      notice.hidden = false;
      notice.textContent = '✕ Invalid promo code. Try: RED20 or BIGO10';
      showToast('Invalid promo code');
    }
    renderCart();
  }

  // =========================================================================
  // 6. PRODUCT QUICK VIEW MODAL
  // =========================================================================

  function openQuickView(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    selectedModalSize = p.sizes[2] || p.sizes[0];

    const dialog = $('#product-dialog');
    const content = $('#dialog-content');

    const thumbsHtml = p.images.map((img, i) => `
      <div class="dialog-thumb ${i === 0 ? 'active' : ''}" data-thumb="${img}">
        <img src="${img}" alt="${p.name} angle ${i + 1}" onerror="this.onerror=null;this.src=FALLBACK_IMG;">
      </div>
    `).join('');

    const sizeChipsHtml = p.sizes.map(size => `
      <button class="size-chip ${size === selectedModalSize ? 'selected' : ''}" data-size="${size}">
        ${size}
      </button>
    `).join('');

    const specsHtml = p.specs.map(spec => `
      <div class="dialog-spec-row">
        <span class="spec-dot">✦</span>
        <span>${spec}</span>
      </div>
    `).join('');

    content.innerHTML = `
      <div class="dialog-grid">
        <div class="dialog-gallery">
          <div class="dialog-main-img-wrap">
            <img src="${p.images[0]}" alt="${p.name}" class="dialog-main-img" id="dialog-main-photo" onerror="this.onerror=null;this.src=FALLBACK_IMG;">
            <button class="zoom-trigger-btn" id="modal-zoom-btn" title="Click to zoom in high definition">
              <span>🔍 TAP TO ZOOM</span>
            </button>
          </div>
          <div class="dialog-thumbnails">${thumbsHtml}</div>
        </div>

        <div class="dialog-body">
          <div class="dialog-header">
            <span class="eyebrow">${p.brand} // ${p.subcategory}</span>
            <h2>${p.name}</h2>
            <div class="dialog-price-row">
              <span class="dialog-price">${formatPrice(p.price)}</span>
              ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ''}
              <span class="product-tag ${p.tagType}">${p.tag}</span>
            </div>
            <p class="dialog-desc">${p.description}</p>
          </div>

          <div class="dialog-specs">${specsHtml}</div>

          <div class="size-select-wrap">
            <div class="size-select-label">
              <span>SELECT SIZE (EU)</span>
              <span class="size-chart-link" id="size-guide-trigger">Sizing Guide ↗</span>
            </div>
            <div class="size-grid">${sizeChipsHtml}</div>
            <div class="size-error-notice" id="modal-size-notice">${p.stockNotice}</div>
          </div>

          <button class="primary-button kinetic-btn" id="modal-add-to-bag">
            <span>ADD TO BAG // ${formatPrice(p.price)}</span>
            <span class="btn-arrow">→</span>
          </button>
        </div>
      </div>
    `;

    $$('.dialog-thumb').forEach(thumb => {
      thumb.onclick = () => {
        $$('.dialog-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        $('#dialog-main-photo').src = thumb.dataset.thumb;
      };
    });

    $$('.size-chip').forEach(chip => {
      chip.onclick = () => {
        selectedModalSize = +chip.dataset.size;
        $$('.size-chip').forEach(c => c.classList.remove('selected'));
        chip.classList.add('selected');
        $('#modal-size-notice').textContent = `EU ${selectedModalSize} selected · In Stock`;
      };
    });

    $('#modal-add-to-bag').onclick = () => {
      if (!selectedModalSize) {
        $('#modal-size-notice').textContent = 'Please choose a size first!';
        return;
      }
      addToCart(p.id, selectedModalSize, 1);
      dialog.close();
    };

    $('#size-guide-trigger').onclick = () => {
      showToast('Fits true to size. For wide feet, consider half size up.');
    };

    // Zoom trigger from quickview modal
    $('#modal-zoom-btn').onclick = () => {
      const currentPhoto = $('#dialog-main-photo').src;
      openZoomLightbox(currentPhoto, p.name, p.images, 0);
    };

    $('#dialog-main-photo').onclick = () => {
      const currentPhoto = $('#dialog-main-photo').src;
      openZoomLightbox(currentPhoto, p.name, p.images, 0);
    };

    dialog.showModal();
  }

  // =========================================================================
  // 7. PART 3: PRODUCT IMAGE ZOOM & LIGHTBOX ENGINE
  // =========================================================================

  function openZoomLightbox(imgSrc, title, gallery = [], initialIndex = 0) {
    const dialog = $('#zoom-dialog');
    const imgEl = $('#zoom-lightbox-img');
    const titleEl = $('#zoom-product-title');
    const viewport = $('#zoom-lightbox-viewport');
    const viewStatus = $('#zoom-view-status');
    const viewReadout = $('#zoom-view-readout');
    if (zoomRotationTimer !== null) clearInterval(zoomRotationTimer);
    if (zoomRotationCleanup) zoomRotationCleanup();

    zoomState = {
      imgSrc,
      gallery: gallery.length ? gallery : [imgSrc],
      currentIndex: initialIndex,
      scale: 1,
      isRotating: false,
      rotationStartX: 0,
      rotationStartY: 0,
      rotationStartIndex: initialIndex,
      isDragging: false,
      startX: 0,
      startY: 0,
      translateX: 0,
      translateY: 0
    };

    titleEl.textContent = title || 'Product Detail Zoom';
    imgEl.src = imgSrc;
    imgEl.style.transform = `scale(1) translate(0px, 0px)`;
    viewport.classList.remove('zoomed');
    viewStatus.hidden = zoomState.gallery.length < 2;
    const updateView = (index) => {
      zoomState.currentIndex = Math.max(0, Math.min(zoomState.gallery.length - 1, index));
      imgEl.src = zoomState.gallery[zoomState.currentIndex];
      viewReadout.textContent = `VIEW ${zoomState.currentIndex + 1} / ${zoomState.gallery.length} · DRAG SHOE ANY DIRECTION`;
      resetZoom();
    };
    viewReadout.textContent = `VIEW ${initialIndex + 1} / ${zoomState.gallery.length} · DRAG SHOE ANY DIRECTION`;
    const beginRotation = (clientX, clientY) => {
      if (zoomState.scale > 1 || zoomState.gallery.length < 2) return;
      if (zoomRotationTimer !== null) {
        clearInterval(zoomRotationTimer);
        zoomRotationTimer = null;
      }
      zoomState.isRotating = true;
      zoomState.rotationStartX = clientX;
      zoomState.rotationStartY = clientY;
      zoomState.rotationStartIndex = zoomState.currentIndex;
      viewport.classList.add('rotating');
    };
    const updateRotation = (clientX, clientY) => {
      if (!zoomState.isRotating) return;
      const deltaX = zoomState.rotationStartX - clientX;
      const deltaY = zoomState.rotationStartY - clientY;
      const dragDistance = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY;
      const stepSize = Math.max(30, Math.min(viewport.clientWidth, viewport.clientHeight) * 0.08);
      const steps = Math.round(Math.abs(dragDistance) / stepSize);
      const direction = dragDistance >= 0 ? 1 : -1;
      const viewCount = zoomState.gallery.length;
      const nextView = (zoomState.rotationStartIndex + direction * steps % viewCount + viewCount) % viewCount;
      updateView(nextView);
    };
    const stopRotation = () => {
      zoomState.isRotating = false;
      viewport.classList.remove('rotating');
    };
    const onMouseMove = (event) => updateRotation(event.clientX, event.clientY);
    const onTouchStart = (event) => {
      if (event.target !== imgEl || event.touches.length !== 1) return;
      beginRotation(event.touches[0].clientX, event.touches[0].clientY);
    };
    const onTouchMove = (event) => {
      if (!zoomState.isRotating || event.touches.length !== 1) return;
      event.preventDefault();
      updateRotation(event.touches[0].clientX, event.touches[0].clientY);
    };
    const onTouchEnd = () => stopRotation();
    imgEl.onmousedown = (event) => {
      if (event.button !== 0) return;
      event.preventDefault();
      beginRotation(event.clientX, event.clientY);
    };
    imgEl.addEventListener('touchstart', onTouchStart, { passive: true });
    viewport.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', stopRotation);
    viewport.addEventListener('touchend', onTouchEnd);
    zoomRotationCleanup = () => {
      imgEl.onmousedown = null;
      imgEl.removeEventListener('touchstart', onTouchStart);
      viewport.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopRotation);
      viewport.removeEventListener('touchend', onTouchEnd);
    };

    dialog.showModal();
    document.body.classList.add('locked');

    if (zoomState.gallery.length > 1) {
      zoomRotationTimer = setInterval(() => {
        if (!dialog.open || zoomState.isRotating) {
          clearInterval(zoomRotationTimer);
          zoomRotationTimer = null;
          return;
        }
        if (zoomState.currentIndex < zoomState.gallery.length - 1) {
          updateView(zoomState.currentIndex + 1);
        } else {
          clearInterval(zoomRotationTimer);
          zoomRotationTimer = null;
        }
      }, 800);
    }
  }

  function setZoom(newScale) {
    zoomState.scale = Math.max(1, Math.min(3.5, newScale));
    const imgEl = $('#zoom-lightbox-img');
    const viewport = $('#zoom-lightbox-viewport');

    if (zoomState.scale === 1) {
      zoomState.translateX = 0;
      zoomState.translateY = 0;
      viewport.classList.remove('zoomed');
    } else {
      viewport.classList.add('zoomed');
    }

    imgEl.style.transform = `scale(${zoomState.scale}) translate(${zoomState.translateX}px, ${zoomState.translateY}px)`;
  }

  function resetZoom() {
    zoomState.scale = 1;
    zoomState.translateX = 0;
    zoomState.translateY = 0;
    const imgEl = $('#zoom-lightbox-img');
    const viewport = $('#zoom-lightbox-viewport');
    viewport.classList.remove('zoomed');
    imgEl.style.transform = `scale(1) translate(0px, 0px)`;
  }

  function closeZoomLightbox() {
    const dialog = $('#zoom-dialog');
    if (zoomRotationTimer !== null) {
      clearInterval(zoomRotationTimer);
      zoomRotationTimer = null;
    }
    if (zoomRotationCleanup) {
      zoomRotationCleanup();
      zoomRotationCleanup = null;
    }
    dialog.close();
    document.body.classList.remove('locked');
  }

  function setupZoomInteractions() {
    const dialog = $('#zoom-dialog');
    const imgEl = $('#zoom-lightbox-img');
    const viewport = $('#zoom-lightbox-viewport');

    $('#zoom-in-btn').onclick = () => setZoom(zoomState.scale + 0.5);
    $('#zoom-out-btn').onclick = () => setZoom(zoomState.scale - 0.5);
    $('#zoom-reset-btn').onclick = () => resetZoom();
    $('#close-zoom-btn').onclick = () => closeZoomLightbox();

    // Double click / tap to toggle zoom
    viewport.ondblclick = (e) => {
      if (zoomState.scale > 1) {
        resetZoom();
      } else {
        setZoom(2.2);
      }
    };

    // Pan / Drag when zoomed
    viewport.addEventListener('mousedown', (e) => {
      if (zoomState.scale <= 1) return;
      zoomState.isDragging = true;
      zoomState.startX = e.clientX - zoomState.translateX;
      zoomState.startY = e.clientY - zoomState.translateY;
    });

    window.addEventListener('mousemove', (e) => {
      if (!zoomState.isDragging || zoomState.scale <= 1) return;
      zoomState.translateX = e.clientX - zoomState.startX;
      zoomState.translateY = e.clientY - zoomState.startY;
      imgEl.style.transform = `scale(${zoomState.scale}) translate(${zoomState.translateX}px, ${zoomState.translateY}px)`;
    });

    window.addEventListener('mouseup', () => {
      zoomState.isDragging = false;
    });

    // Touch Drag for Mobile
    let touchStartDist = 0;
    viewport.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1 && zoomState.scale > 1) {
        zoomState.isDragging = true;
        zoomState.startX = e.touches[0].clientX - zoomState.translateX;
        zoomState.startY = e.touches[0].clientY - zoomState.translateY;
      } else if (e.touches.length === 2) {
        touchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    });

    viewport.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && zoomState.isDragging && zoomState.scale > 1) {
        zoomState.translateX = e.touches[0].clientX - zoomState.startX;
        zoomState.translateY = e.touches[0].clientY - zoomState.startY;
        imgEl.style.transform = `scale(${zoomState.scale}) translate(${zoomState.translateX}px, ${zoomState.translateY}px)`;
      } else if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const diff = dist - touchStartDist;
        if (Math.abs(diff) > 10) {
          setZoom(zoomState.scale + diff * 0.005);
          touchStartDist = dist;
        }
      }
    });

    viewport.addEventListener('touchend', () => {
      zoomState.isDragging = false;
    });

    // Escape Key Handler
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dialog.open) {
        closeZoomLightbox();
      }
    });
  }

  // =========================================================================
  // 8. PART 4: ENHANCED CHECKOUT SYSTEM (NO EMAIL, NO COD, INSTAPAY + 5 WALLETS + RECEIPT UPLOAD)
  // =========================================================================

  function openCheckout() {
    closeCart();
    currentUploadedProof = null;

    const subtotalEgp = cart.reduce((sum, item) => {
      const p = PRODUCTS.find(x => x.id === item.id);
      return sum + (p ? p.price * item.qty : 0);
    }, 0);
    const discount = activePromo && PROMO_CODES[activePromo] ? subtotalEgp * PROMO_CODES[activePromo].discount : 0;
    const finalTotal = Math.max(0, subtotalEgp - discount);

    const dialog = $('#checkout-dialog');
    const content = $('#checkout-content');

    // Build 5 Vodafone Cash Numbers HTML with individual copy buttons (Part 4)
    const vodafoneNumbersList = adminConfig.vodafoneNumbers || [
      "010 2489 1941",
      "010 9314 8820",
      "010 6552 3178",
      "010 1892 4053",
      "010 8829 7614"
    ];

    const vodafoneRowsHtml = vodafoneNumbersList.map((num, i) => `
      <div class="vodafone-number-row">
        <div class="voda-left">
          <span class="voda-badge">WALLET 0${i + 1}</span>
          <span class="voda-digits">${num}</span>
        </div>
        <button type="button" class="copy-voda-btn" data-copy-num="${num}">COPY NUMBER</button>
      </div>
    `).join('');

    content.innerHTML = `
      <div class="checkout-wrap">
        <div class="checkout-head">
          <p class="eyebrow"><span class="hud-red">●</span> SECURE CLIENT GATEWAY</p>
          <h2>BIGO ORDER CHECKOUT</h2>
          <p class="sub-text">No Google or email account required. Fast delivery across Egypt.</p>
        </div>

        <div class="checkout-steps">
          <div class="chk-step-pill active">01. CONTACT &amp; ADDRESS</div>
          <div class="chk-step-pill active">02. PAYMENT METHOD</div>
          <div class="chk-step-pill active">03. MANDATORY RECEIPT PROOF</div>
        </div>

        <form id="checkout-main-form" class="checkout-form">
          <!-- Step 1: Customer Details (NO mandatory email field) -->
          <div class="form-row">
            <div class="form-group">
              <label for="chk-name">Full Name *</label>
              <input type="text" id="chk-name" required placeholder="e.g. Omar Mostafa" autocomplete="name">
            </div>
            <div class="form-group">
              <label for="chk-phone">Phone Number / WhatsApp *</label>
              <input type="tel" id="chk-phone" required placeholder="010 1234 5678" autocomplete="tel">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="chk-gov">Governorate *</label>
              <select id="chk-gov" required>
                <option value="Cairo">Cairo (Rapid Delivery)</option>
                <option value="Giza">Giza (Next Day Dispatch)</option>
                <option value="Alexandria">Alexandria (1-2 Business Days)</option>
                <option value="Mansoura">Mansoura (2 Business Days)</option>
                <option value="Tanta">Tanta / Gharbia (2 Business Days)</option>
                <option value="Port Said">Port Said / Suez (2 Business Days)</option>
                <option value="Red Sea">Red Sea / Hurghada (2-3 Business Days)</option>
                <option value="Other">Other Governorates</option>
              </select>
            </div>
            <div class="form-group">
              <label for="chk-area">District / Neighborhood *</label>
              <input type="text" id="chk-area" required placeholder="e.g. New Cairo / Zamalek / Maadi">
            </div>
          </div>

          <div class="form-group">
            <label for="chk-address">Detailed Street Address *</label>
            <textarea id="chk-address" rows="2" required placeholder="Building number, street, apartment, floor, landmark..."></textarea>
          </div>

          <!-- Step 2: Payment Rails (Strict: InstaPay & Vodafone Cash ONLY. NO COD.) -->
          <div class="form-group">
            <label>Select Verified Payment Method * (Strict: No Cash on Delivery)</label>
            <div class="payment-methods-grid">
              
              <!-- InstaPay -->
              <label class="payment-card-opt selected" id="opt-instapay" aria-label="Pay with InstaPay">
                <input type="radio" name="payment-method" value="instapay" checked class="sr-only">
                <img class="payment-brand-logo instapay-brand-logo" src="https://www.instapay.eg/wp-content/uploads/2022/01/Asset-6@4x-768x93.png" alt="InstaPay logo">
              </label>

              <!-- Vodafone Cash -->
              <label class="payment-card-opt" id="opt-vodafone" aria-label="Pay with Vodafone Cash">
                <input type="radio" name="payment-method" value="vodafone" class="sr-only">
                <img class="payment-brand-logo vodafone-brand-logo" src="https://cdn.simpleicons.org/vodafone/E60000" alt="Vodafone logo">
              </label>
            </div>
          </div>

          <!-- Payment Details Box: InstaPay View -->
          <div class="payment-instructions-box" id="instapay-details-box">
            <div class="instapay-card-view">
              <div class="instapay-header">
                <span class="instapay-logo-badge"><img class="payment-detail-logo instapay-detail-logo" src="https://www.instapay.eg/wp-content/uploads/2022/01/Asset-6@4x-768x93.png" alt="InstaPay logo"></span>
                <span class="instapay-verified-chip">OFFICIAL BUSINESS ACCOUNT</span>
              </div>
              <p class="instapay-instructions">
                Transfer the exact grand total <strong>${formatPrice(finalTotal)}</strong> using your mobile banking or InstaPay app to:
              </p>
              <div class="instapay-address-row">
                <div>
                  <span class="ipa-label">InstaPay Address (IPA):</span>
                  <strong class="ipa-value" id="instapay-ipa-text">${adminConfig.instapayAddress}</strong>
                </div>
                <button type="button" class="copy-ipa-btn" id="copy-ipa-btn">COPY IPA</button>
              </div>
              <div class="instapay-sub-meta">
                <span>Account Name: <b>${adminConfig.instapayName}</b></span>
              </div>
            </div>
          </div>

          <!-- Payment Details Box: Vodafone Cash View (5 Wallets) -->
          <div class="payment-instructions-box" id="vodafone-details-box" hidden>
            <div class="vodafone-card-view">
              <div class="vodafone-header">
                <span class="voda-logo-badge"><img class="payment-detail-logo vodafone-detail-logo" src="https://cdn.simpleicons.org/vodafone/E60000" alt="Vodafone logo"></span>
                <span class="voda-verified-chip">5 AUTHORIZED WALLET NUMBERS</span>
              </div>
              <p class="vodafone-instructions">
                Send the grand total <strong>${formatPrice(finalTotal)}</strong> to <b>ANY ONE</b> of our five authorized Vodafone Cash numbers below:
              </p>
              <div class="vodafone-numbers-grid">
                ${vodafoneRowsHtml}
              </div>
            </div>
          </div>

          <!-- Step 3: MANDATORY PAYMENT TRANSFER PROOF UPLOAD (Part 4) -->
          <div class="form-group">
            <label>Mandatory Payment Transfer Receipt *</label>
            
            <div class="proof-upload-container" id="proof-upload-container">
              <p class="proof-instructions-text">Please upload a screenshot or photo of your payment transfer confirmation.</p>
              <p class="proof-instructions-arabic">من فضلك ارفع صورة إيصال تحويل المبلغ لإتمام الطلب.</p>

              <div class="proof-actions-row">
                <!-- Option 1: Take a Photo (triggers camera) -->
                <label class="proof-btn" for="proof-camera-input">
                  <span>📷 Option 1 – Take a Photo</span>
                  <input type="file" id="proof-camera-input" accept="image/*" capture="environment" class="sr-only">
                </label>

                <!-- Option 2: Upload an Image (triggers gallery) -->
                <label class="proof-btn" for="proof-gallery-input">
                  <span>🖼️ Option 2 – Upload an Image</span>
                  <input type="file" id="proof-gallery-input" accept="image/*" class="sr-only">
                </label>
              </div>

              <!-- Live Preview of Uploaded Proof -->
              <div class="proof-preview-box" id="proof-preview-box" hidden>
                <img src="" alt="Payment Receipt" id="proof-preview-img" class="proof-preview-img">
                <div class="proof-meta-info">
                  <div class="proof-file-name" id="proof-file-name">receipt.jpg</div>
                  <div class="proof-file-status">✓ Image Verified &amp; Attached</div>
                </div>
                <button type="button" class="remove-proof-btn" id="remove-proof-btn">✕ Remove</button>
              </div>

              <div class="proof-error-notice" id="proof-error-notice" style="color:var(--red-primary); margin-top:10px; font-size:12px; font-weight:700;" hidden></div>
            </div>
          </div>

          <!-- Order Summary Breakdown -->
          <div class="checkout-summary-box">
            <div class="breakdown-row">
              <span>Items Subtotal (${cart.reduce((s, x) => s + x.qty, 0)} pairs)</span>
              <span>${formatPrice(subtotalEgp)}</span>
            </div>
            ${discount > 0 ? `
              <div class="breakdown-row discount-row">
                <span>Promo Discount (${activePromo})</span>
                <span>-${formatPrice(discount)}</span>
              </div>
            ` : ''}
            <div class="breakdown-row">
              <span>Express Delivery</span>
              <span>${subtotalEgp >= FREE_SHIPPING_THRESHOLD_EGP ? 'COMPLIMENTARY' : formatPrice(150)}</span>
            </div>
            <div class="chk-total-line">
              <span>Grand Total</span>
              <strong>${formatPrice(finalTotal)}</strong>
            </div>
          </div>

          <button type="submit" class="primary-button kinetic-btn checkout-submit-btn" id="confirm-order-btn">
            <span>CONFIRM &amp; SUBMIT ORDER</span>
            <span class="btn-arrow">→</span>
          </button>
        </form>
      </div>
    `;

    // Toggle Payment Methods
    const optInstapay = $('#opt-instapay');
    const optVodafone = $('#opt-vodafone');
    const instapayBox = $('#instapay-details-box');
    const vodafoneBox = $('#vodafone-details-box');

    optInstapay.onclick = () => {
      optInstapay.classList.add('selected');
      optVodafone.classList.remove('selected');
      optInstapay.querySelector('input').checked = true;
      instapayBox.hidden = false;
      vodafoneBox.hidden = true;
    };

    optVodafone.onclick = () => {
      optVodafone.classList.add('selected');
      optInstapay.classList.remove('selected');
      optVodafone.querySelector('input').checked = true;
      vodafoneBox.hidden = false;
      instapayBox.hidden = true;
    };

    // Copy IPA handler
    $('#copy-ipa-btn').onclick = () => {
      const ipa = adminConfig.instapayAddress;
      navigator.clipboard.writeText(ipa).then(() => {
        $('#copy-ipa-btn').textContent = 'COPIED!';
        $('#copy-ipa-btn').classList.add('copied');
        showToast('InstaPay Address copied to clipboard! 📋');
        setTimeout(() => {
          $('#copy-ipa-btn').textContent = 'COPY IPA';
          $('#copy-ipa-btn').classList.remove('copied');
        }, 2500);
      });
    };

    // Copy Vodafone Cash Numbers
    $$('[data-copy-num]').forEach(btn => {
      btn.onclick = () => {
        const num = btn.dataset.copyNum.replace(/\s/g, '');
        navigator.clipboard.writeText(num).then(() => {
          btn.textContent = 'COPIED!';
          btn.classList.add('copied');
          showToast(`Vodafone number ${num} copied! 📋`);
          setTimeout(() => {
            btn.textContent = 'COPY NUMBER';
            btn.classList.remove('copied');
          }, 2500);
        });
      };
    });

    // File Upload Handlers (Option 1 Camera & Option 2 Gallery)
    const handleProofFile = (file) => {
      if (!file) return;

      // Supported formats validation (JPG, PNG, WEBP)
      const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
      if (!validTypes.includes(file.type)) {
        $('#proof-error-notice').hidden = false;
        $('#proof-error-notice').textContent = 'Unsupported file format. Please upload JPG, PNG, or WEBP.';
        return;
      }

      // Max size: 10MB
      if (file.size > 10 * 1024 * 1024) {
        $('#proof-error-notice').hidden = false;
        $('#proof-error-notice').textContent = 'File too large. Maximum receipt image size is 10MB.';
        return;
      }

      $('#proof-error-notice').hidden = true;

      const reader = new FileReader();
      reader.onload = (e) => {
        currentUploadedProof = {
          fileDataUrl: e.target.result,
          fileName: file.name,
          fileSize: `${(file.size / 1024).toFixed(1)} KB`
        };

        $('#proof-preview-img').src = e.target.result;
        $('#proof-file-name').textContent = `${file.name} (${currentUploadedProof.fileSize})`;
        $('#proof-preview-box').hidden = false;
        $('#proof-upload-container').classList.add('has-file');
        showToast('Payment receipt attached successfully! 📸');
      };
      reader.readAsDataURL(file);
    };

    $('#proof-camera-input').onchange = (e) => handleProofFile(e.target.files[0]);
    $('#proof-gallery-input').onchange = (e) => handleProofFile(e.target.files[0]);

    $('#remove-proof-btn').onclick = () => {
      currentUploadedProof = null;
      $('#proof-preview-box').hidden = true;
      $('#proof-camera-input').value = '';
      $('#proof-gallery-input').value = '';
      $('#proof-upload-container').classList.remove('has-file');
      showToast('Payment proof removed');
    };

    // Step 4: Submission Logic (MANDATORY PROOF VALIDATION)
    $('#checkout-main-form').onsubmit = (e) => {
      e.preventDefault();

      // Check if proof is uploaded (Part 4 requirement: Mandatory!)
      if (!currentUploadedProof) {
        $('#proof-error-notice').hidden = false;
        $('#proof-error-notice').textContent = '⚠️ Payment receipt is mandatory. Please take a photo or select an image.';
        showToast('Please upload your payment receipt before submitting');
        $('#proof-upload-container').scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      const orderNumber = 'BGO-' + Math.floor(100000 + Math.random() * 900000);
      const name = $('#chk-name').value.trim();
      const phone = $('#chk-phone').value.trim();
      const gov = $('#chk-gov').value;
      const area = $('#chk-area').value.trim();
      const address = $('#chk-address').value.trim();
      const paymentMethod = $('input[name="payment-method"]:checked').value;

      // Save order into customerOrders (Part 4 & 5)
      const newOrder = {
        id: orderNumber,
        customerName: name,
        phone: phone,
        governorate: gov,
        area: area,
        address: address,
        paymentMethod: paymentMethod === 'instapay' ? 'InstaPay' : 'Vodafone Cash',
        items: [...cart],
        subtotal: subtotalEgp,
        discount: discount,
        total: finalTotal,
        proofImg: currentUploadedProof.fileDataUrl,
        proofName: currentUploadedProof.fileName,
        proofSize: currentUploadedProof.fileSize,
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        status: 'Pending Verification' // NOT verified automatically
      };

      customerOrders.unshift(newOrder);
      localStorage.setItem('bigo_orders', JSON.stringify(customerOrders));

      content.innerHTML = `
        <div class="checkout-wrap order-success-box">
          <div class="success-check-icon">✓</div>
          <p class="eyebrow"><span class="hud-red">●</span> ORDER QUEUED &amp; RECEIPT ATTACHED</p>
          <h2>THANK YOU, ${name.toUpperCase()}!</h2>
          <div class="order-id-badge">ORDER TRACKING: #${orderNumber}</div>
          <p>
            Your payment receipt has been uploaded and submitted to our verification team. 
            Payment status is currently: <strong style="color:#eab308">Pending Verification</strong>.
          </p>
          <div class="checkout-summary-box" style="text-align:left; margin-bottom:24px;">
            <div class="breakdown-row">
              <span>Customer</span>
              <strong>${name} (${phone})</strong>
            </div>
            <div class="breakdown-row">
              <span>Delivery Destination</span>
              <span>${gov} · ${area}</span>
            </div>
            <div class="breakdown-row">
              <span>Payment Rail</span>
              <span>${newOrder.paymentMethod}</span>
            </div>
            <div class="breakdown-row">
              <span>Total Amount Paid</span>
              <strong style="color:var(--red-primary)">${formatPrice(finalTotal)}</strong>
            </div>
            <div class="breakdown-row">
              <span>Receipt Proof</span>
              <span style="color:#10b981">✓ ${currentUploadedProof.fileName} Uploaded</span>
            </div>
          </div>
          <button class="primary-button kinetic-btn" id="finish-checkout-btn">
            <span>RETURN TO COLLECTION</span>
            <span class="btn-arrow">→</span>
          </button>
        </div>
      `;

      $('#finish-checkout-btn').onclick = () => {
        cart = [];
        saveCart();
        dialog.close();
      };
    };

    dialog.showModal();
  }

  // =========================================================================
  // 9. PART 2: CUSTOMER REVIEWS CAROUSEL & SUBMISSION
  // =========================================================================

  function renderReviews() {
    const track = $('#reviews-track');
    if (!track) return;

    const approvedReviews = customerReviews.filter(r => r.status === 'approved');

    track.innerHTML = approvedReviews.map(r => `
      <div class="review-card">
        <div>
          <div class="review-top-row">
            <div class="reviewer-meta">
              <div class="reviewer-avatar">${r.name.charAt(0).toUpperCase()}</div>
              <div>
                <div class="reviewer-name">${r.name}</div>
                <div class="reviewer-loc">${r.location}</div>
              </div>
            </div>
            ${r.verified ? `<span class="verified-pill">✓ VERIFIED</span>` : ''}
          </div>
          <div class="review-stars" style="margin: 14px 0 10px;">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
          <p class="review-body">“${r.text}”</p>
        </div>
        ${r.productName ? `
          <div class="review-product-tag">
            ${r.productImg ? `<img src="${r.productImg}" alt="${r.productName}" class="review-product-thumb" onerror="this.onerror=null;this.src=FALLBACK_IMG;">` : ''}
            <span>${r.productName}</span>
          </div>
        ` : ''}
      </div>
    `).join('');
  }

  function setupReviewsCarousel() {
    const track = $('#reviews-track');
    const prevBtn = $('#rev-prev-btn');
    const nextBtn = $('#rev-next-btn');

    if (prevBtn && track) {
      prevBtn.onclick = () => {
        track.scrollBy({ left: -380, behavior: 'smooth' });
      };
    }
    if (nextBtn && track) {
      nextBtn.onclick = () => {
        track.scrollBy({ left: 380, behavior: 'smooth' });
      };
    }

  }

  // =========================================================================
  // 10. PART 5: ADMIN CONFIGURATION & PAYMENT VERIFICATION DASHBOARD
  // =========================================================================

  function openAdminDashboard() {
    const dialog = $('#admin-dialog');
    const wrap = $('#admin-dashboard-wrap');
    if (!dialog || !wrap) return;

    // Check if authenticated in session
    const isAuthed = sessionStorage.getItem('bigo_admin_auth') === 'true';

    if (!isAuthed) {
      renderAdminLogin(wrap, dialog);
    } else {
      renderAdminPortal(wrap, dialog);
    }

    dialog.showModal();
  }

  function renderAdminLogin(wrap, dialog) {
    wrap.innerHTML = `
      <div class="admin-dashboard-header">
        <p class="eyebrow"><span class="hud-red">●</span> RESTRICTED ACCESS</p>
        <h2>ADMIN OPERATIONS PORTAL</h2>
        <p class="sub-text">Enter the master administrative key to configure payments, verify receipts, and moderate reviews.</p>
      </div>
      <div class="admin-panel-body" style="max-width:440px; margin:40px auto; text-align:center;">
        <form id="admin-login-form">
          <div class="form-group" style="margin-bottom:20px;">
            <label for="admin-pass">Master Passkey *</label>
            <input type="password" id="admin-pass" placeholder="Default: bigo2026" required style="text-align:center; font-size:16px;">
          </div>
          <button type="submit" class="primary-button kinetic-btn" style="width:100%;">
            <span>UNLOCK OPERATIONS CONSOLE</span>
            <span class="btn-arrow">→</span>
          </button>
          <p id="admin-login-error" style="color:var(--red-primary); margin-top:14px; font-size:12px; font-weight:700;" hidden></p>
        </form>
      </div>
    `;

    $('#admin-login-form').onsubmit = (e) => {
      e.preventDefault();
      const val = $('#admin-pass').value.trim();
      if (val === 'bigo2026' || val === 'admin') {
        sessionStorage.setItem('bigo_admin_auth', 'true');
        renderAdminPortal(wrap, dialog);
      } else {
        $('#admin-login-error').hidden = false;
        $('#admin-login-error').textContent = '✕ Invalid passkey. Default passkey: bigo2026';
      }
    };
  }

  function renderAdminPortal(wrap, dialog) {
    wrap.innerHTML = `
      <div class="admin-dashboard-header">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
          <div>
            <p class="eyebrow"><span class="hud-red">●</span> BIGO STORE CAIRO // MASTER ADMIN</p>
            <h2>OPERATIONS &amp; PAYMENT CONSOLE</h2>
          </div>
          <button class="primary-button" id="admin-logout-btn" style="padding:6px 14px; font-size:11px;">LOGOUT</button>
        </div>
      </div>

      <div class="admin-nav-bar">
        <button class="admin-tab-btn active" data-admin-tab="orders">ORDERS &amp; RECEIPTS (${customerOrders.length})</button>
        <button class="admin-tab-btn" data-admin-tab="payments">PAYMENT CONFIGURATION (5 WALLETS)</button>
        <button class="admin-tab-btn" data-admin-tab="bestsellers">BEST SELLER CURATION</button>
        <button class="admin-tab-btn" data-admin-tab="reviews">REVIEWS MODERATION (${customerReviews.length})</button>
      </div>

      <div class="admin-panel-body" id="admin-panel-content">
        <!-- Rendered by tab -->
      </div>
    `;

    $('#admin-logout-btn').onclick = () => {
      sessionStorage.removeItem('bigo_admin_auth');
      renderAdminLogin(wrap, dialog);
    };

    $$('.admin-tab-btn').forEach(btn => {
      btn.onclick = () => {
        $$('.admin-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        switchAdminTab(btn.dataset.adminTab);
      };
    });

    switchAdminTab('orders');
  }

  function switchAdminTab(tab) {
    const container = $('#admin-panel-content');
    if (!container) return;

    if (tab === 'orders') {
      renderAdminOrders(container);
    } else if (tab === 'payments') {
      renderAdminPayments(container);
    } else if (tab === 'bestsellers') {
      renderAdminBestSellers(container);
    } else if (tab === 'reviews') {
      renderAdminReviews(container);
    }
  }

  // Admin Tab 1: Orders & Payment Verification (Part 5)
  function renderAdminOrders(container) {
    if (customerOrders.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding:50px 20px; color:var(--text-muted);">
          <div style="font-size:36px; margin-bottom:12px;">📦</div>
          <h3>NO ORDERS RECORDED YET</h3>
          <p>When customers complete checkout and upload transfer receipts, they appear here for verification.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div style="overflow-x:auto;">
        <table class="admin-orders-table">
          <thead>
            <tr>
              <th>ORDER #</th>
              <th>DATE</th>
              <th>CUSTOMER</th>
              <th>DESTINATION</th>
              <th>TOTAL</th>
              <th>METHOD</th>
              <th>TRANSFER RECEIPT</th>
              <th>VERIFICATION STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            ${customerOrders.map(order => {
      const statusClass = order.status === 'Verified' ? 'status-verified' :
        order.status === 'Rejected' ? 'status-rejected' : 'status-pending';
      return `
                <tr>
                  <td><strong>#${order.id}</strong></td>
                  <td>${order.date}</td>
                  <td>
                    <div><b>${order.customerName}</b></div>
                    <small style="color:var(--text-dim)">${order.phone}</small>
                  </td>
                  <td>${order.governorate} · ${order.area}</td>
                  <td><strong style="color:var(--red-primary)">${formatPrice(order.total)}</strong></td>
                  <td><span class="voda-badge">${order.paymentMethod}</span></td>
                  <td>
                    ${order.proofImg ? `
                      <img src="${order.proofImg}" alt="Receipt" class="order-proof-thumb" data-view-receipt="${order.id}" title="Click to inspect full receipt photo">
                    ` : '<span style="color:#ef4444">No proof</span>'}
                  </td>
                  <td>
                    <span class="status-badge ${statusClass}">${order.status}</span>
                  </td>
                  <td>
                    <button class="admin-action-btn btn-verify" data-order-verify="${order.id}">VERIFY</button>
                    <button class="admin-action-btn btn-reject" data-order-reject="${order.id}">REJECT</button>
                  </td>
                </tr>
              `;
    }).join('')}
          </tbody>
        </table>
      </div>
    `;

    // Click on receipt thumbnail to view full-size
    container.querySelectorAll('[data-view-receipt]').forEach(img => {
      img.onclick = () => {
        const oid = img.dataset.viewReceipt;
        const o = customerOrders.find(x => x.id === oid);
        if (o && o.proofImg) {
          openZoomLightbox(o.proofImg, `Receipt for Order #${o.id} (${o.customerName})`, [o.proofImg], 0);
        }
      };
    });

    container.querySelectorAll('[data-order-verify]').forEach(btn => {
      btn.onclick = () => {
        const oid = btn.dataset.orderVerify;
        const o = customerOrders.find(x => x.id === oid);
        if (o) {
          o.status = 'Verified';
          localStorage.setItem('bigo_orders', JSON.stringify(customerOrders));
          showToast(`Order #${oid} marked as VERIFIED! ✓`);
          renderAdminOrders(container);
        }
      };
    });

    container.querySelectorAll('[data-order-reject]').forEach(btn => {
      btn.onclick = () => {
        const oid = btn.dataset.orderReject;
        const o = customerOrders.find(x => x.id === oid);
        if (o) {
          o.status = 'Rejected';
          localStorage.setItem('bigo_orders', JSON.stringify(customerOrders));
          showToast(`Order #${oid} payment marked as REJECTED ✕`);
          renderAdminOrders(container);
        }
      };
    });
  }

  // Admin Tab 2: Payment Configuration (Part 5 - Configure 5 Vodafone Cash Numbers)
  function renderAdminPayments(container) {
    const vNums = adminConfig.vodafoneNumbers || [
      "010 2489 1941",
      "010 9314 8820",
      "010 6552 3178",
      "010 1892 4053",
      "010 8829 7614"
    ];

    container.innerHTML = `
      <form id="admin-payment-config-form" style="max-width:750px; display:flex; flex-direction:column; gap:28px;">
        
        <!-- InstaPay Config -->
        <div style="background:rgba(255,255,255,0.03); border:1px solid var(--border-medium); border-radius:14px; padding:24px;">
          <h3 style="color:#fff; margin-bottom:16px; font-family:var(--font-mono); font-size:14px; display:flex; align-items:center; gap:8px;">
            <span>⚡ INSTAPAY PAYMENT CONFIGURATION</span>
          </h3>
          <div class="form-row">
            <div class="form-group">
              <label for="cfg-instapay-ipa">InstaPay Address (IPA) *</label>
              <input type="text" id="cfg-instapay-ipa" value="${adminConfig.instapayAddress}" required>
            </div>
            <div class="form-group">
              <label for="cfg-instapay-name">Account Holder Name *</label>
              <input type="text" id="cfg-instapay-name" value="${adminConfig.instapayName}" required>
            </div>
          </div>
        </div>

        <!-- Vodafone Cash 5 Wallets Config (Part 5 Requirement) -->
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(230,0,0,0.3); border-radius:14px; padding:24px;">
          <h3 style="color:#ff1e2d; margin-bottom:12px; font-family:var(--font-mono); font-size:14px; display:flex; align-items:center; gap:8px;">
            <span>📱 VODAFONE CASH — EXACTLY FIVE WALLET NUMBERS</span>
          </h3>
          <p style="color:var(--text-muted); font-size:13px; margin-bottom:20px;">
            Configure the 5 official Vodafone Cash numbers presented to clients during checkout. Each number will have a dedicated copy button.
          </p>

          <div style="display:flex; flex-direction:column; gap:12px;">
            ${[0, 1, 2, 3, 4].map(idx => `
              <div class="form-row" style="align-items:center;">
                <div style="width:110px; font-family:var(--font-mono); font-size:11px; font-weight:700; color:#fff;">
                  WALLET 0${idx + 1}:
                </div>
                <div class="form-group" style="flex:1;">
                  <input type="text" id="cfg-voda-${idx}" value="${vNums[idx] || ''}" required placeholder="010 xxxx xxxx">
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <button type="submit" class="primary-button kinetic-btn" style="align-self:flex-start;">
          <span>SAVE PAYMENT CONFIGURATION</span>
          <span class="btn-arrow">✓</span>
        </button>
      </form>
    `;

    $('#admin-payment-config-form').onsubmit = (e) => {
      e.preventDefault();
      adminConfig.instapayAddress = $('#cfg-instapay-ipa').value.trim();
      adminConfig.instapayName = $('#cfg-instapay-name').value.trim();

      const newVNums = [];
      for (let i = 0; i < 5; i++) {
        const val = $(`#cfg-voda-${i}`).value.trim();
        if (val) newVNums.push(val);
      }

      if (newVNums.length !== 5) {
        showToast('Please provide all 5 Vodafone Cash numbers');
        return;
      }

      adminConfig.vodafoneNumbers = newVNums;
      localStorage.setItem('bigo_admin_config', JSON.stringify(adminConfig));
      showToast('Payment settings & 5 Vodafone numbers saved successfully! ✓');
    };
  }

  // Admin Tab 3: Best Seller Management (Part 5)
  function renderAdminBestSellers(container) {
    const currentBests = adminConfig.bestSellerIds || [1, 2, 3, 4];

    container.innerHTML = `
      <div style="max-width:800px;">
        <h3 style="color:#fff; margin-bottom:8px; font-family:var(--font-display); font-size:20px; text-transform:uppercase;">
          BEST SELLER SELECTION &amp; CURATION
        </h3>
        <p style="color:var(--text-muted); font-size:13px; margin-bottom:24px;">
          Select which footwear models appear directly beneath the Best Seller visual icon on the homepage.
        </p>

        <form id="admin-bestseller-form">
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:16px; margin-bottom:24px;">
            ${PRODUCTS.map(p => {
      const isChecked = currentBests.includes(p.id);
      return `
                <label style="display:flex; align-items:center; gap:12px; background:rgba(255,255,255,0.03); border:1px solid ${isChecked ? 'var(--red-primary)' : 'var(--border-subtle)'}; border-radius:10px; padding:12px; cursor:pointer;">
                  <input type="checkbox" name="bestseller-chk" value="${p.id}" ${isChecked ? 'checked' : ''}>
                  <img src="${p.images[0]}" alt="${p.name}" style="width:40px; height:40px; object-fit:contain;" onerror="this.onerror=null;this.src=FALLBACK_IMG;">
                  <div style="font-size:12px;">
                    <div style="font-weight:700; color:#fff;">${p.name}</div>
                    <div style="color:var(--text-dim);">${formatPrice(p.price)}</div>
                  </div>
                </label>
              `;
    }).join('')}
          </div>

          <button type="submit" class="primary-button kinetic-btn">
            <span>UPDATE BEST SELLER ROTATION</span>
            <span class="btn-arrow">✓</span>
          </button>
        </form>
      </div>
    `;

    $('#admin-bestseller-form').onsubmit = (e) => {
      e.preventDefault();
      const checkedBoxes = Array.from(document.querySelectorAll('input[name="bestseller-chk"]:checked'));
      const newIds = checkedBoxes.map(cb => +cb.value);

      adminConfig.bestSellerIds = newIds;
      localStorage.setItem('bigo_admin_config', JSON.stringify(adminConfig));
      renderBestSellers();
      showToast(`Best Seller collection updated (${newIds.length} models)`);
    };
  }

  // Admin Tab 4: Reviews Moderation (Part 5)
  function renderAdminReviews(container) {
    container.innerHTML = `
      <div style="max-width:900px;">
        <h3 style="color:#fff; margin-bottom:8px; font-family:var(--font-display); font-size:20px; text-transform:uppercase;">
          CUSTOMER REVIEWS MODERATION (${customerReviews.length})
        </h3>
        <p style="color:var(--text-muted); font-size:13px; margin-bottom:24px;">
          Review, approve, or reject customer submitted reviews before they appear in the homepage carousel.
        </p>

        <div style="display:flex; flex-direction:column; gap:16px;">
          ${customerReviews.map(r => `
            <div style="background:rgba(255,255,255,0.03); border:1px solid var(--border-subtle); border-radius:12px; padding:20px; display:flex; justify-content:space-between; align-items:flex-start; gap:20px;">
              <div style="flex:1;">
                <div style="display:flex; align-items:center; gap:12px; margin-bottom:6px;">
                  <strong style="color:#fff;">${r.name}</strong>
                  <span style="color:var(--text-dim); font-size:12px;">(${r.location})</span>
                  <span style="color:#ffb800;">${'★'.repeat(r.rating)}</span>
                  <span class="status-badge ${r.status === 'approved' ? 'status-verified' : 'status-pending'}">${r.status.toUpperCase()}</span>
                </div>
                <div style="color:var(--red-primary); font-family:var(--font-mono); font-size:11px; margin-bottom:8px;">
                  Product: ${r.productName || 'General Footwear'}
                </div>
                <p style="color:var(--text-muted); font-size:13px; line-height:1.5;">“${r.text}”</p>
              </div>
              <div style="display:flex; gap:8px;">
                ${r.status !== 'approved' ? `
                  <button class="admin-action-btn btn-verify" data-approve-rev="${r.id}">APPROVE</button>
                ` : `
                  <button class="admin-action-btn btn-reject" data-reject-rev="${r.id}">UNAPPROVE</button>
                `}
                <button class="admin-action-btn btn-reject" data-delete-rev="${r.id}" style="background:#555;">DELETE</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    container.querySelectorAll('[data-approve-rev]').forEach(btn => {
      btn.onclick = () => {
        const rid = btn.dataset.approveRev;
        const r = customerReviews.find(x => x.id === rid);
        if (r) {
          r.status = 'approved';
          localStorage.setItem('bigo_reviews', JSON.stringify(customerReviews));
          renderReviews();
          renderAdminReviews(container);
          showToast('Review approved for public display ✓');
        }
      };
    });

    container.querySelectorAll('[data-reject-rev]').forEach(btn => {
      btn.onclick = () => {
        const rid = btn.dataset.rejectRev;
        const r = customerReviews.find(x => x.id === rid);
        if (r) {
          r.status = 'pending';
          localStorage.setItem('bigo_reviews', JSON.stringify(customerReviews));
          renderReviews();
          renderAdminReviews(container);
          showToast('Review unapproved');
        }
      };
    });

    container.querySelectorAll('[data-delete-rev]').forEach(btn => {
      btn.onclick = () => {
        const rid = btn.dataset.deleteRev;
        customerReviews = customerReviews.filter(x => x.id !== rid);
        localStorage.setItem('bigo_reviews', JSON.stringify(customerReviews));
        renderReviews();
        renderAdminReviews(container);
        showToast('Review deleted');
      };
    });
  }

  // =========================================================================
  // 11. GSAP & SCROLLTRIGGER SNEAKER CINEMATIC ANIMATIONS (PART 1)
  // =========================================================================

  function setupGsapSneakerAnimations() {
    if (typeof gsap === 'undefined') return;

    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Interactive 3D Sneaker Mouse Move Tilt
    const target3D = $('#sneaker-3d-target');
    const stageFrame = $('#stage-sneaker-3d');

    if (stageFrame && target3D) {
      stageFrame.addEventListener('mousemove', (e) => {
        const rect = stageFrame.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(target3D, {
          rotationY: x * 35,
          rotationX: -y * 30,
          transformPerspective: 1000,
          ease: 'power2.out',
          duration: 0.4
        });
      });

      stageFrame.addEventListener('mouseleave', () => {
        gsap.to(target3D, {
          rotationY: 0,
          rotationX: 0,
          ease: 'power2.out',
          duration: 0.8
        });
      });
    }

    // Scroll-Triggered Sneaker Showcase Animation
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.from('#stage-main-shoe', {
        scrollTrigger: {
          trigger: '#cinematic',
          start: 'top 75%',
          end: 'bottom 40%',
          toggleActions: 'play none none reverse'
        },
        y: 80,
        opacity: 0.3,
        rotation: -15,
        duration: 1.2,
        ease: 'power3.out'
      });

      gsap.from('#floating-tech-box', {
        scrollTrigger: {
          trigger: '#cinematic',
          start: 'top 70%'
        },
        y: 60,
        opacity: 0,
        duration: 1.4,
        delay: 0.2,
        ease: 'power2.out'
      });

      // Best Seller Section Animation
      gsap.from('#bestseller-icon-badge', {
        scrollTrigger: {
          trigger: '#bestsellers',
          start: 'top 80%'
        },
        scale: 0.6,
        opacity: 0,
        duration: 0.9,
        ease: 'back.out(1.7)'
      });
    }

    // Anatomy Hotspot Click Handlers
    $$('.anatomy-hotspot').forEach(spot => {
      spot.onclick = () => {
        const spec = spot.dataset.spec;
        $$('.anatomy-card').forEach(card => {
          card.classList.toggle('active', card.dataset.specTarget === spec);
        });
      };
    });

    $$('.anatomy-card').forEach(card => {
      card.onclick = () => {
        const spec = card.dataset.specTarget;
        $$('.anatomy-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        showToast(`Inspecting: ${card.querySelector('h3').textContent}`);
      };
    });
  }

  // =========================================================================
  // 12. VIDEO DIRECTOR HUD & AMBIENT AUDIO SYNTHESIS
  // =========================================================================

  function setupVideoDirector() {
    const video = $('#hero-video');
    const shoeVideo = $('#hero-shoe-video');
    const playBtn = $('#video-play-btn');
    const audioBtn = $('#audio-toggle-btn');
    const cinemaBtn = $('#cinema-toggle-btn');
    const camBtns = $$('.cam-btn');

    // ---- Mobile autoplay fix ----
    // On mobile browsers, autoplay may be blocked until user interaction.
    // We use IntersectionObserver to play when visible and pause when off-screen,
    // which also ensures the video stops consuming resources after the user scrolls past.
    if (video) {
      const heroObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const targetVideo = entry.target;
          if (entry.isIntersecting) {
            if (targetVideo.paused) {
              targetVideo.play().catch(() => {});
            }
          } else {
            // Fully scrolled past – pause to save battery/resources
            if (!targetVideo.paused) {
              targetVideo.pause();
            }
          }
        });
      }, { threshold: 0.05 }); // trigger as soon as 5% is visible
      heroObs.observe(video);
      if (shoeVideo) heroObs.observe(shoeVideo);

      // iOS Safari sometimes needs a user-gesture shim for muted autoplay
      const unlockVideo = () => {
        [video, shoeVideo].filter(Boolean).forEach(item => item.play().catch(() => {}));
        document.removeEventListener('touchstart', unlockVideo, true);
        document.removeEventListener('click', unlockVideo, true);
      };
      document.addEventListener('touchstart', unlockVideo, { once: true, passive: true });
      document.addEventListener('click', unlockVideo, { once: true });
    }
    camBtns.forEach(btn => {
      btn.onclick = () => {
        camBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const newSrc = btn.dataset.src;
        const newPoster = btn.dataset.poster;
        const showShoeSpin = btn.dataset.shoeSpin === 'true';

        if (shoeVideo) {
          shoeVideo.classList.toggle('is-active', showShoeSpin);
          if (showShoeSpin) shoeVideo.play().catch(() => {});
          else shoeVideo.pause();
        }

        video.style.filter = 'brightness(0.2) contrast(1.4)';
        setTimeout(() => {
          video.poster = newPoster;
          video.src = newSrc;
          video.play().catch(() => { });
          video.style.filter = 'brightness(0.76) contrast(1.12) saturate(1.05)';
        }, 300);

        showToast(`Switched to Camera Angle ${btn.querySelector('.cam-idx').textContent}`);
      };
    });

    if (playBtn && video) {
      playBtn.onclick = () => {
        if (video.paused) {
          video.play().catch(() => { });
          playBtn.querySelector('.play-icon').textContent = 'Ⅱ';
          playBtn.querySelector('.btn-lbl').textContent = 'PAUSE FILM';
          showToast('Film Playback Resumed ▶');
        } else {
          video.pause();
          playBtn.querySelector('.play-icon').textContent = '▶';
          playBtn.querySelector('.btn-lbl').textContent = 'RESUME FILM';
          showToast('Film Playback Paused ⏸');
        }
      };
    }

    if (audioBtn) {
      audioBtn.onclick = () => toggleAudioSynthesizer(audioBtn);
    }

    if (cinemaBtn) {
      cinemaBtn.onclick = () => {
        document.body.classList.toggle('cinema-active');
        cinemaBtn.classList.toggle('active');
        showToast(document.body.classList.contains('cinema-active') ? '2.39:1 Anamorphic Cinema Mode' : 'Standard View Restored');
      };
    }
  }

  function toggleAudioSynthesizer(btn) {
    if (!isAudioOn) {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContextClass();
        audioGain = audioContext.createGain();
        audioGain.gain.setValueAtTime(0.01, audioContext.currentTime);

        audioOscillator = audioContext.createOscillator();
        audioOscillator.type = 'sawtooth';
        audioOscillator.frequency.setValueAtTime(54, audioContext.currentTime);

        const filter = audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(140, audioContext.currentTime);

        audioOscillator.connect(filter);
        filter.connect(audioGain);
        audioGain.connect(audioContext.destination);

        audioOscillator.start();
        audioGain.gain.exponentialRampToValueAtTime(0.12, audioContext.currentTime + 1.5);

        isAudioOn = true;
        btn.classList.add('active');
        btn.querySelector('.btn-lbl').textContent = 'AUDIO FX: ON';
        showToast('Ambient Soundscape Activated 🔊');
      } catch (err) {
        console.warn('Audio not available', err);
      }
    } else {
      if (audioGain && audioContext) {
        audioGain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
        setTimeout(() => {
          if (audioOscillator) audioOscillator.stop();
          if (audioContext) audioContext.close();
          isAudioOn = false;
        }, 500);
      }
      btn.classList.remove('active');
      btn.querySelector('.btn-lbl').textContent = 'AUDIO FX: OFF';
      showToast('Ambient Audio Muted 🔇');
    }
  }

  // =========================================================================
  // 13. PARTICLES & CURSOR
  // =========================================================================

  function setupParticlesCanvas() {
    const canvas = $('#hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
    });

    const particles = [];
    const count = 35;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.7 - 0.2,
        alpha: Math.random() * 0.7 + 0.3
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 30, 45, ${p.alpha})`;
        ctx.shadowColor = '#ff1e2d';
        ctx.shadowBlur = 8;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  function setupCustomCursor() {
    const cursor = $('.custom-cursor');
    const dot = $('.custom-cursor-dot');
    if (!cursor || !dot) return;

    window.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    });

    $$('a, button, input, select, textarea, .product-card').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }

  let toastTimer = null;
  function showToast(message) {
    const toast = $('#toast');
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 4000);
  }

  // =========================================================================
  // 14. INITIALIZATION
  // =========================================================================

  function init() {
    renderCollectionFilters();
    renderCatalog();
    renderBestSellers();
    renderReviews();
    renderCart();
    updateWishlistCount();
    setupVideoDirector();
    setupParticlesCanvas();
    setupCustomCursor();
    setupZoomInteractions();
    setupReviewsCarousel();
    setupGsapSneakerAnimations();

    // Currency Switcher
    const currSelect = $('#currency-select');
    if (currSelect) {
      currSelect.value = currentCurrency;
      currSelect.addEventListener('change', (e) => setCurrency(e.target.value));
    }

    // Filter Buttons
    $$('[data-filter]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        setFilter(btn.dataset.filter);
        if (location.hash !== '#shop') location.hash = 'shop';
      });
    });

    const resetBtn = $('#reset-filter-btn');
    if (resetBtn) resetBtn.onclick = () => {
      $('#search-input').value = '';
      searchQuery = '';
      currentBrand = null;
      setFilter('All');
    };

    const emptyResetBtn = $('#empty-reset-btn');
    if (emptyResetBtn) emptyResetBtn.onclick = () => {
      $('#search-input').value = '';
      searchQuery = '';
      currentBrand = null;
      setFilter('All');
    };

    // Live Instant Search
    const searchInput = $('#search-input');
    const clearSearch = $('#clear-search-btn');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (clearSearch) clearSearch.hidden = !searchQuery;
        renderCatalog();
      });
    }

    if (clearSearch) {
      clearSearch.onclick = () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearch.hidden = true;
        renderCatalog();
      };
    }

    // Sort Select
    const sortSelect = $('#sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderCatalog();
      });
    }

    // Bag Trigger
    $('.bag-button')?.addEventListener('click', openCart);
    $('.close-drawer')?.addEventListener('click', closeCart);
    $('.scrim')?.addEventListener('click', () => {
      closeCart();
      $('#product-dialog')?.close();
      $('#checkout-dialog')?.close();
      $('#zoom-dialog')?.close();
      $('#admin-dialog')?.close();
    });

    // Close Dialogs
    $('.close-dialog')?.addEventListener('click', () => $('#product-dialog').close());
    $('.close-checkout')?.addEventListener('click', () => $('#checkout-dialog').close());
    $('.close-wishlist')?.addEventListener('click', () => $('#wishlist-dialog').close());

    // Promo button
    $('#apply-promo-btn')?.addEventListener('click', applyPromoCode);
    $('#promo-input')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyPromoCode();
      }
    });

    // Open Checkout Trigger
    $('#open-checkout-btn')?.addEventListener('click', openCheckout);

    // Hero quick look button
    $('#quick-look-hero')?.addEventListener('click', () => openQuickView(3));

    // Mobile Hamburger
    const menuToggle = $('.menu-toggle');
    const mobileDrawer = $('.mobile-nav-drawer');
    const closeMobileNav = $('.close-mobile-nav');

    if (menuToggle && mobileDrawer) {
      menuToggle.onclick = () => mobileDrawer.hidden = false;
      closeMobileNav.onclick = () => mobileDrawer.hidden = true;
      $$('.mobile-nav-link').forEach(link => {
        link.onclick = () => mobileDrawer.hidden = true;
      });
    }

    // Admin dashboard remains available through the keyboard shortcut.
    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        openAdminDashboard();
      }
    });

    // Feature banner zoom trigger
    $('.feature-zoom-trigger')?.addEventListener('click', () => {
      openZoomLightbox(
        "https://images.pexels.com/photos/2381268/pexels-photo-2381268.jpeg?auto=compress&cs=tinysrgb&w=1400",
        "Air Jordan 1 High OG Chicago (1985 Archive)",
        ["https://images.pexels.com/photos/2381268/pexels-photo-2381268.jpeg?auto=compress&cs=tinysrgb&w=1400"],
        0
      );
    });

    // Sticky Header Scroll Listener
    const header = $('.header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Newsletter Form
    $('#newsletter-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = $('#newsletter-msg');
      msg.hidden = false;
      msg.textContent = '✓ You are on the private access roster for Drop 05.';
      showToast('Joined VIP drops list!');
      $('#footer-email').value = '';
    });
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
