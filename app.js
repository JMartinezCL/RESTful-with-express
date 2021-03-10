const express = require('express');
const mongoose = require('mongoose');

const app = express();

if(process.env.ENV === 'Test'){
  console.log('\x1b[36m', 'This is a Test...' ,'\x1b[0m');
  const db = mongoose.connect('mongodb://localhost/bookAPI_Test');
}else {
  console.log('\x1b[36m', 'This is for real...' ,'\x1b[0m');
  const db = mongoose.connect('mongodb://localhost/bookAPI');
}

const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to API Books');
});

app.server = app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});

module.exports = app;