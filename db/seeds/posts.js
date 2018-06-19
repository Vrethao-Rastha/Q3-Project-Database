
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {user_name: 'Catherine', content: 'Casting a full suit of Iron armor is a weighty task!'},
        {user_name: 'Catherine', content: 'Got the iron too hot, had to re-forge one of the greaves...'},
        {user_name: 'Catherine', content: 'Amost done with my Lydia of Whiterun Armor! Long live the Dovahkiin!! Long live Skyrim!!!'},
        {user_name: 'Catherine', content: '...I am the Iron Maiden'},
        {user_name: 'Catherine', content: 'Need some help with the tabard and fur collar, anyone with a heavy duty sewing rig on right now?'},
        

      ]);
    });
};
