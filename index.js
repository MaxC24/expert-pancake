const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

//express automatically looks for a index.html to send back to the client

// app.get('/*', (req, res) => {
// 	res.send(path.join(__dirname, '/static/index.html'));
// })

app.listen(3000, () =>  {
	console.log('Server is running on port' + 3000);
});

