// Données scientifiques détaillées pour l'interactivité
const infoData = {
    amygdale: "<strong>L'AMYGDALE (Le Détecteur) :</strong> Elle est le centre de traitement des émotions. En cas de stress, elle s'hyperactive pour envoyer un signal de détresse à l'hypothalamus, court-circuitant l'analyse rationnelle.",
    hypo: "<strong>L'HYPOTHALAMUS (Le Commandant) :</strong> Il reçoit le signal de l'amygdale et active le système nerveux sympathique. Il agit comme un centre de commande qui libère les premières hormones de stress.",
    pfc: "<strong>LE CORTEX PRÉFRONTAL (Le Modérateur) :</strong> C'est la zone du raisonnement. Son rôle est normalement de calmer l'amygdale. En cas de stress intense, il est 'déconnecté', rendant la pensée logique difficile."
};

function revealInfo(key) {
    const box = document.getElementById('bio-result');
    box.style.opacity = "0";
    setTimeout(() => {
        box.innerHTML = infoData[key];
        box.style.opacity = "1";
        box.style.backgroundColor = "#fff";
        box.style.borderStyle = "solid";
    }, 200);
}

// Fonction de navigation
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}