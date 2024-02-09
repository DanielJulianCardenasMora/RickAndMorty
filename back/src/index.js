const server = require('./app');
const { conn } = require('./DB_connection')
require('dotenv').config()
const { PORT } = process.env






server.listen(PORT, async () => {
  await conn.sync()
  console.log("Server listening on port:", PORT);
});
