
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
        {user_name: 'Bryan', content: "Voltage is wrong on the capacitor output. Blew out all the LED's on the circuit." },
        {user_name: 'Bryan', content: "Need a welder to mount my servo arm for my Engineseer rig, the bolts won't hold."},
        {user_name: 'Bryan', content: "Wood blank for my Chainsword is complete, anyone on who has a vacuum table to cast a resin mold?"},
        {user_name: 'Michael', content: "Vacuum table isn't working right, can't get a tight seal on the plastic."},
        {user_name: 'Michael', content: 'Finally found the bad seal on my vacuum table.'},
        {user_name: 'Michael', content: 'Got a good mold for my Mandalorian helmet, resin incoming!'},
        {user_name: 'Tessa', content: 'Got a great casting for my Ghost Rider skull mask, anyone have a sewing rig that can handle heavy leather?'},
        {user_name: 'Tessa', content: 'Ha! My CnC table finished the test link for my chain. Took 5 pounds off the overall weight of the prop!!'},

        {user_name: 'Noel', content: 'I am Noel!!'},

      ]);
    });
};
