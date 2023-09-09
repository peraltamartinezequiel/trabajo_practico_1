const { Router } = require('express');

const rutas_personajes = Router();

rutas_personajes.get('/personajes', (req, res) => {
    res.send('personajes');
});

module.exports = rutas_personajes;