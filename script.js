// 1. Animation d'entrée des cartes (Apparition décalée)
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        // On prépare l'état initial
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)"; // Effet de rebond léger

        // On déclenche l'animation avec un petit délai entre chaque carte
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 200);
    });
});

// 2. Interaction de "Récompense" sur les boutons
// Ajoute un petit effet visuel quand on clique sur "SUIVANT"
const nextButtons = document.querySelectorAll('.btn-next');
nextButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        // Simule un flash de dopamine visuel
        document.body.style.backgroundColor = "#fff";
        setTimeout(() => {
            document.body.style.backgroundColor = "#f3f4f6";
        }, 100);
    });
});

// 3. Gestion dynamique du menu actif
// S'assure que l'onglet sur lequel on est reste bien en couleur
const currentUrl = window.location.href;
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    if (currentUrl.includes(link.getAttribute('href'))) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
