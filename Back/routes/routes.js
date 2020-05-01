const middlewareRoute = require("./middleware-route.js");
const exerciseRoute = require("./exercise-route");
const variantRoute = require("./variant-route.js");
const unknownRoute = require("./unknown-route.js");
module.exports = function (server, database) {
        middlewareRoute(server, database);         //роуты для проверок
        variantRoute(server, database);						//роуты для запросов по вариантам
        exerciseRoute(server, database);         //роуты для запросов по заданиям
        unknownRoute(server);                   //роут для неверных запросов
};
