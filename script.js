document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');

    // Toggle Mobile Navbar Menu
    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = mobileMenu.querySelector('i');
        // Toggle icon visual between Hamburger and Close X
        if(icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when a navigation item is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenu.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
        });
    });

    // Simple scroll interaction to add shadow depth to header 
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px -10px rgba(2,12,27,0.7)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});