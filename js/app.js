// Enjoy Coupons Clone — Interactive Logic
(function () {
  const COUPONS = window.ENJOY_COUPONS || [];

  const STAR_SVG =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';

  function renderStarsHtml(ratings) {
    return (
      '<div class="rating-wrapp">' +
      '<span class="stars" aria-label="5 out of 5 stars">' +
      STAR_SVG.repeat(5) +
      '</span>' +
      '<span>' +
      ratings +
      ' Ratings</span>' +
      '</div>'
    );
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ==================== HEADER CANVAS PARTICLES ====================
  function initHeaderCanvas() {
    const canvas = document.getElementById('pagebg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    const particles = [];

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = canvas.width = Math.max(rect.width, 300);
      height = canvas.height = Math.max(rect.height, 200);
    }

    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 28; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 1.5 + Math.random() * 3.5,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        alpha: 0.15 + Math.random() * 0.35
      });
    }

    function tick() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, ' + p.alpha + ')';
        ctx.fill();
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // ==================== MAINTENANCE MODAL ====================
  function initMaintenanceModal() {
    const modal = document.getElementById('errorModal');
    if (!modal) return;

    function openModal(e) {
      if (e) e.preventDefault();
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }

    document.querySelectorAll('[data-open-maintenance]').forEach(function (btn) {
      btn.addEventListener('click', openModal);
    });

    modal.querySelectorAll('[data-close-modal]').forEach(function (btn) {
      btn.addEventListener('click', closeModal);
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
  }

  // ==================== LIVE SEARCH ====================
  function initSearch() {
    const form = document.getElementById('search-form');
    const input = document.getElementById('search-input');
    const wrap = document.getElementById('search-wrap');
    if (!form || !input || !wrap) return;

    function renderResults(query) {
      const q = query.trim().toLowerCase();
      if (!q) {
        wrap.classList.remove('open');
        wrap.innerHTML = '';
        return;
      }

      const matches = COUPONS.filter(function (c) {
        return (
          c.title.toLowerCase().includes(q) ||
          c.brand.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
        );
      }).slice(0, 6);

      if (matches.length === 0) {
        wrap.innerHTML =
          '<div class="search-empty">No coupons found for "<strong>' +
          escapeHtml(query) +
          '</strong>". Try Nike, Amazon, Uber Eats, or Spotify.</div>';
        wrap.classList.add('open');
        return;
      }

      wrap.innerHTML = matches
        .map(function (c) {
          const href = 'coupon.html?slug=' + encodeURIComponent(c.slug);
          return (
            '<div class="search-result-card">' +
            '<a class="search-result-left" href="' + href + '">' +
            '<img class="search-result-thumb" src="' + c.image + '" alt="' + escapeHtml(c.brand) + '">' +
            '<div class="search-result-info">' +
            '<h6 class="search-result-title">' + escapeHtml(c.title) + '</h6>' +
            '<span class="single-category">' + escapeHtml(c.category) + '</span>' +
            '</div>' +
            '</a>' +
            '<div class="search-result-right">' +
            '<a class="btn-see-more btn-see-more-sm" href="' + href + '">See more</a>' +
            '<div class="single-coupon-left single-coupon-left-sm">Coupons left ' + c.couponsLeft + '</div>' +
            '</div>' +
            '</div>'
          );
        })
        .join('');
      wrap.classList.add('open');
    }

    input.addEventListener('input', function () {
      renderResults(input.value);
    });

    input.addEventListener('focus', function () {
      if (input.value.trim()) renderResults(input.value);
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      renderResults(input.value);
    });

    document.addEventListener('click', function (e) {
      if (!form.contains(e.target)) {
        wrap.classList.remove('open');
      }
    });
  }

  // ==================== HOMEPAGE: TOP CAROUSEL & TRENDING ====================
  function initHomepage() {
    const track = document.getElementById('top-coupons-track');
    const trendingList = document.getElementById('trending-coupons-list');
    if (!track || !trendingList) return;

    const topItems = COUPONS.filter(function (c) {
      return c.isTop;
    });

    track.innerHTML = topItems
      .map(function (c) {
        const href = 'coupon.html?slug=' + encodeURIComponent(c.slug);
        return (
          '<div class="carousel-slide">' +
          '<article class="single-coupon single-coupon-top">' +
          '<a class="top-card-img-wrap" href="' + href + '">' +
          '<img class="top-card-img" src="' + c.image + '" alt="' + escapeHtml(c.brand) + '">' +
          '</a>' +
          '<div class="top-card-body">' +
          '<a href="' + href + '"><h5 class="card-title-ellipsis" title="' + escapeHtml(c.title) + '">' + escapeHtml(c.title) + '</h5></a>' +
          renderStarsHtml(c.ratings) +
          '<a class="btn-see-more" href="' + href + '">See more</a>' +
          '<div class="single-coupon-left">Coupons Left: ' + c.couponsLeft + '</div>' +
          '</div>' +
          '</article>' +
          '</div>'
        );
      })
      .join('');

    // Carousel navigation
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const wrapper = document.querySelector('.carousel-wrapper');
    let currentIndex = 0;
    let autoTimer = null;

    function getVisibleCount() {
      const w = window.innerWidth;
      if (w <= 480) return 1;
      if (w <= 768) return 2;
      if (w <= 1024) return 3;
      return 4;
    }

    function updateCarousel() {
      const visible = getVisibleCount();
      const maxIndex = Math.max(0, topItems.length - visible);
      if (currentIndex > maxIndex) currentIndex = 0;
      if (currentIndex < 0) currentIndex = maxIndex;

      const firstSlide = track.querySelector('.carousel-slide');
      if (!firstSlide) return;
      const slideWidth = firstSlide.getBoundingClientRect().width;
      const gap = 20;
      const offset = currentIndex * (slideWidth + gap);
      track.style.transform = 'translateX(-' + offset + 'px)';
    }

    function stepNext() {
      const visible = getVisibleCount();
      const maxIndex = Math.max(0, topItems.length - visible);
      currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      updateCarousel();
    }

    function stepPrev() {
      const visible = getVisibleCount();
      const maxIndex = Math.max(0, topItems.length - visible);
      currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
      updateCarousel();
    }

    if (prevBtn) prevBtn.addEventListener('click', stepPrev);
    if (nextBtn) nextBtn.addEventListener('click', stepNext);
    window.addEventListener('resize', updateCarousel);

    function startAuto() {
      stopAuto();
      autoTimer = setInterval(stepNext, 4500);
    }

    function stopAuto() {
      if (autoTimer) clearInterval(autoTimer);
      autoTimer = null;
    }

    if (wrapper) {
      wrapper.addEventListener('mouseenter', stopAuto);
      wrapper.addEventListener('mouseleave', startAuto);
    }

    updateCarousel();
    startAuto();

    // Trending list
    const trendingItems = COUPONS.filter(function (c) {
      return c.isTrending;
    });

    // Put Uber Eats, Microsoft Rewards, Uber first to match live homepage order
    const prioritySlugs = [
      'uber-eats-promo-code',
      'microsoft-rewards-points-code',
      'uber-promo-code',
      'amazon-coupons-deals',
      'lyft-coupons-deals',
      'nike-100-promo-code',
      'airbnb-coupon-codes',
      'armored-core-vi-game-code'
    ];

    trendingItems.sort(function (a, b) {
      const ia = prioritySlugs.indexOf(a.slug);
      const ib = prioritySlugs.indexOf(b.slug);
      if (ia !== -1 && ib !== -1) return ia - ib;
      if (ia !== -1) return -1;
      if (ib !== -1) return 1;
      return 0;
    });

    trendingList.innerHTML = trendingItems
      .map(function (c) {
        const href = 'coupon.html?slug=' + encodeURIComponent(c.slug);
        return (
          '<article class="single-coupon trending-card">' +
          '<div class="trending-left">' +
          '<a class="trending-thumb-link" href="' + href + '">' +
          '<img class="trending-thumb" src="' + c.image + '" alt="' + escapeHtml(c.brand) + '">' +
          '</a>' +
          '<div class="trending-info">' +
          '<a href="' + href + '"><h6 class="trending-title">' + escapeHtml(c.title) + '</h6></a>' +
          renderStarsHtml(c.ratings) +
          '<p class="one-line-small">' + escapeHtml(c.description) + '</p>' +
          '</div>' +
          '</div>' +
          '<div class="trending-right">' +
          '<a class="btn-see-more" href="' + href + '">See more</a>' +
          '<div class="single-coupon-left">Coupons Left:<br>' + c.couponsLeft + '</div>' +
          '</div>' +
          '</article>'
        );
      })
      .join('');
  }

  // ==================== COUPON DETAIL PAGE ====================
  function initDetailPage() {
    const detailRoot = document.getElementById('coupon-detail-root');
    if (!detailRoot) return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug') || 'nike-100-promo-code';
    const coupon =
      COUPONS.find(function (c) {
        return c.slug === slug;
      }) || COUPONS[0];

    document.title = coupon.title + ' - Enjoy Coupons';

    const offersHtml = coupon.offers
      .map(function (offer, idx) {
        return (
          '<div class="offer-card">' +
          '<div class="title-short">' + escapeHtml(offer.shortTitle) + '</div>' +
          '<div class="offer-middle">' +
          '<h6 class="offer-title">' + escapeHtml(offer.title) + '</h6>' +
          '<p class="offer-meta">' + escapeHtml(offer.verified) + '</p>' +
          '</div>' +
          '<button type="button" class="btn-show-coupon" data-offer-index="' + idx + '">Show<br>Coupon</button>' +
          '</div>'
        );
      })
      .join('');

    detailRoot.innerHTML =
      '<a class="detail-breadcrumb" href="index.html">&larr; Back to All Coupons</a>' +
      '<h1 class="detail-page-title">' + escapeHtml(coupon.title) + '</h1>' +
      '<div class="detail-grid">' +
      '<div class="detail-main">' +
      '<div class="detail-hero-card">' +
      '<img class="detail-hero-img" src="' + coupon.image + '" alt="' + escapeHtml(coupon.brand) + '">' +
      '</div>' +
      '<div class="detail-left-badge-wrap">' +
      '<div class="single-coupon-left beat-title">Coupons Left: ' + coupon.couponsLeft + '</div>' +
      '</div>' +
      '<div class="offer-list">' + offersHtml + '</div>' +
      '</div>' +
      '<aside class="detail-sidebar">' +
      '<div class="sidebar-section">' +
      '<h3>About</h3>' +
      '<p>' + escapeHtml(coupon.about) + '</p>' +
      '</div>' +
      '<div class="sidebar-section">' +
      '<h3>Tips</h3>' +
      '<p>' + escapeHtml(coupon.tips) + '</p>' +
      '</div>' +
      '<div class="sidebar-section">' +
      renderStarsHtml(coupon.ratings) +
      '<p class="rating-note">Note: Rating is only available for registered users.</p>' +
      '</div>' +
      '</aside>' +
      '</div>';

    // Coupon Reveal Modal
    const modal = document.getElementById('exampleModal');
    const discountEl = document.getElementById('modal-discount');
    const titleEl = document.getElementById('modal-offer-title');
    const remainingEl = document.getElementById('modal-remaining');
    const codeBoxEl = document.getElementById('modal-code-box');
    const unlockBtn = document.getElementById('btn-unlock-code');
    const copyBtn = document.getElementById('btn-copy-code');
    const progressWrap = document.getElementById('unlock-progress-wrap');
    const ringFill = document.getElementById('progress-ring-fill');
    const ringText = document.getElementById('progress-ring-text');
    const copiedNote = document.getElementById('copied-note');

    const RADIUS = 34;
    const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
    if (ringFill) {
      ringFill.style.strokeDasharray = CIRCUMFERENCE;
      ringFill.style.strokeDashoffset = CIRCUMFERENCE;
    }

    let activeOffer = null;
    let unlockInterval = null;

    function resetModalState() {
      if (unlockInterval) clearInterval(unlockInterval);
      unlockInterval = null;
      codeBoxEl.classList.remove('unlocked');
      unlockBtn.style.display = 'block';
      copyBtn.style.display = 'none';
      progressWrap.classList.remove('active');
      copiedNote.textContent = '';
      if (ringFill) ringFill.style.strokeDashoffset = CIRCUMFERENCE;
      if (ringText) ringText.textContent = '0%';
    }

    function openOfferModal(offer) {
      activeOffer = offer;
      resetModalState();
      discountEl.textContent = offer.shortTitle;
      titleEl.textContent = offer.title;
      remainingEl.textContent = 'Coupons Left Remaining: ' + coupon.couponsLeft;
      codeBoxEl.textContent = offer.masked;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    }

    function closeOfferModal() {
      resetModalState();
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }

    detailRoot.querySelectorAll('[data-offer-index]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const idx = parseInt(btn.getAttribute('data-offer-index'), 10);
        if (coupon.offers[idx]) openOfferModal(coupon.offers[idx]);
      });
    });

    if (unlockBtn) {
      unlockBtn.addEventListener('click', function () {
        if (!activeOffer) return;
        unlockBtn.style.display = 'none';
        progressWrap.classList.add('active');
        let pct = 1;

        unlockInterval = setInterval(function () {
          pct += 3;
          if (pct >= 100) {
            pct = 100;
            clearInterval(unlockInterval);
            unlockInterval = null;

            ringFill.style.strokeDashoffset = 0;
            ringText.textContent = '100%';

            setTimeout(function () {
              progressWrap.classList.remove('active');
              codeBoxEl.textContent = activeOffer.code;
              codeBoxEl.classList.add('unlocked');
              copyBtn.style.display = 'block';
              copiedNote.textContent = 'Code unlocked! Click below to copy.';
            }, 250);
            return;
          }
          const offset = CIRCUMFERENCE * (1 - pct / 100);
          ringFill.style.strokeDashoffset = offset;
          ringText.textContent = pct + '%';
        }, 30);
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        if (!activeOffer) return;
        const text = activeOffer.code;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () {
            copiedNote.textContent = 'Copied "' + text + '" to clipboard!';
          });
        } else {
          copiedNote.textContent = 'Code: ' + text;
        }
      });
    }

    modal.querySelectorAll('[data-close-modal]').forEach(function (btn) {
      btn.addEventListener('click', closeOfferModal);
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeOfferModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeOfferModal();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initHeaderCanvas();
    initMaintenanceModal();
    initSearch();
    initHomepage();
    initDetailPage();
  });
})();
