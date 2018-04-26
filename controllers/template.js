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

  getMessage: function(req, res){
    knex('message')
    .then(data =>
    res.json(data))
  },

  addMessage: function(req, res) {
    knex('message')
    .insert({user_name: req.params.user_name,
              target_user: 'Noel',
             message: req.body.message}, "*")
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
      .insert({user_name: req.body.user_name,
              content: req.body.content}, "*")
        .then(data =>
        res.json(data[0]))
  },

  deletePost: function(req, res) {
    knex('posts')
      .where('id', req.params.id)
        .del()
        .then(data =>
          res.json(req.params.id))
  },

  addSkills: function(req, res) {
    knex('skills')
      .where('user_name', req.body.user_name)
      .then((skill)=>{
        skill = skill[0];
        knex('skills')
          .where('user_name', req.body.user_name)
          .update({skill: skill.skill+ ", "+req.body.skill}, "*")
          .then(data =>
            res.json(data[0]))
      })
  },

  about: function(req, res) {
    knex('about')
      .then(data =>
      res.json(data))
  }
}
