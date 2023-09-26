const { Router } = require('express');
const {getPersonajes, getPersonajeId, getPersonajeParams} = require('../controllers/personajes')

const rutas_personajes = Router();

rutas_personajes.get('/populares', getPersonajes);
rutas_personajes.get('/populares/:id', getPersonajeId);
rutas_personajes.get('/populares_params', getPersonajeParams);

module.exports = rutas_personajes;