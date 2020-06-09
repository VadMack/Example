exports.getCount = function (database, params) {
  return new Promise(function (resolve, reject) {
    const collection = database.collection("variants." + params.subject);
    collection.countDocuments({}, (error, count) => {
      if (error) {
        return reject(500);
      }
      resolve({ count: count });
    });
  });
};

exports.getVariant = function (database, params) {
  const exerciseModule = require("./exercise-module");
  const varCollection = database.collection("variants." + params.subject);
  const exercisesCollection = database.collection(
    "exercises." + params.subject
  );
  return new Promise((resolve, reject) => {
    varCollection.findOne({ _id: params.id }, (err, variant) => {
      if (err) {
        return reject(500);
      }
      if (variant) {
        resolve(variant);
      } else {
        return reject(404);
      }
    });
  }).then((variant) => {
    return new Promise(async (resolve, reject) => {
      let response = [];
      for (var i = 0; i < variant.exercisesIDs.length; i++) {
        await exerciseModule
          .getExercise(parseInt(variant.exercisesIDs[i]), exercisesCollection)
          .then((exercise) => {
            exercise.numInVar = i + 1;
            response[i] = exercise;
          })
          .catch((error) => {
            return reject(error);
          });
      }
      resolve(response);
    });
  });
};

exports.checkVariant = function (database, req) {
  const exerciseModule = require("./exercise-module");
  const subjectsData = database.collection("subjects.data");
  return new Promise(async (resolve, reject) => {
    let response = {
      totalPoints: 0,
      maxPoints: 0,
      testResult: "",
      results: [],
    };
    for (var i = 0; i < req.body.length; i++) {
      await exerciseModule
        .checkAnswer(database, req.body[i], req.params.subject)
        .then((result) => {
          result.numInVar = i+1;
          response.results[i] = result;
          response.totalPoints += result.points;
          response.maxPoints += result.maxPoints;
        })
        .catch((error) => {
          return reject(error);
        });
    }
    subjectsData.findOne({ name: req.params.subject }, (err, result) => {
      if (err) {
        return reject(500);
      }
      if (result) {
        response.testResult =
          result.toSecondary[response.totalPoints] +
          "/" +
          result.toSecondary[response.maxPoints];
        response.totalPoints = response.totalPoints + "/" + response.maxPoints;
        resolve(response);
      }
    });
  });
};

exports.addVariant = function (database, req) {
  const exercisesCollection = database.collection(
    "exercises." + req.params.subject
  );
  const variantsCollection = database.collection(
    "variants." + req.params.subject
  );
  const exerciseModule = require("./exercise-module");
  const subjectsData = database.collection("subjects.data");

  return new Promise(function (resolve, reject) {
    subjectsData.findOne({ name: req.params.subject }, (err, result) => {
      if (result) {
        resolve(true);
      } else {
        return reject(404);
      }
    });
  }).then(
    (result)=>{
      return new Promise(async (resolve, reject) => {
        let variantToAdd = {
          _id: 0,
          exercisesIDs: [],
        };
        let newIds = [];
        await variantsCollection.countDocuments({}, (err, count) => {
          if (err) {
            return reject(500);
          }
          variantToAdd._id = count + 1;
          variantToAdd._id = variantToAdd._id.toString();
        });
        for (var i = 0; i < req.body.length; i++) {
          await exerciseModule
            .addExercise(req.body[i], exercisesCollection, req.params.subject, subjectsData)
            .then(
              (resolve) => {
                newIds[i] = resolve;
              }
            ).catch(
              (error)=>{
                return reject(error);
              }
            );
        }
        variantToAdd.exercisesIDs = newIds;
        variantsCollection.insertOne(variantToAdd, (error, result) => {
          if (error) {
            return reject(500);
          } else {
            resolve({newIDs:variantToAdd.exercisesIDs});
          }
        });
      });
    }
  );


};
