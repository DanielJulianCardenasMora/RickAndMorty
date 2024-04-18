const express = require("express");
const router = require("./routes");
const server = express();







// Middlewares
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://apicards.vercel.app/', 'http://localhost:5173/');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
server.use(express.json())
server.use('/rickandmorty', router)

// Rutas


module.exports = server;