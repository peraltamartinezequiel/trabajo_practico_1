const axios = require('axios');
const {request, response} = require('express');
const {client_id, token} = require('axios');

const fields = 'akas,checksum,country_name,created_at,description,games,gender,mug_shot,name,slug,species,updated_at,url';

const getPersonajes = (req = request, res = response) => {
    console.log(req.params);
    axios.get(`https://api.igdb.com/v4/characters?fields=${fields}&limit=50`,{
        'Client-ID': process.env.CLIENT_ID || client_id,
        'Authorization': process.env.TOKEN || token
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
        res.status(403).json({
            status:403,
            msg:'cliente no autorizado.'
        });
    });
}

const getPersonaje = (req = request, res = response) => {
    console.log(req.params);
    const {id} = req.params;
    axios.get(`https://api.igdb.com/v4/characters/?id=${id}?fields=${fields}`,{
        'Client-ID': process.env.CLIENT_ID || client_id,
        'Authorization': process.env.TOKEN || token
    })
    .then(({status, data, statusText}) => {
        console.log();
        res.status(200).json({
            status, 
            data, 
            statusText,
            id
        });
    })
    .catch((error)=>{
        console.log(error);
        res.status(403).json({
            status:403,
            msg:'cliente no autorizado.'
        });
    })
    .catch((error)=>{
        console.log(error);
        res.status(400).json({
            status:400,
            msg:'Error inesperado.'
        })
    });
}

module.exports = {
    getPersonajes,
    getPersonaje
}