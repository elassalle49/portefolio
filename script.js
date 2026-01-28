// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1
};

// Typewriter Effect Function
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    element.classList.add('blink');

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed + Math.random() * 50);
        }
    }
    type();
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');

            const typewriter = entry.target.querySelector('.typewriter');
            if (typewriter && !typewriter.dataset.started) {
                typewriter.dataset.started = "true";
                setTimeout(() => {
                    typeWriter(typewriter, "Data Analyst", 120);
                }, 1000);
            }

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('[data-reveal]').forEach(el => {
    observer.observe(el);
});

// 3D Tilt Effect for Glass Cards
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`;
    });
});

// Smooth Scroll for Nav Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(3, 7, 18, 0.85)';
        nav.style.padding = '15px 40px';
    } else {
        nav.style.background = 'rgba(3, 7, 18, 0.5)';
        nav.style.padding = '20px 40px';
    }
});

// Interactive Skills (Optional micro-interaction)
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.borderColor = 'var(--accent-color)';
        tag.style.color = 'var(--accent-color)';
    });
    tag.addEventListener('mouseleave', () => {
        tag.style.borderColor = 'var(--glass-border)';
        tag.style.color = 'inherit';
    });
});
