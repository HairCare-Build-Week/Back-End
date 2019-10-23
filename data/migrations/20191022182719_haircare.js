exports.up = function(knex) {
    return knex.schema
      .createTable('users', function(users) {
        users.increments();
        users
            .string('username', 128)
            .notNullable()
            .unique();
        users
            .string('password', 128)
            .notNullable();
        users
            .string('location', 128);
        users
            .string('email', 128)
            .notNullable()
            .unique();
      })

      .createTable('stylists', function(stylists) {
        stylists.increments();
        stylists
            .string('username', 128)
            .notNullable()
            .unique();
        stylists
            .string('about', 256)
            .notNullable();
        stylists
            .string('skills', 256);
        stylists
            .string('password', 128)
            .notNullable();
        stylists
            .string('location', 128);
      })

      .createTable('posts', function(posts) {
        posts.increments();
        posts
            .string('title', 128)
            .notNullable()
        posts
            .string('image', 256)
            .defaultTo('https://source.unsplash.com/400x400/?hairstylist')
            .notNullable();
        posts
            .string('type', 128);
        posts
        .integer('stylistsId')
        .unsigned()
        .notNullable();
        posts
        .foreign('stylistsId')
        .references('id')
        .inTable('stylists')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('stylists').dropTableIfExists('users').dropTableIfExists('posts')
  };