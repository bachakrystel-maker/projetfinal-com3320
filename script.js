// --- Script pour le Schéma Interactif ---

// 1. Définition des textes (Content Management)
// À modifier avec les recherches réelles de ton équipe !
const zoneData = {
    'atv-zone': {
        title: "Aire Tegmentale Ventrale (ATV)",
        text: "L'ATV est l'un des principaux points de départ de la dopamine. C'est ici que sont situés les corps cellulaires des neurones dopaminergiques qui projettent vers le noyau accumbens. Elle s'active dès qu'un signal annonce une récompense potentielle."
    },
    'accumbens-zone': {
        title: "Noyau Accumbens",
        text: "Souvent appelé 'le centre du plaisir', le noyau accumbens est la station d'arrivée de la dopamine. Il est crucial pour la motivation, l'apprentissage de l'habitude et la sensation de récompense. Les addictions 'piratent' cette zone en y libérant massivement de la dopamine."
    }
};

// 2. Écouteur de clics sur le SVG
document.addEventListener("DOMContentLoaded", () => {
    const clickableZones = document.querySelectorAll('.clickable-zone');
    const infoPanel = document.getElementById('info-panel');
    const panelTitle = document.getElementById('panel-title');
    const panelText = document.getElementById('panel-text');
    const closeBtn = document.getElementById('close-panel');

    clickableZones.forEach(zone => {
        zone.addEventListener('click', () => {
            const data = zoneData[zone.id]; // Récupère les infos selon l'ID cliqué
            
            if (data) {
                // Met à jour le contenu du panneau
                panelTitle.innerText = data.title;
                panelText.innerText = data.text;
                
                // Affiche le panneau
                infoPanel.classList.remove('hidden');
            }
        });
    });

    // 3. Fermeture du panneau
    closeBtn.addEventListener('click', () => {
        infoPanel.classList.add('hidden');
    });
});
