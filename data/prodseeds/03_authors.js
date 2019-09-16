exports.seed = function(knex, Promise) {
  return knex('authors').del()
    .then(() => knex('authors').insert([
      // 1
      {name: 'John R. Taylor'},
      // 2
      {name: "Norman Melchert"},
      // 3
      {name: "Jose Luis Bermufadez"},
      // 4
      {name: "Jack Kiefer"},
      // 5
      {name: "Gary Lorden"},
      // 6
      {name: "David J. Griffiths"},
      // 7
      {name: "Zachary Tellman"},
      // 8
      {name: "Dmitri Sotnikov"},
      // 9
      {name: "Thomas H. Cohen"},
      // 10
      {name: "Charles E. Leiserson"},
      // 11
      {name: "Ronald L. Rivest"},
      // 12
      {name: "Clifford Stein"},
      // 13
      {name: "Gayle Laakmann McDowell"},
      // 14
      {name: "Daniel P. Friedman"},
      // 15
      {name: "Matthias Felleisen"},
      // 16
      {name: "Duane Bibby"},
      // 17
      {name: "Harold Abelson"},
      // 18
      {name: "Gerald Jay Sussman"},
      // 19
      {name: "Julie Sussman"},
      // 20
      {name: "William Strunk Jr."},
      // 21
      {name: "E. B. White"},
      // 22
      {name: "Gilbert Strng"},
      // 23
      {name: "Jim Blandy"},
      // 24
      {name: "Jason Orendorff"},
      // 25
      {name: "Professor Professorson"},
    ]))
    .then(() => knex('books_authors').del())
    .then(() => knex('books_authors').insert([
      {book_id: 1, author_id: 1},
      {book_id: 2, author_id: 2},
      {book_id: 3, author_id: 3},
      {book_id: 4, author_id: 4},
      {book_id: 4, author_id: 5},
      {book_id: 5, author_id: 6},
      {book_id: 6, author_id: 6},
      {book_id: 7, author_id: 7},
      {book_id: 8, author_id: 8},
      {book_id: 9, author_id: 9},
      {book_id: 9, author_id: 10},
      {book_id: 9, author_id: 11},
      {book_id: 9, author_id: 12},
      {book_id: 10, author_id: 13},
      {book_id: 11, author_id: 14},
      {book_id: 11, author_id: 15},
      {book_id: 11, author_id: 16},
      {book_id: 12, author_id: 17},
      {book_id: 12, author_id: 18},
      {book_id: 12, author_id: 19},
      {book_id: 13, author_id: 20},
      {book_id: 13, author_id: 21},
      {book_id: 14, author_id: 22},
      {book_id: 15, author_id: 23},
      {book_id: 15, author_id: 24},
      // {book_id: 16, author_id: 25},
    ]));
};
