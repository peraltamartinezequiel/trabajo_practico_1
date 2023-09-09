const { Router } = require('express');
const rutas_juegos = Router();

rutas_juegos.get('/juegos', (req, res) => {
    res.send('juegos');
});

module.exports = rutas_juegos;