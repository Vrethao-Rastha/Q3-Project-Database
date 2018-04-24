//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
module.exports = function(app){

  app.get('/posts', template.posts);

  app.get('/skills', template.skills);

  app.get('/projects', template.projects);

  app.get('/message', template.message);

  app.get('/users', template.users)

  app.post('/posts', template.makePost)

  app.delete('/posts/:id', template.deletePost)
}
