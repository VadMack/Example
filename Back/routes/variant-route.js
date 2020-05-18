module.exports = function (server, database) {
  const varModule = require("../modules/variant-module");
  const exerciseModule = require("../modules/exercise-module");

  server.get("/:subject/variant.getCount", (req, res) => {
    varModule
      .getCount(database, req.params)
      .then((resolve) => {
        res.json(resolve);
      })
      .catch((error) => {
        res.sendStatus(error);
      });
  });

  server.get("/:subject/variant.getReady/:id", (req, res) => {
    varModule
      .getVariant(database, req.params)
      .then((resolve) => {
        res.json(resolve);
      })
      .catch((error) => {
        res.sendStatus(error);
      });
  });

  server.post("/:subject/variant.check", (req, res) => {
    varModule
      .checkVariant(database, req)
      .then((resolve) => {
        res.json(resolve);
      })
      .catch((error) => {
        res.sendStatus(error);
      });
  });

  server.post("/:subject/variant.addNew", (req, res) => {
    varModule
      .addVariant(database, req)
      .then((resolve) => {
        res.json(resolve);
      })
      .catch((error) => {
        res.sendStatus(error);
      });
  });

  server.post("/:subject/variant.setNew", (req, res) => {});
};
