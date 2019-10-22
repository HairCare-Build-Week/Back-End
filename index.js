//import the server
const server = require('./api/server.js');

const port = process.env.PORT || 5000;

//add the port listener
server.listen(port, () => {
  console.log(`\n Time to build! Server is Running on http://localhost:${port} \n`)
}) 