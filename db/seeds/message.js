
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('message').del()
    .then(function () {
      // Inserts seed entries
      return knex('message').insert([
        {user_name: 'Noel', target_user: 'Catherine', message:'Hey Catherine, can you help me with something?'},
        {user_name: 'Noel', target_user: 'Joe', message:'Hey Joe, can you help me with something?'}

      ]);
    });
};
