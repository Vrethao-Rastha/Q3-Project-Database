
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_name: 'Catherine', avatar: 'https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100', password: 'asdf'},
        {user_name: 'Joe', avatar: 'http://via.placeholder.com/100x100', password: 'asdf'},
        {user_name: 'Michael', avatar: 'http://via.placeholder.com/100x100', password: 'asdf'},
        {user_name: 'Noel', avatar: 'http://via.placeholder.com/100x100', password: 'asdf'},
        {user_name: 'Tessa', avatar: 'http://via.placeholder.com/100x100', password: 'asdf'},

      ]);
    });
};
