const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list'); 

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active'); 
});

document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {

        // event.preventDefault();
        document.querySelectorAll('.content-section') .forEach(Section =>{
            Section.classList.remove('active');
        });

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.classList.add('active');
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        if (navList.classList.contains('active')) { 
            navList.classList.remove('active'); 
        }
    });
});
