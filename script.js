document.addEventListener('DOMContentLoaded', () => {

    // Intersection Observer for Section Reveals
    const revealOptions = { threshold: 0.1 };
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, revealOptions);

    // Remove Intersection Observer for Section Reveals (as per user request to remove animation)
    // document.querySelectorAll('.animate-reveal, .folio-item').forEach(el => revealOnScroll.observe(el));
    document.querySelectorAll('.animate-reveal').forEach(el => el.classList.add('active'));

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const albumBook = document.getElementById('album-book');
    const albumPages = document.querySelectorAll('.album-page');
    if (albumBook && albumPages.length) {
        let currentPageIdx = -1;
        let albumInterval;
        let isBookOpen = false;

        function openBook() {
            if (isBookOpen) return;
            isBookOpen = true;

            albumPages.forEach(p => p.classList.remove('active', 'flipping'));
            currentPageIdx = -1;

            albumBook.classList.add('open');
            albumBook.classList.remove('closed');

            startAutoFlip();
        }

        function closeBook() {
            if (!isBookOpen) return;

            if (currentPageIdx >= 0 && currentPageIdx < albumPages.length) {
                albumPages[currentPageIdx].classList.add('flipping');
            }

            setTimeout(() => {
                isBookOpen = false;
                albumBook.classList.remove('open');
                albumBook.classList.add('closed');

                setTimeout(() => {
                    albumPages.forEach(p => p.classList.remove('active', 'flipping'));
                }, 1500);
            }, 1500);

            clearInterval(albumInterval);
            setTimeout(openBook, 1500);
        }

        function flipRealistic() {
            if (!isBookOpen) return;

            if (currentPageIdx >= albumPages.length - 1) {
                closeBook();
                return;
            }

            if (currentPageIdx >= 0) {
                const prevPage = albumPages[currentPageIdx];
                prevPage.classList.add('flipping');
                prevPage.classList.remove('active');
            }

            currentPageIdx++;
            albumPages[currentPageIdx].classList.add('active');
        }

        function startAutoFlip() {
            clearInterval(albumInterval);
            albumInterval = setInterval(flipRealistic, 1500);
        }

        albumBook.addEventListener('click', () => {
            if (!isBookOpen) {
                openBook();
            } else {
                flipRealistic();
                startAutoFlip();
            }
        });

        setTimeout(openBook, 1500);
    }

    // Layered Parallax Depth on Scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const speedText = 0.3;
        
        const heroLeft = document.querySelector('.hero-left');
        if (heroLeft) {
            heroLeft.style.transform = `translateY(${scrolled * speedText}px)`;
            heroLeft.style.opacity = `${1 - (scrolled * 0.002)}`;
        }

        // Global Scrolling BG
        const scrollBg = document.getElementById('scroll-bg');
        if (scrollBg) {
            scrollBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Page Transition for Links (Removed for stability)
    /*
    const links = document.querySelectorAll('a[href*=".html"]');
    links.forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) return;

            e.preventDefault();
            const targetUrl = link.href;
            document.body.classList.remove('active');
            
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 600);
        });
    });
    */

    // Final Post-Load active
    setTimeout(() => {
        document.body.classList.add('active');
    }, 100);

    // --- PREMIUM GALLERY SYSTEM ---
    const galleryItems = document.querySelectorAll('.gallery-item');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // 1. Initial Fade-In Animation
    const observerOptions = { threshold: 0.1 };
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 100);
            }
        });
    }, observerOptions);

    galleryItems.forEach(item => galleryObserver.observe(item));

    // 2. Category Filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update Active Button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => item.classList.add('show'), 50);
                } else {
                    item.classList.remove('show');
                    setTimeout(() => item.style.display = 'none', 400);
                }
            });
        });
    });

    // 3. Lightbox System
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    const prevBtn = document.querySelector('.lb-prev');
    const nextBtn = document.querySelector('.lb-next');
    const viewButtons = document.querySelectorAll('.view-btn');

    let currentGalleryIndex = 0;
    let visibleItems = [];

    function updateLightbox() {
        const item = visibleItems[currentGalleryIndex];
        const img = item.querySelector('img');
        const title = item.querySelector('h3').innerText;
        
        lightboxImg.src = img.src;
        lightboxCaption.innerText = title;
    }

    viewButtons.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Get currently visible items based on filter
            visibleItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
            // Find index of clicked item in visible items
            const parentItem = btn.closest('.gallery-item');
            currentGalleryIndex = visibleItems.indexOf(parentItem);
            
            updateLightbox();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    closeLightbox?.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    prevBtn?.addEventListener('click', () => {
        currentGalleryIndex = (currentGalleryIndex - 1 + visibleItems.length) % visibleItems.length;
        updateLightbox();
    });

    nextBtn?.addEventListener('click', () => {
        currentGalleryIndex = (currentGalleryIndex + 1) % visibleItems.length;
        updateLightbox();
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
        if (e.key === 'Escape') closeLightbox.click();
    });

    // Close on Background Click
    lightbox?.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox.click();
    });

    // --- SCROLL TO TOP BUTTON ---
    const scrollTopBtn = document.createElement('div');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});
