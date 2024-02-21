'use strict';

var expressListRoutes = require('express-list-routes');
var express = require('express');
var router = express.Router();


/**
 * Routes definition
 */
module.exports = function (app) {

  app.use("", router);

  // Set Routes
  require('./auth')( router);
  require('./user')( router);

  expressListRoutes(router)
};
