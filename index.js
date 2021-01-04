// Std lib imports
const path = require('path');

require('dotenv').config();

// node module imports/vars
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SG_API_KEY);

// host our html
app.use('/', express.static(path.join(__dirname, 'public')));

// Import the body parser
app.use(bodyParser.urlencoded({ extended: true }));

// route for getting in contact with me
app.post('/mail', (req, res) => {
  const contact = req.body;

  // Mail object for sending
  const mail = {
    from: process.env.EMAIL, // sender address
    to: process.env.TO_EMAIL, // list of receivers
    subject: 'I want to get in contact with you!', // Subject line
    text: `
			Greetings from: ${contact.firstName} ${contact.lastName}\n
			Email: ${contact.email}\n
			Description: ${contact.desc}\n
		`,
  };

  sgMail.send(mail);
  res.redirect('/contact.html');
});


app.listen(process.env.PORT || 3000, () => {
  console.log('app is now listening on port 3000');
});
