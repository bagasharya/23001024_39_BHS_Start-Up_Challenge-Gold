const express = require('express');
const landingController = require('./controllers/landing');

const app = express();

app.set('view engine', 'ejs');

app.get('/', landingController.landing);

app.listen(1997, () => {
  console.log('Server Menyalaa');
});
