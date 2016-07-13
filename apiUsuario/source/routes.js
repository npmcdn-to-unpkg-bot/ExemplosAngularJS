'use strict';
var validateSchema = require('./validation');
var ctrls = require('./controllers');

module.exports = function(app) {
  app.post('/users',
    validateSchema,
    ctrls.post);
  app.get('/users',
    ctrls.get);
  app.get('/users/:id',
    ctrls.getById);
  app.delete('/users/:id',
    ctrls.delete);
  app.put('/users/:id',
    ctrls.put);
};
