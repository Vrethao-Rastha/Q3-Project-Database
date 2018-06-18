
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_name: 'Catherine', avatar: 'https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100', password: 'asdf', projects_completed: '14', projects_collaborated:'22', projects_consulted:'27', community_rating:'586',
        quote:"Wanna hear a bit of Nord wisdom? You don't really know a woman until you've had a strong drink and a fistfight with her. Keep walking, softgut. I'm too much woman for you. -Uthgerd the Unbroken"},

      ]);
    });
};
