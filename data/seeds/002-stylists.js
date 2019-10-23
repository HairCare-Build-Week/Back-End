exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
  .then(function () {
      // Inserts seed entries
      return knex('stylists').insert([
        {user_id: 2, username: 'Adrian', about: 'I am a stylist that has in eye for detail making my cuts and color stand out more than my peers', skills: 'cut color'}, //1
        {user_id: 3, username: 'Sandra', about: 'I am a stylist that has in eye for detail making my styles stand out more than my peers', skills: 'fashion color hair styling'}, //2
        {user_id: 4, username: 'Hector', about: 'I am an all around hair stylist great at every part of the process', skills: 'Jack of all trades'} //3
      ]);
  });
};