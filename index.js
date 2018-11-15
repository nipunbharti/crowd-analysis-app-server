const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
const config = require('./config/dev');

app.use(bodyParser.json());
mongoose.connect(config.mongoURI);

require('./routes/fetchCount')(app);



app.listen(port, function() {
	console.log(`Server on ${port}`);
});