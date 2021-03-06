
exports.up = function(knex, Promise) {

return knex.schema.createTable('users', function(table){
    table.increments();
      table.string('user_name')
      table.string('avatar')
      table.string('projects_completed')
      table.string('projects_collaborated')
      table.string('projects_consulted')
      table.string('community_rating')
      table.string('password')
      table.text('quote')
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamp('ucreated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
