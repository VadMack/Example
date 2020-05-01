module.exports = function (server, database) {
  server.get("/:subject/exercise.getCount/:type", (req, res) => {		//получение количества готовых вариантов по предмету
      const parameter = "exercises." + req.params.subject;
      const collection = database.collection(parameter.toString());
      collection.countDocuments({"type":req.params.type}, (err, count) => {
          if (err) {
              throw err;
          }
          res.json({'count': count});
      });
  });
}
