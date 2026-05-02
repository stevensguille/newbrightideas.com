/**
 * Main application logic for New Bright Ideas
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('New Bright Ideas - Active Protection Enabled');
    
    // 1. Initialize Protected Emails
    initEmailProtection();
    
    // 2. Initialize Reveal Animations
    initRevealAnimations();
});

function initEmailProtection() {
    const emailLinks = document.querySelectorAll('.protected-email');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const user = link.getAttribute('data-user');
            const domain = link.getAttribute('data-domain');
            
            if (user && domain) {
                const email = `${user}@${domain}`;
                window.location.href = `mailto:${email}`;
            }
        });

        link.addEventListener('mouseenter', () => {
            const user = link.getAttribute('data-user');
            const domain = link.getAttribute('data-domain');
            if (user && domain) {
                link.title = `Mail to: ${user}@${domain}`;
            }
        });
    });
}

function initRevealAnimations() {
    const observer = new IntersectionObserver(
        (entries) => entries.forEach(e => { 
            if (e.isIntersecting) e.target.classList.add('visible'); 
        }),
        { threshold: 0.07 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
