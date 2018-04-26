
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_name: 'Catherine', avatar: 'https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100', password: 'asdf', projects_completed: '14', projects_collaborated:'22', projects_consulted:'27', community_rating:'586',
        quote:"Wanna hear a bit of Nord wisdom? You don't really know a woman until you've had a strong drink and a fistfight with her. Keep walking, softgut. I'm too much woman for you. -Uthgerd the Unbroken"},
        {user_name: 'Joe', avatar: 'http://wickedhorror.thunderroadinc.netdna-cdn.com/wp-content/uploads/2016/08/The-Crow.jpg', password: 'asdf', projects_completed: '14', projects_collaborated:'22', projects_consulted:'27', community_rating:'586', quote: "Abashed the Devil stood and felt how awful goodness is."},
        {user_name: 'Michael', avatar: 'https://www.thinkgeek.com/stuff/looflirpa/bobafett.shtml', password: 'asdf', projects_completed: '14', projects_collaborated:'22', projects_consulted:'27', community_rating:'586', quote: "Star Wars is actually kinda horrible"},
        {user_name: 'Noel', avatar: 'https://i.ytimg.com/vi/vCVYE5b2b_A/maxresdefault.jpg', password: 'asdf', projects_completed: '14', projects_collaborated:'22', projects_consulted:'27', community_rating:'586', quote: "Get up, SO I CAN KILL YOU AGAIN!"},
        {user_name: 'Tessa', avatar: 'https://img00.deviantart.net/fc21/i/2016/279/1/6/ghost_rider_wip_by_uncannyknack-dak4xr2.jpg', password: 'asdf', projects_completed: '14', projects_collaborated:'22', projects_consulted:'27', community_rating:'586', quote: "In a closed society where everybody's guilty, the only crime is getting caught. In a world of thieves, the only final sin is stupidity."},

      ]);
    });
};
