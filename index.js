const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/auth', require('./server/routes/auth'));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'server/static/index.html'));
})

app.listen(3000, () =>  {
	console.log('Server is running on port' + 3000);
});

