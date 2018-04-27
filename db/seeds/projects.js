
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {user_name: 'Catherine', pic: 'https://orig00.deviantart.net/5389/f/2013/058/f/8/skyrim_iron_armor___final_by_folkenstal-d5weq3h.jpg', content: 'Ready to fight for the Empire!'},
        {user_name: 'Bryan', content: 'test'},
        {user_name: 'Tessa', content: 'test'},
        {user_name: 'Noel', content: 'test'},
        {user_name: 'Michael', content: 'test'},

      ]);
    });
};
