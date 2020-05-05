module.exports = function (server, database) {
  server.get("/:subject/exercise.getCount/:type", (req, res) => {		//получение количества готовых вариантов по предмету
      const parameter = "exercises." + req.params.subject;
      const collection = database.collection(parameter.toString());
      collection.countDocuments({"type":parseInt(req.params.type)}, (err, count) => {
          if (err) {
              throw err;
          }
          res.json({'count': count});
      });
  });

  server.get("/:subject/exercises.getCount", (req, res) => {
      const collection = database.collection("subjects.data");
      collection.findOne({"name":req.params.subject}, (err, subject)=>{
        if (err) {
          throw err;
        }
        if(subject){
          res.json({"count":subject.numOfExercises});
        }else {
          res.status(404).send("subject not exist");
        }
      });
  });
}
