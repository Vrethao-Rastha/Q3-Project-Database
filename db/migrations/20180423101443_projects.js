
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table){
      table.increments();
        table.string('user_name')
        table.string('pic')
        table.text('content')
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.timestamp('ucreated_at').defaultTo(knex.fn.now());
      })
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('projects');
  };
