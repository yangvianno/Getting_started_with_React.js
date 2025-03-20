const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
	console.log('server is up on port ${PORT}');
});

app.get('/msg', (req, res) => {
	console.log("Got the request");
	res.json({message: 'This works!'});
});