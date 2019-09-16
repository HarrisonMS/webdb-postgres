exports.seed = function(knex, Promise) {
  function pgtruncate(table) {
    return knex.raw('TRUNCATE TABLE ?? RESTART IDENTITY CASCADE', table);
  }
  return knex('books_authors').del()
    .then(() => pgtruncate('books_subjects'))
    .then(() => pgtruncate('books_authors'))
    .then(() => pgtruncate('users_roles'))
    .then(() => pgtruncate('authors'))
    .then(() => pgtruncate('reviews'))
    .then(() => pgtruncate('users'))
    .then(() => pgtruncate('roles'))
    .then(() => pgtruncate('subjects'))
    .then(() => pgtruncate('books'))
    .then(() => pgtruncate('publishers'));
};
