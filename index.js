//Std lib imports
const path = require('path');

//node module imports/vars 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//host our html
app.use('/', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/mail', (req, res) => {
	res.redirect('/contact.html');
})


app.listen(3000, () => {
	console.log('app is now listening on port 3000')
})
