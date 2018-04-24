const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  posts: function(req, res) {
    knex('posts')
      //.where('user_name', req.params.user_name)

       .then(data =>
    res.json(data));
  },


  skills: function(req, res) {
    knex('skills')
      .then(data =>
      res.json(data));
  },

  projects: function(req, res) {
    knex('projects')
      .then(data =>
      res.json(data));
  },

  message: function(req, res) {
    knex('message')
      .then(data =>
      res.json(data));
  },

  users: function(req, res) {
    knex('users')
      .then(data =>
      res.json(data));
  },

  makePost: function(req, res) {
    knex('posts')
      .insert({user_name: 'Catherine',
              content: req.body.content})
        .then(data =>
        res.json(data))
  }
}
