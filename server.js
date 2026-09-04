const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Sert les fichiers du dossier "public" (index.html, style.css, game.js)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('Serveur lancé sur le port ' + PORT);
});
