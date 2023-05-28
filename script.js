window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*=' + id  + ']').classlist.add('active');
            });
        };
        
    });

    // sticky navbar

 let header = document.querySelector('header');
 header.classList.toggle('sticky', window.scrollY > 100);
};


ScrollReveal({ 
    reset: true,
    distance: '10px',
    duration: 2000,
    delay: 100
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'top' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });