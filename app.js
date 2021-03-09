const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI');
const bookRouter = express.Router();
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

bookRouter.route('/books')
.post((req, res) => {
  const book = new Book(req.body);
  console.log(book);
  return res.json(book);
})
.get((req, res) => {
  const query = {};
  if(req.query.genre){
    query.genre = req.query.genre;
  }
  Book.find(query, (err, books) => {
    if(err){
      return res.send(err);
    }
    return res.json(books);    
  });  
});

bookRouter.route('/books/:bookId').get((req, res) => {  
  Book.findById(req.params.bookId, (err, books) => {
    if(err){
      return res.send(err);
    }
    return res.json(books);    
  });  
});

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon api');
});

app.listen(port, () => {
  console.log('Running on port: ' + port);
});