// 1. Animation d'apparition au défilement (Scroll Reveal)
// Pour que les cartes de texte apparaissent doucement quand on descend
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // État initial avant l'animation
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.8s ease-out";
        observer.observe(card);
    });
});

// 2. Simulation interactive de Dopamine
// À utiliser sur la page "Mécanisme" ou "Addiction"
function simulerDopamine() {
    const btn = document.querySelector('.btn-next');
    
    // Effet visuel de "flash" de satisfaction
    document.body.style.backgroundColor = "#eef2ff"; 
    setTimeout(() => {
        document.body.style.backgroundColor = "#f8fafc";
    }, 200);

    console.log("Système de récompense activé !");
}

// 3. Feedback visuel sur le menu
// Pour que l'utilisateur sache toujours où il se situe
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    if (currentPath.includes(link.getAttribute('href'))) {
        link.classList.add('active');
    }
});
