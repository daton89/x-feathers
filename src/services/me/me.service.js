// Initializes the `me` service on path `/me`
const createService = require('feathers-nedb');
const createModel = require('../../models/me.model');
const hooks = require('./me.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/me', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('me');

  service.hooks(hooks);
};
