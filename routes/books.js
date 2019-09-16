const express = require('express');
const Books = require('../models/books.js');
const db = require('../data/dbConfig.js');


const router = express.Router();




router.get('/', (req, res) => {
  db('books')
    .select('books.title', 'a.authors', 'r.avg_rating')
    // .count('* as num_authors')
    // .count('* as num_reviews')
    .with('a', qb => {
      qb
        .select('book_id', db.raw("json_agg(json_build_object('id', books_authors.author_id, 'name', authors.name)) as authors"))
        // .count('* as num_authors')
        .from('books_authors')
        .join('authors', 'authors.id', 'books_authors.id')
        .groupBy('books_authors.book_id');
    })
    .with('r', qb => {
      qb
        .select('book_id')
        .avg('reviews.rating as avg_rating')
        .from('reviews')
        .groupBy('reviews.book_id');
    })
    // .join('books_authors', 'books_authors.book_id', 'books.id')
    .leftJoin('a', 'books.id', 'a.book_id')
    .leftJoin('r', 'books.id', 'r.book_id')
    // .join('reviews', 'reviews.book_id', 'books.id')
    // .groupBy('books.id')
    .then(books => res.json(books));
});

/**
   @api {get} books/?featured=:featured Request books
   @apiName GetBooks
   @apiGroup Books
   
   @apiParam {Boolean} featured If true, return only featured books. False, return all books. False by default.
   
   @apiSuccess {Array} books an array of book objects
   
   @apiSuccessExample Success-reponse:
   HTTP/1.1 200 OK
   [ { 
     id: 1,
     title: 'Classical Mechanics',
     isbn: '9781891389221',
     cover_url: 'https://www.uscibooks.com/taycm.jpg',
     description:
     'John Taylor has brought to his most recent book, Classical Mechanics, all of the clarity and insight that made his Introduction to Error Analysis a best-selling text.',
     average: 4.25,
     edition: '1',
     year: 2005,
     featured: true,
     publisher_id: 1,
     created_at: null,
     updated_at: null,
     subjects: [{id: 1, name: 'Physics'}],
     authors: [{id: 1, name: 'John R. Taylor'}],
     publisher: 'University Science Books' 
   } ]
*/

router.get('/', (req, res) => {
  const {featured} = req.query;
  (featured ? Books.getFeatured() : Books.get())
    .then(books => res.status(200).json(books))
    .catch(error => res.status(500).json({
      message: 'Error getting books.',
      error: error.toString()
    }));
});

/**
   @api {get} books/:id Request book by id
   @apiName GetBook
   @apiGroup Books

   @apiHeader {String} Authorization json web token (only needed if you want user_review)

   @apiParam {Number} id book id
   
   @apiSuccess {Number} id book id
   @apiSuccess {String} title book title
   @apiSuccess {String} isbn isbn 13 string with no formatting
   @apiSuccess {String} cover_url a url to a large book cover
   @apiSuccess {String} description book description
   @apiSuccess {Number} average The average rating of the book. Null if there are no ratings.
   @apiSuccess {String} edition book edition
   @apiSuccess {Number} year year published
   @apiSuccess {Bool} featured featured
   @apiSuccess {Object} user_review User review object or null (only if logged in)
   @apiSuccess {Number} publisher_id publisher id
   @apiSuccess {String} publisher publisher name
   @apiSuccess {Array} authors array of author objects
   @apiSuccess {Array} reviews array of review objects
   
   @apiSuccessExample Success-reponse:
   HTTP/1.1 200 OK
   { id: 1,
     title: 'Classical Mechanics',
     isbn: '9781891389221',
     cover_url: 'https://www.uscibooks.com/taycm.jpg',
     description:
     'John Taylor has brought to his most recent book, Classical Mechanics, all of the clarity and insight that made his Introduction to Error Analysis a best-selling text.',
     average: 4.25,
     edition: '1',
     year: 2005,
     user_review: {
       book_id: 1,
       comment: "Good book!",
       id: 1,
       rating: 5,
       title: "Classical Mechanics",
       user_id: 1,
       username: "henry",
     }
     featured: true,
     publisher_id: 1,
     created_at: null,
     updated_at: null,
     publisher: 'University Science Books',
     authors: [{id: 1, name: "John R. Taylor"}],
     subjects: [{id: 1, name: "Physics"}],
     reviews:
     [ { id: 1, rating: 5, comment: 'Good book!', book_id: 1, user_id: 1, title: 'Classical Mechanics', username: 'henry' },
     { id: 2, rating: 3.5, comment: 'Love the cover', book_id: 1, user_id: 2, title: 'Classical Mechanics', username: 'blevins' } ] }
*/

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const user_id = (req.token && req.token.id);
  Books.get(id, user_id)
    .then(book => book
          ? res.status(200).json(book)
          : res.status(404).json({
            message: `Book with id ${id} does not exist`
          }))
    .catch(error => res.status(500).json({
      message: 'Error getting book.',
      error: error.toString()
    }));
});

module.exports = router;
