module.exports = function (server, database) {
  server.get("/:subject/exercise.getCount/:type", (req, res) => {
    const parameter = "exercises." + req.params.subject;
    const collection = database.collection(parameter.toString());
    collection.countDocuments(
      { type: parseInt(req.params.type) },
      (err, count) => {
        if (err) {
          throw err;
        }
        res.json({ count: count });
      }
    );
  });

  server.get("/:subject/exercises.getCount", (req, res) => {
    const collection = database.collection("subjects.data");
    collection.findOne({ name: req.params.subject }, (err, subject) => {
      if (err) {
        throw err;
      }
      if (subject) {
        res.json({ count: subject.numOfExercises });
      } else {
        res.status(404).send("subject not exist");
      }
    });
  });

  server.post("/:subject/exercise.getMarathon/:type", (req, res) => {
    const exerciseModule = require("../modules/exercise-module.js");
    const parameter = "exercises." + req.params.subject;
    const collection = database.collection(parameter.toString());
    const type = parseInt(req.params.type);

    response = {
      exercise: "",
      usedArray: [],
    };
    collection
      .find({ type: type })
      .project({ _id: 1 })
      .toArray(async (err, array) => {
        if (array.length <= req.body.usedArray.length) {
          res.status(404).send("no more exercises");
          return;
        }
        let randId = -1;
        while (randId == -1) {
          randId = await exerciseModule.getRandId(array, req.body.usedArray);
        }
        await exerciseModule.getExercise(randId, collection).then(
          (resolve) => {
            usedArray = req.body.usedArray;
            usedArray[usedArray.length] = randId;
            response.exercise = resolve;
            response.usedArray = usedArray;
            res.json(response);
          },
          (error) => {
            console.log(error);
          }
        );
      });
  });
};
