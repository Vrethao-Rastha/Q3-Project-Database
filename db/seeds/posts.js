
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {user_name: 'Catherine', content: 'Catherine test'},
        {user_name: 'Catherine', content: 'Catherine test'},
        {user_name: 'Catherine', content: 'Catherine test'},
        {user_name: 'Catherine', content: 'Catherine test'},
        {user_name: 'Joe', content: ' Joe test'},
        {user_name: 'Joe', content: ' Joe test'},
        {user_name: 'Michael', content: 'Michael test'},
        {user_name: 'Tessa', content: 'test'},
        {user_name: 'Noel', content: 'test'},

      ]);
    });
};
