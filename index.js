//Std lib imports
const path = require('path');

//node module imports/vars 
const express = require('express');
const app = express();

//host our html
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
	console.log('app is now listening on port 3000')
})
