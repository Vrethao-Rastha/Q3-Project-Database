
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_name: 'Catherine', avatar: 'http://via.placeholder.com/100x100', password: 'asdf'},
        {user_name: 'Joe', avatar: 'http://via.placeholder.com/100x100', password: 'asdf'},
        {user_name: 'Michael', avatar: 'http://via.placeholder.com/100x100', password: 'asdf'},
        {user_name: 'Noel', avatar: 'http://via.placeholder.com/100x100', password: 'asdf'},
        {user_name: 'Tessa', avatar: 'http://via.placeholder.com/100x100', password: 'asdf'},

      ]);
    });
};
