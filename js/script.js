// Select all sections and navigation links
const section = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header nav a');
const header = document.querySelector('.header');

// Add click event listeners to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Enhanced scroll event handling
window.addEventListener('scroll', () => {
    // Sticky header logic
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    // Active section highlighting
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove active class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add active class to current section's link
            const currentLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (currentLink) {
                currentLink.classList.add('active');
            }
        }
    });
});

// Optional: Add scroll-up button functionality
const scrollUpBtn = document.querySelector('.footer-icontop a');
if (scrollUpBtn) {
    scrollUpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Add click event listeners to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Handle scroll events for active states and sticky header
window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove active class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add active class to current section's link
            const currentLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (currentLink) {
                currentLink.classList.add('active');
            }
        }
    });

    // Handle sticky header
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};