const { Router } = require('express');
const { get50Juegos } = require('../controllers/juegos');

const rutas_juegos = Router();

rutas_juegos.get('/', get50Juegos);

module.exports = rutas_juegos;