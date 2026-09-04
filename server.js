const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sert tous les fichiers du dépôt (index.html, style.css, game.js) tels quels
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log('Serveur lancé sur le port ' + PORT);
});
