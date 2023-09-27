const axios = require('axios');
const {request, response} = require('express');
const {client_id, token} = require('axios');

const CLIENT_ID = process.env.CLIENT_ID || client_id
const TOKEN = process.env.TOKEN || token

const fields = 'akas,checksum,country_name,created_at,description,games.name,gender,mug_shot,name,slug,species,updated_at,url';

const getPersonajes = (req = request, res = response) => {
    console.log(req.params);
    axios.get(`https://api.igdb.com/v4/characters?fields=${fields}&limit=50`,{
        headers: {
            'Client-ID': CLIENT_ID,
            'Authorization': `Bearer ${TOKEN}`
        }
    })
    .then(({status, data, statusText}) => {
        console.log();
        res.status(200).json({
            status, 
            data, 
            statusText
        });
    })
    .catch((error)=>{
        console.log(error);
        if (error.response.status == 400){
            res.status(400).json({
                status:400,
                msg:'Error inesperado.'
            });
        } else {
            res.status(401).json({
                status:401,
                msg:'cliente no autorizado.'
            });
        }
    });
}

const getPersonajeParams = (req = request, res = response) => {
    console.log(req.params);
    const {name, slug} = req.query;
    axios.get(`https://api.igdb.com/v4/characters?search=${name}&search=${slug}&fields=${fields}`,{
        headers: {
            'Client-ID': CLIENT_ID,
            'Authorization': `Bearer ${TOKEN}`
        }
    })
    .then(({status, data, statusText}) => {
        console.log();
        if (data.length == 0) {
            res.status(404).json ({
                status:404,
                msg:'No encontrado'
            });
        } else {
            res.status(200).json({
                status, 
                data, 
                statusText,
                name,
                slug
            });
        }
    })
    .catch((error)=>{
        console.log(error);
        if (error.response.status == 400){
            res.status(400).json({
                status:400,
                msg:'Error inesperado.'
            });
        } else {
            res.status(401).json({
                status:401,
                msg:'cliente no autorizado.'
            });
        }
    });
}

const getPersonajeId = (req = request, res = response) => {
    console.log(req.params);
    const {id} = req.params;
    axios.get(`https://api.igdb.com/v4/characters/${id}?fields=${fields}`,{
        headers: {
            'Client-ID': CLIENT_ID,
            'Authorization': `Bearer ${TOKEN}`
        }
    })
    .then(({status, data, statusText}) => {
        console.log();
        if (data.length == 0) {
            res.status(404).json ({
                status:404,
                msg:'No encontrado'
            });
        } else {
            res.status(200).json({
                status, 
                data, 
                statusText,
                id
            });
        }
    })
    .catch((error)=>{
        console.log(error);
        if (error.response.status == 400){
            res.status(400).json({
                status:400,
                msg:'Error inesperado.'
            });
        } else {
            res.status(401).json({
                status:401,
                msg:'cliente no autorizado.'
            });
        }
    });
}

module.exports = {
    getPersonajes,
    getPersonajeId,
    getPersonajeParams
}