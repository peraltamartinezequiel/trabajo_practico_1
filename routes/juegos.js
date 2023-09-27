const { Router } = require('express');
const { get50Juegos, getJuegoById, getJuegoByField } = require('../controllers/juegos');

const rutas_juegos = Router();

rutas_juegos.get('/', get50Juegos);
rutas_juegos.get('/filtrar', getJuegoByField);
rutas_juegos.get('/:id', getJuegoById);

module.exports = rutas_juegos;