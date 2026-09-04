// ===== Données du joueur (pour l'instant en dur, remplacé plus tard par une vraie sauvegarde) =====
const playerData = {
  level: 4,
  levelMax: 10,
  gold: 320,
  goldMax: 999,
  spritz: 12,
  spritzMax: 50
};

// ===== Classement (données factices, sera remplacé par le vrai classement en ligne) =====
const ranking = [
  { name: "Aelys", score: 2140 },
  { name: "Korvun", score: 1985 },
  { name: "Mira", score: 1820 },
  { name: "Théo", score: 1690 },
  { name: "Sable", score: 1502 },
  { name: "Vous", score: 980 }
];

function renderStats() {
  document.getElementById('lv-value').textContent = playerData.level;
  document.getElementById('lv-fill').style.width = (playerData.level / playerData.levelMax * 100) + '%';

  document.getElementById('gold-value').textContent = playerData.gold;
  document.getElementById('gold-fill').style.width = (playerData.gold / playerData.goldMax * 100) + '%';

  document.getElementById('spritz-value').textContent = playerData.spritz;
  document.getElementById('spritz-fill').style.width = (playerData.spritz / playerData.spritzMax * 100) + '%';
}

function renderRanking() {
  const list = document.getElementById('ranking-list');
  list.innerHTML = ranking.map((p, i) => `
    <li>
      <span class="rank">${i + 1}</span>
      <span class="rname">${p.name}</span>
      <span class="rscore">${p.score}</span>
    </li>
  `).join('');
}

// ===== Onglets : pour l'instant, un simple message. Chaque onglet sera construit à une étape suivante. =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    console.log('Onglet cliqué :', tab);
    // Ici viendra l'ouverture du panneau correspondant (Collection, Amalgame, Donjon, Boutique, Personnage, Duel)
  });
});

document.getElementById('settings-btn').addEventListener('click', () => {
  console.log('Réglages ouverts (à construire)');
});

document.getElementById('add-friend-btn').addEventListener('click', () => {
  console.log('Ajout d\'un ami (à construire)');
});

renderStats();
renderRanking();
