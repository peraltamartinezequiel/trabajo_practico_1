const { Router } = require('express');
const {getPersonajes, getPersonaje} = require('../controllers/personajes')

const rutas_personajes = Router();

rutas_personajes.get('/', getPersonajes);
rutas_personajes.get('/:id', getPersonaje);

module.exports = rutas_personajes;