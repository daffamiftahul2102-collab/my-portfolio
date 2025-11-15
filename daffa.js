// JavaScript Lengkap dengan Peningkatan
document.addEventListener('DOMContentLoaded', function() {
    
    // ------------------------------------
    // 1. Mobile Menu Toggle dan Auto-Close
    // ------------------------------------
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenu.querySelector('i').classList.toggle('fa-bars');
        mobileMenu.querySelector('i').classList.toggle('fa-times'); // Mengubah icon X saat aktif
    });

    // Tutup menu mobile saat link diklik
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenu.querySelector('i').classList.add('fa-bars');
                mobileMenu.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    // ------------------------------------
    // 2. Smooth Scrolling
    // ------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ------------------------------------
    // 3. Portfolio Filter
    // ------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    // Tambahkan animasi fade-in saat ditampilkan
                    item.classList.add('fade-in'); 
                } else {
                    item.style.display = 'none';
                    item.classList.remove('fade-in'); 
                }
            });
        });
    });

    // ------------------------------------
    // 4. Animasi Progress Bar pada Skill Section
    // ------------------------------------
    const skillSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.skill-progress');

    const progressObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Saat section terlihat, jalankan animasi
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%'; // Reset sebelum animasi
                    setTimeout(() => {
                        bar.style.width = width; // Setel ke nilai asli
                    }, 100); 
                });
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi
            }
        });
    }, { threshold: 0.5 }); // Animasi berjalan saat 50% section terlihat

    progressObserver.observe(skillSection);

    // ------------------------------------
    // 5. Fade in animation on scroll (menggunakan IntersectionObserver)
    // ------------------------------------
    const fadeObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated'); // Ganti 'fade-in' menjadi 'animated'
                observer.unobserve(entry.target);
            }
        });
    }, fadeObserverOptions);

    // Semua elemen yang memiliki class 'fade-in'
    document.querySelectorAll('.fade-in').forEach(el => {
        fadeObserver.observe(el);
    });

    // ------------------------------------
    // 6. Header background change on scroll
    // ------------------------------------
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(30, 58, 138, 0.9)'; // Warna lebih gelap saat scroll
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'rgba(30, 58, 138, 0.95)';
            header.style.backdropFilter = 'blur(5px)';
        }
    });

    // ------------------------------------
    // 7. Form submission
    // ------------------------------------
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah berhasil dikirim. Saya akan segera merespon.');
        this.reset();
    });

});