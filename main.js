/**
 * Main application logic
 * Handles scroll-triggered animations and UI interactions.
 */

const servicesData = {
    roadmap: {
        title: "Bridging the Gap: Strategic Technology Mapping",
        desc: `<p>Technology only delivers value when it is precisely mapped to the business challenges it aims to solve. At New Bright Ideas, we move beyond the hype to help management teams navigate the complexities of digital evolution. Our process begins with a rigorous diagnostic of your current state, performing a deep-dive analysis of existing workflows to identify the exact friction points—technical or organizational—that are stalling your velocity.</p>

<p>We then translate these challenges into actionable blueprints by identifying the key personas, data assets, and use cases that drive your operation. By understanding who interacts with your data and where that data lives, we create a foundation for transformation that is both practical and sustainable. This phase ensures that any subsequent technology adoption is grounded in the reality of your daily business needs.</p>

<p>To ensure long-term viability, we filter these use cases through a lens of corporate best practices and Safe AI governance. Leveraging our expertise in ISO 42001, we de-risk your innovation by ensuring every solution—whether leveraging Large Language Models or traditional automation—is secure, ethical, and compliant. This "governance-first" approach allows you to move faster by providing the guardrails necessary for confident experimentation.</p>

<p>Our cross-domain experience allows us to accelerate this analysis with pre-validated insights tailored to your specific industry:</p>
<ul style="margin-left: 2rem; margin-bottom: 1rem;">
  <li><strong>Retail:</strong> Optimizing complex supply chains and customer-facing data streams.</li>
  <li><strong>Finance:</strong> Implementing high-stakes strategy within strict regulatory frameworks.</li>
  <li><strong>Engineering:</strong> Streamlining technical lifecycles and complex system integrations.</li>
</ul>

<p>The final output is a governed, strategic roadmap that maps your unique use cases to the ideal software assets, whether commercial off-the-shelf (COTS) or bespoke builds. This document serves as your organization’s North Star, moving you away from reactive troubleshooting and toward a future of managed, scalable growth. At New Bright Ideas, we don't just implement technology; we architect the moves that move your business forward.</p>`
    },
    automation: {
        title: "Controlled Innovation: Automation & AI Governance",
        desc: `<p>The rush to integrate Artificial Intelligence often outpaces the frameworks required to manage it. Without a robust governance model, organizations face significant "shadow AI" risks, including data leakage, algorithmic bias, and unpredictable model drift. As automation scales to touch every facet of the enterprise, the pressure to prove that your underlying AI models are secure, ethical, and transparent will become a defining factor in market trust and operational stability.</p>

<p>Deploying AI in a vacuum creates a fragility that can derail even the most ambitious digital strategies. When automation operates without oversight, the resulting "black box" logic makes auditing impossible and regulatory compliance a moving target. New Bright Ideas addresses these challenges by shifting the focus from mere implementation to <strong>responsible orchestration</strong>, ensuring that your automated systems are as accountable as they are efficient.</p>

<p>Using the <strong>ISO 42001</strong> standard as our North Star, we provide a comprehensive audit of your current AI approach to identify structural and procedural gaps. We don't just point out vulnerabilities; we map them against international benchmarks for AI Management Systems (AIMS). This rigorous evaluation covers everything from data procurement and risk assessment to the continuous monitoring of automated outputs, ensuring your governance keeps pace with your innovation.</p>

<p>Our remediation process follows a clear, governed path to maturity:</p>
<ul style="margin-left: 2rem;">
  <li><strong>Risk Perimeter Mapping:</strong> Defining where AI is used and the specific risks associated with each deployment.</li>
  <li><strong>Policy Architecture:</strong> Establishing the internal guardrails and ethical standards required by ISO 42001.</li>
  <li><strong>Automated Oversight:</strong> Implementing technical controls that provide real-time visibility into model performance.</li>
  <li><strong>Continuous Compliance:</strong> Designing an iterative audit cycle that evolves alongside changing global regulations.</li>
</ul>

<p>The business of the future will be built on autonomous systems, but those systems are only as strong as the governance that anchors them. New Bright Ideas leverages deep expertise in technology strategy and ISO standards to help you build an AI-ready organization that is both agile and resilient. By closing the gap between capability and control, we ensure that your move toward automation is a move toward sustainable, predictable growth.</p>`
    },
    transformation: {
        title: "Strategic Resilience: Enterprise Change Management",
        desc: `<p>Technology alone cannot transform an organization; people do. As AI emerges as the most profound disruptor of this decade, the traditional ways of working are being fundamentally rewritten. At New Bright Ideas, we specialize in bridging the gap between technical deployment and human adoption. We ensure that your workforce isn't just reacting to change, but is equipped to lead it, turning potential disruption into a sustained competitive advantage.</p>

<p>Our team brings a sophisticated toolkit to every engagement, with deep familiarity in industry-leading frameworks like Prosci (ADKAR). We have successfully applied these methodologies at scale across a diverse range of enterprise clients, moving beyond theoretical models to deliver practical, people-centric results. By focusing on awareness, desire, and ability, we minimize the "productivity dip" that often accompanies large-scale technical shifts, ensuring a smooth transition from legacy processes to future-state operations.</p>

<p>The integration of AI requires more than a software rollout; it demands a psychological and operational shift. We help management teams build comprehensive change management plans that actively engage staff at all levels. By prioritizing transparent communication and targeted upskilling, we ensure that your most valuable assets—your people—are not left behind. This inclusive approach fosters a culture of innovation where employees see AI as an augmentative tool rather than a threat to their roles.</p>

<p>A company can only embrace the future with confidence when three critical elements converge:</p>
<ul style="margin-left: 2rem;">
  <li><strong>The Roadmap:</strong> A clear, data-driven vision of where the technology is going.</li>
  <li><strong>The Governance:</strong> The ISO 42001 guardrails that ensure the journey is safe and compliant.</li>
  <li><strong>The Change Plan:</strong> The human framework that ensures the organization is ready to move.</li>
</ul>

<p>When these three pillars are aligned, "Change is Inevitable" ceases to be a warning and becomes a strategy. New Bright Ideas provides the expertise to synchronize your technology mapping, AI governance, and people strategy into a single, cohesive path forward. With this integrated approach, your enterprise doesn't just survive the era of AI—it masters it through smarter moves and stronger, governed growth.</p>`
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();

    const homeView = document.getElementById('home-view');
    const serviceView = document.getElementById('service-view');
    const backBtn = document.getElementById('service-back-btn');
    const serviceTitle = document.getElementById('service-title');
    const serviceDesc = document.getElementById('service-desc');

    const serviceArrows = document.querySelectorAll('.service-arrow, .service-link');
    serviceArrows.forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            e.preventDefault();
            const serviceKey = (e.currentTarget || e.target).getAttribute('data-service');
            const data = servicesData[serviceKey];
            if (data && homeView && serviceView) {
                serviceTitle.textContent = data.title;
                serviceDesc.innerHTML = data.desc;
                homeView.style.display = 'none';
                
                // Hide other optional views if user clicks footer links directly from them
                const contactView = document.getElementById('contact-view');
                if(contactView) contactView.style.display = 'none';
                const privacyView = document.getElementById('privacy-view');
                if(privacyView) privacyView.style.display = 'none';

                serviceView.style.display = 'block';
                window.scrollTo(0, 0);
            }
        });
    });

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            serviceView.style.display = 'none';
            homeView.style.display = 'block';
            window.scrollTo(0, 0);
        });
    }

    const contactView = document.getElementById('contact-view');
    const contactBackBtn = document.getElementById('contact-back-btn');

    // Attach listener to any button or link labeled 'Get Started' or 'Contact'
    const ctaButtons = Array.from(document.querySelectorAll('button, a')).filter(el => {
        const text = el.textContent.trim().toLowerCase();
        return text === 'get started' || text === 'contact';
    });
    
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (homeView && contactView) {
                homeView.style.display = 'none';
                
                // Hide other optional views
                if(serviceView) serviceView.style.display = 'none';
                const privacyView = document.getElementById('privacy-view');
                if(privacyView) privacyView.style.display = 'none';
                
                contactView.style.display = 'block';
                window.scrollTo(0, 0);
            }
        });
    });

    if (contactBackBtn) {
        contactBackBtn.addEventListener('click', () => {
            if (contactView && homeView) {
                contactView.style.display = 'none';
                homeView.style.display = 'block';
                window.scrollTo(0, 0);
            }
        });
    }
    
    // Handle contact form submission out to mail service silently
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm)
            }).then(() => {
                contactForm.innerHTML = '<h3 style="color: #fff; margin-bottom: 1rem;">Thank you!</h3><p style="color: var(--text-muted);">We have received your message and will be in touch shortly.</p>';
            }).catch(() => {
                contactForm.innerHTML = '<h3 style="color: #fff; margin-bottom: 1rem;">Thank you!</h3><p style="color: var(--text-muted);">We have received your message and will be in touch shortly.</p>';
            });
        });
    }

    // Home link returning logically
    const homeLinks = document.querySelectorAll('.home-link');
    homeLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if(e.currentTarget.getAttribute('href') === '#') {
                e.preventDefault();
            }
            if(serviceView) serviceView.style.display = 'none';
            if(contactView) contactView.style.display = 'none';
            if(privacyView) privacyView.style.display = 'none';
            if(aboutView) aboutView.style.display = 'none';
            if(homeView) homeView.style.display = 'block';
            window.scrollTo(0, 0);
        });
    });

    // Privacy Policy logic
    const privacyView = document.getElementById('privacy-view');
    const privacyBackBtn = document.getElementById('privacy-back-btn');
    const privacyLinks = document.querySelectorAll('.privacy-link');

    privacyLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (homeView && privacyView) {
                homeView.style.display = 'none';
                if(serviceView) serviceView.style.display = 'none';
                if(contactView) contactView.style.display = 'none';
                privacyView.style.display = 'block';
                window.scrollTo(0, 0);
            }
        });
    });

    if (privacyBackBtn) {
        privacyBackBtn.addEventListener('click', () => {
            if (privacyView && homeView) {
                privacyView.style.display = 'none';
                homeView.style.display = 'block';
                window.scrollTo(0, 0);
            }
        });
    }

    // About Us logic
    const aboutView = document.getElementById('about-view');
    const aboutBackBtn = document.getElementById('about-back-btn');
    const aboutLinks = document.querySelectorAll('.about-link');

    aboutLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (homeView && aboutView) {
                homeView.style.display = 'none';
                if(serviceView) serviceView.style.display = 'none';
                if(contactView) contactView.style.display = 'none';
                if(privacyView) privacyView.style.display = 'none';
                aboutView.style.display = 'block';
                window.scrollTo(0, 0);
            }
        });
    });

    if (aboutBackBtn) {
        aboutBackBtn.addEventListener('click', () => {
            if (aboutView && homeView) {
                aboutView.style.display = 'none';
                homeView.style.display = 'block';
                window.scrollTo(0, 0);
            }
        });
    }
});

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.hidden');
    animatedElements.forEach(el => observer.observe(el));
}