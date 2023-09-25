// json-server.js
const jsonServer = require('json-server');
const bodyParser = require("body-parser");
const https = require('https');
const server = jsonServer.create();
//const router = jsonServer.router('https://raw.githubusercontent.com/marthin88/mockapi/main/db.json');

const middlewares = jsonServer.defaults();
const fs = require('fs');

const file = fs.createWriteStream("db.json");
const request = https.get("https://raw.githubusercontent.com/marthin88/mockapi/main/db.json", function(response) {
   response.pipe(file);

   // after download completed close filestream
   file.on("finish", () => {
       file.close();
       console.log("Download Completed");
	   const router = jsonServer.router("db.json");
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
	extended: true
}));

server.use(function (req, res, next) {
	if (req.method === 'POST') {

		// Converts POST to GET and move payload to query params
		req.method = 'GET';
		req.query = {}

		for (let p in req.body) req.query[p] = req.body[p];
	}
	// Continue to JSON Server router
	next();
});

server.use(middlewares)
server.use(router)
const port = process.env.npm_config_port;
server.listen(port, () => console.log(`JSON Server is running on port ${port} ...`))
   });
});
