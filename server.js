module.exports = (req, res, next)  => {
	if (req.method === 'POST') {

		// Converts POST to GET and move payload to query params
		req.method = 'GET';
		req.query = {}

		for (let p in req.body) req.query[p] = req.body[p];
	}
	// Continue to JSON Server router
	next();
}