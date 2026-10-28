/**
 * NEERAJ SHARMA — PREMIUM EDITORIAL BOUTIQUE PORTFOLIO
 * Vanilla JS Interactions, Responsive Sidebar Drawer, ScrollSpy, Lightbox & Validation
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Fixed Navbar Scrolled Styling
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Mobile & Tablet (md) Drawer Navigation
  function getDrawer() {
    return document.querySelector('.sidebar-drawer') || document.querySelector('.mobile-nav-drawer');
  }

  function getOverlay() {
    return document.querySelector('.sidebar-overlay');
  }

  function getHamburger() {
    return document.querySelector('.hamburger-btn');
  }

  function openSidebar() {
    const drawer = getDrawer();
    const overlay = getOverlay();
    const btn = getHamburger();
    btn?.classList.add('open');
    drawer?.classList.add('open');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    const drawer = getDrawer();
    const overlay = getOverlay();
    const btn = getHamburger();
    btn?.classList.remove('open');
    drawer?.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  function toggleSidebar() {
    const drawer = getDrawer();
    if (drawer && drawer.classList.contains('open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  // Document-level event delegation (Guaranteed 100% click capture)
  document.addEventListener('click', (e) => {
    // Check hamburger button click
    const hamburger = e.target.closest('.hamburger-btn');
    if (hamburger) {
      e.preventDefault();
      e.stopPropagation();
      toggleSidebar();
      return;
    }

    // Check sidebar close button
    const closeBtn = e.target.closest('.sidebar-close-btn');
    if (closeBtn) {
      e.preventDefault();
      e.stopPropagation();
      closeSidebar();
      return;
    }

    // Check overlay click
    if (e.target.matches('.sidebar-overlay') || e.target.classList.contains('sidebar-overlay')) {
      e.preventDefault();
      closeSidebar();
      return;
    }

    // Close when clicking any nav link inside drawer
    if (e.target.closest('.sidebar-drawer a') || e.target.closest('.mobile-nav-drawer a')) {
      closeSidebar();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSidebar();
    }
  });

  // 3. ScrollSpy on Single Page Anchors (index.html)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"], .nav-link[href*="index.html#"]');

  if (sections.length > 0 && navLinks.length > 0) {
    const handleScrollSpy = () => {
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === '#' + sectionId || href.endsWith('#' + sectionId)) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
  }

  // 4. Subtle Fade-up Reveal on Scroll
  const fadeUpElements = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeUpElements.forEach(el => fadeObserver.observe(el));
  } else {
    fadeUpElements.forEach(el => el.classList.add('visible'));
  }

  // 5. Stat Counter Animation (Runs Once)
  const statNumbers = document.querySelectorAll('.count-up');
  if ('IntersectionObserver' in window && statNumbers.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const targetNum = parseInt(target.getAttribute('data-target') || '0', 10);
          const prefix = target.getAttribute('data-prefix') || '';
          const suffix = target.getAttribute('data-suffix') || '';
          const duration = 1600;
          const startTime = performance.now();

          const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeProgress * targetNum);

            target.textContent = `${prefix}${currentVal}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              target.textContent = `${prefix}${targetNum}${suffix}`;
            }
          };

          requestAnimationFrame(updateCount);
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.25 });

    statNumbers.forEach(stat => counterObserver.observe(stat));
  }

  // 6. Gallery Lightbox Functionality
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.querySelector('.lightbox-modal');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (lightboxModal && galleryItems.length > 0) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const caption = item.getAttribute('data-caption') || item.querySelector('h4')?.textContent || 'Gallery Showcase';
        if (img && lightboxImg && lightboxCaption) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
          lightboxCaption.textContent = caption;
          lightboxModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    lightboxClose?.addEventListener('click', closeLightbox);
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // 7. Contact Form Interactive Validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const statusEl = document.getElementById('formStatus');

      const name = contactForm.querySelector('[name="name"]')?.value.trim();
      const email = contactForm.querySelector('[name="email"]')?.value.trim();
      const phone = contactForm.querySelector('[name="phone"]')?.value.trim();
      const message = contactForm.querySelector('[name="message"]')?.value.trim();

      if (!name || !email || !message) {
        if (statusEl) {
          statusEl.textContent = 'Please fill out all required fields (Name, Email, Message).';
          statusEl.style.display = 'block';
          statusEl.style.backgroundColor = '#FCEAE7';
          statusEl.style.color = '#8E4A38';
          statusEl.style.border = '1px solid #E6D5CC';
        }
        return;
      }

      if (statusEl) {
        statusEl.innerHTML = `<strong>Thank you, ${name}!</strong> Your enquiry has been received in demo mode. Our executive office will review your request.`;
        statusEl.className = 'form-status success';
        statusEl.style.display = 'block';
      }

      contactForm.reset();
    });
  }
});
