exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {stylists_id:'1', title: 'First post', description: 'This is my first post and I feel really good about it'},
        {stylists_id:'1', title: 'Second post', description: 'This is my second post and I feel really good about it'},
        {stylists_id:'2', title: 'First post', description: 'This is my first post and I feel really good about it'},
        {stylists_id:'2', title: 'Second post', description: 'This is my second post and I feel really good about it'},
        {stylists_id:'3', title: 'First post', description: 'This is my first post and I feel really good about it'},
        {stylists_id:'3', title: 'Second post', description: 'This is my second post and I feel really good about it'},
      ]);
    });
};