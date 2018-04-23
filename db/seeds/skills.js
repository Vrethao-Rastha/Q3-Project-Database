
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        {user_name: 'Catherine', skill: 'Welding, Ironworking'},
        {user_name: 'Joe', skill: 'Electronics, Sewing'},
        {user_name: 'Micheal', skill: 'Resin Molding, Vaccum Table Fabrication'},
        {user_name: 'Tessa', skill: 'CnC Aluminum Fabrication, Lost Wax Method Casting'},
        {user_name: 'Noel', skill: 'Plasma Cutting, Steel Casting'},

      ]);
    });
};
