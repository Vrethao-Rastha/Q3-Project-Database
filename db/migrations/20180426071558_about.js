exports.up = function(knex, Promise) {
  return knex.schema.createTable('about', function(table){
table.increments();
  table.text('about')
  table.timestamp('updated_at').defaultTo(knex.fn.now());
  table.timestamp('ucreated_at').defaultTo(knex.fn.now());
})
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('about');
};
