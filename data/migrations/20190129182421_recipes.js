
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', table=>{
        table.increments();
        table.string('recipe').notNullable();
        table.interger('dish_id').unsigned().unique();
        table.foreign('dish_id').references('id').inTable('dishes')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
