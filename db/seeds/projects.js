
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {user_name: 'Catherine', content: 'test'},
        {user_name: 'Joe', content: 'test'},
        {user_name: 'Tessa', content: 'test'},
        {user_name: 'Noel', content: 'test'},
        {user_name: 'Michael', content: 'test'},

      ]);
    });
};
