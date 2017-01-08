const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config');
const passport = require('passport');

require('./server/models').connect(config.dbUri);

const app = express();

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

app.use(bodyParser.urlencoded({extended: false}));

app.use(passport.initialize());

//load password strategies:
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

//pass the authentication checker middleware
const authCheckMiddleWare = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'server/static/index.html'));
})

app.listen(3000, () =>  {
	console.log('Server is running on port' + 3000);
});

