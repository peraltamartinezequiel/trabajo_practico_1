const { request, response } = require('express');
const axios = require('axios');

const fields = "age_ratings,alternative_names,category,cover,first_release_date,franchises,genres,name,platforms,summary,total_rating";

const get50Juegos = (req = request, res = response) => {

    axios.get(`https://api.igdb.com/v4/games?fields=${fields}&limit=50`, {
        headers: {
            'Client-ID': process.env.CLIENT_ID,
            'Authorization': process.env.TOKEN
        }
    })
    .then(({ status, data, statusText }) => {
        res.status(200).json({
            status,
            statusText,
            data,
        });
    })
    .catch((error) => {
        // esto hay que mejorarlo
        console.log(error);
        res.status(400).json({
            status: 400,
            msg: 'Error inesperado'
        })
    })
}

module.exports = {
    get50Juegos
};