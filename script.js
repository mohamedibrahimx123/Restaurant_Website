document.addEventListener('DOMContentLoaded', function () {
    // ========== Smooth Scroll for Links ==========
    document.querySelectorAll('nav a, .btn').forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.hash && this.hash !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.hash);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========== Sticky Navbar on Scroll ==========
    const navbar = document.querySelector('.nav-bar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('sticky', window.scrollY > 100);
    });

    // ========== Zoom Effect for Menu Cards ==========
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

    // ========== Lightbox for Gallery ==========
    const galleryImages = document.querySelectorAll('.img-gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.style.position = 'fixed';
            lightbox.style.top = '0';
            lightbox.style.left = '0';
            lightbox.style.width = '100%';
            lightbox.style.height = '100%';
            lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            lightbox.style.display = 'flex';
            lightbox.style.justifyContent = 'center';
            lightbox.style.alignItems = 'center';
            lightbox.style.zIndex = '1000';
            lightbox.style.cursor = 'zoom-out';

            const lightboxImg = document.createElement('img');
            lightboxImg.src = img.src;
            lightboxImg.style.maxWidth = '80%';
            lightboxImg.style.maxHeight = '80%';
            lightboxImg.style.borderRadius = '10px';

            lightbox.appendChild(lightboxImg);
            document.body.appendChild(lightbox);

            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });

    // ========== Contact Form Submission ==========
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);

            // Here you can add AJAX code to send data to the server
            alert('Message sent successfully! We will contact you soon.');
            this.reset();
        });
    }

    // ========== Display Current Date and Time ==========
    function updateDateTime() {
        const now = new Date();
        const dateElement = document.querySelector('#date-display');
        if (dateElement) {
            dateElement.textContent = now.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
    }
    updateDateTime();

    // ========== Back to Top Button ==========
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '&uarr;';
    backToTopBtn.style.position = 'fixed';
    backToTopBtn.style.bottom = '20px';
    backToTopBtn.style.right = '20px';
    backToTopBtn.style.width = '50px';
    backToTopBtn.style.height = '50px';
    backToTopBtn.style.borderRadius = '50%';
    backToTopBtn.style.backgroundColor = '#D4AF37';
    backToTopBtn.style.color = 'white';
    backToTopBtn.style.border = 'none';
    backToTopBtn.style.cursor = 'pointer';
    backToTopBtn.style.display = 'none';
    backToTopBtn.style.zIndex = '100';
    backToTopBtn.style.fontSize = '20px';

    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});