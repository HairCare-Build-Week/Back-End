exports.up = function(knex) {
    return knex.schema   
    .createTable('portfolio', function(portfolio) {
        portfolio
            .increments();
        portfolio
            .integer('stylists_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('stylists')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        portfolio
            .string('portfolio_image', 255)
            .defaultTo('https://source.unsplash.com/400x400/?hair')
    });
};


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('portfolio')
};