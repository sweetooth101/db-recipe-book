
exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions', table => {
        table.increments()
        table.text('ingredient_list')
        table.integer('recipe_id').unsigned()
        table.foreign('recipe_id').references('id').on('recipes')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instructions')
  };