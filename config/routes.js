//Update the name of the controller below and rename the file.
const jwt = require('jsonwebtoken');
const template = require("../controllers/template.js")
module.exports = function(app){

  app.options('*', cors())

  app.post('/', template.login);

  app.get('/posts', template.posts);

  app.get('/skills', template.skills);

  app.post('/skills/:user_name', template.addSkills)

  app.get('/projects', template.projects);

  app.get('/message', template.getMessage);

  app.post('/message/:user_name', template.addMessage);

  app.get('/users', template.users)

  app.post('/posts', template.makePost)

  app.delete('/posts/:id', template.deletePost)

  app.get('/about', template.about)

  app.get('/feature', template.feature)
}
