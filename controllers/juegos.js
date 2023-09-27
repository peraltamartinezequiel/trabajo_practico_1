const { request, response } = require('express');
const axios = require('axios');

const CLIENT_ID = process.env.CLIENT_ID;
const TOKEN = process.env.TOKEN;
const URL_BASE_JUEGOS = 'https://api.igdb.com/v4/games';

const fields = "cover.url,first_release_date,genres.name,name,platforms.name,summary,total_rating,franchise.name";


const get50Juegos = (_, res = response) => {

    axios.get(`${URL_BASE_JUEGOS}?fields=${fields}&limit=50`, {
        headers: {
            'Client-ID': CLIENT_ID,
            'Authorization': `Bearer ${TOKEN}`
        }
    })
    .then(({ status, data, statusText }) => {
        res.status(200).json({
            status,
            statusText,
            data
        });
    })
    .catch((error) => {
        res.status(error.response.status).json({ 
            status: error.response.status,
            msg: 'Error inesperado'
        })
    })
}


const getJuegoById = (req = request, res = response) => {
    const {id} = req.params; 

    axios.get(`${URL_BASE_JUEGOS}/${id}?fields=${fields}`, {
        headers: {
            'Client-ID': CLIENT_ID,
            'Authorization': `Bearer ${TOKEN}`
        }
    })
    .then(({ status, data, statusText }) => {
        // IGDB devuelve un 200 a pesar de no haber encontrado el juego pero con los datos vacíos
        if (data.length === 0) {
            res.status(404).json({
                status: 404,
                msg: 'Juego no encontrado'
            })
        } else {
            res.status(200).json({
                status,
                statusText,
                data
            })
        }
    })
    .catch((error) => {
        if (error.response.status == 400) {
            res.status(400).json({
                status: 400,
                msg: 'Solicitud incorrecta: verifique los parámetros'
            })
        } else {
            res.status(error.response.status).json({
                status: error.response.status,
                msg: 'Error inesperado'
            })
        }
    })
}


const getJuegoByField = (req = request, res = response) => {
    const {name} = req.query;

    axios.get(`${URL_BASE_JUEGOS}?search=${name}&fields=${fields}`, {
        headers: {
            'Client-ID': CLIENT_ID,
            'Authorization': `Bearer ${TOKEN}`
        }
    })
    .then(({ status, data, statusText }) => {
        if (data.length === 0) {
            res.status(404).json({
                status: 404,
                msg: 'Ningún juego coincide con el parámetro'
            })
        } else {
            res.status(200).json({
                status,
                statusText,
                data
            })
        }
    })
    .catch((error) => {
        res.status(error.response.status).json({
            status: error.response.status,
            msg: 'Error inesperado'
        })
    })
}


module.exports = {
    get50Juegos,
    getJuegoById,
    getJuegoByField
};