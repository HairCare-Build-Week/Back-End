const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getAllUsers,
  getById,
  insert,
  insertPost,
  update,
  updatePost,
  remove,
  findBy,
  getPostsById,
  getPortfolioById,
  removePost,
};

function get() {
  return db('users')
}

function getAllUsers(){
  return db('users')
}

function findBy(email) {
  return db('users')
  .where( {email} )
  .first()
}

function getById(id) {
  return db('users')
  .where({ id })
  .first()
}

function getPostsById(id) {
  return db('posts')
  .where('posts.stylists_id', id)
}

function getPortfolioById(id) {
  return db('portfolio')
  .where('portfolio.stylists_id', id)
}

function insert(user) {
  return db('users')
    .insert(user, "id" )
    .then(ids => {
      const [id] = ids;
      return getById(id);
    });
}

// function insert(stylist) {
//   return db('stylists')
//     .insert(stylist)
//     .then(ids => {
//       return getById(ids[0]);
//     });
// }

function insertPost(post) {
  return db('posts')
    .returning('id')
    .insert(post)
}

function update(id, changes) {
  return db('users')
    .where('id', id)
    .update(changes);
}

function updatePost(id, changes) {
  return db('posts')
    .where('id', id)
    .update(changes);
}

function remove(id) {
  return db('users')
    .where('id', id)
    .del();
}

function removePost(id){
  return db('posts')
  .where('id', id)
  .del();
}