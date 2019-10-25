const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
 // Inserts seed entries
    return knex('users').insert([
      { email: 'testing@testing.com', password: bcrypt.hashSync('pass', 10), 'stylist': false }, //1
      { email: 'adrian@adrian.com', password: bcrypt.hashSync('pass', 10),  'stylist': true }, //2
      { email: 'sandra@sandra.com', password: bcrypt.hashSync('pass', 10),  'stylist': true }, //3
      { email: 'hector@hector.com', password: bcrypt.hashSync('pass', 10),  'stylist': true }, //4

    ]);
};