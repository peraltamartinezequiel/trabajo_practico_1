const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.port = process.env.PORT || 3000;
        this.app = express();
        this.middleware();
        this.routers();
    }

    middleware() {
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    routers() {
        this.app.use('/api/v1/juegos', require('../routes/juegos'));
        this.app.use('/api/v1/personajes', require('../routes/personajes'));
        
        this.app.all('*', (_, res) => {
            res.send('400 Página no encontrada')
        })
    
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`);
        });
    }
}

module.exports = Server;