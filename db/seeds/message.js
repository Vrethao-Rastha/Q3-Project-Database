
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('message').del()
    .then(function () {
      // Inserts seed entries
      return knex('message').insert([
        {user_name: 'Catherine', target_user: 'Tessa', message: 'test'},
        {user_name: 'Joe', target_user: 'Noel', message: 'test'},
        {user_name: 'Tessa', target_user: 'Michael', message: 'test'},
        {user_name: 'Noel', target_user: 'Catherine', message: 'test'},
        {user_name: 'Michael', target_user: 'Joe',  message: 'test'},
      ]);
    });
};
