const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { username: 'testing', password: bcrypt.hashSync('pass', 10), location: 'Austin,Tx', email: 'testing@tesing.com' }, // 1
  ]);
};