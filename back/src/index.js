const http = require('http');
const PORT = 3001;
// const characters = require('./utils/data.js');
const getCharById = require('./controllers/getCharById.js');







http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');


// if(req.url.startsWith())
    if (req.url.includes('/rickandmorty/character')) {


        const id = req.url.split('/').pop();
        getCharById(res, id);


    }

        
        

}).listen(
    PORT,
    '127.0.0.1',
    ()=> console.log(`Server listening on http://localhost:${PORT}`)
)
