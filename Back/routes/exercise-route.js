module.exports = function (server, database) {
  const exerciseModule = require("../modules/exercise-module.js");
  const variantModule = require("../modules/variant-module.js");

  server.get("/:subject/exercise.getCount/:type", (req, res) => {
    exerciseModule
      .getCount(database, req.params)
      .then((resolve) => {
        res.json(resolve);
      })
      .catch((error) => {
        res.sendStatus(error);
      });
  });

  server.get("/:subject/exercises.getCount", (req, res) => {
    exerciseModule
      .getCountAll(database, req.params)
      .then((resolve) => {
        res.json(resolve);
      })
      .catch((error) => {
        res.sendStatus(error);
      });
  });

  server.post("/:subject/exercise.getMarathon/:type", (req, res) => {
    exerciseModule
      .getMarathon(database, req)
      .then((resolve) => {
        res.json(resolve);
      })
      .catch((error) => {
        res.sendStatus(error);
      });
  });

  server.post("/:subject/exercise.addOne", (req, res) => {
    exerciseModule
      .addOne(database, req)
      .then((resolve) => {
        res.json(resolve);
      })
      .catch((error) => {
        res.sendStatus(error);
      });
  });
};
