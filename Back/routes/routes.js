const middlewareRoute = require("./middleware-route.js");
const exerciseRoute = require("./exercise-route");
const variantRoute = require("./variant-route.js");
const unknownRoute = require("./unknown-route.js");
module.exports = function (server, database) {
  middlewareRoute(server, database);
  variantRoute(server, database);
  exerciseRoute(server, database);
  unknownRoute(server);
};
