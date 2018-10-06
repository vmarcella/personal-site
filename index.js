//Std lib imports
const path = require('path');

//node module imports/vars 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

if(!process.env.PORT){
	require('dotenv').config()
}

//host our html
app.use('/', express.static(path.join(__dirname, 'public')));

//Import the body parser
app.use(bodyParser.urlencoded({ extended: true }));

//route for getting in contact with me
app.post('/mail', (req, res) => {
	console.log(req.body)
	res.redirect('/contact.html');
})


app.listen(3000, () => {
	console.log('app is now listening on port 3000')
})
