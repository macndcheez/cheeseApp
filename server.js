require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.envPORT || 4000;
const cheeseController = require('./controllers/cheeseController')

app.use(morgan('tiny'));
app.use(express.urlencoded({extended: true}));

app.use('/cheese', cheeseController)

app.listen(PORT, () => console.log('running on port', PORT))
