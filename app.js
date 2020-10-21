const express = require('express');
const app = express();
const config = require('./config');
const mongoose = require('mongoose');
const setupControl = require('./controllers/setupController.js');
const apiController = require('./controllers/apiControler.js')



const port = process.env.PORT || 3000;

//public folder is just '/'. localhost:3000/ to serve whats inside public folder
//TODO: install angularjs/setup to work on client side js.
app.use('/',express.static('./public'));

app.set('view engine','ejs');

mongoose.connect(config.getDbConnectionString(),{
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
  });
//mongodb by default is a single connection that stays open
//can run different queries/updates


//controllers folder, setupController.js file: run it
setupControl(app)
//corre a API
apiController(app);
app.listen(port);


