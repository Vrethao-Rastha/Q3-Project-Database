const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  posts: function(req, res) {
    knex('posts')
      //.where('user_name', req.params.user_name)

       .then(data =>
    res.json(data));
  },
}
