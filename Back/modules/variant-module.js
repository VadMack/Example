exports.getVariant = function (variant, exercisesCollection) {
  const exerciseModule = require("./exercise-module");
  return new Promise(async (resolve, reject) => {
    let response = [];
    for (var i = 0; i < variant.exercisesIDs.length; i++) {
      await exerciseModule
        .getExercise(parseInt(variant.exercisesIDs[i]), exercisesCollection)
        .then(
          (resolve) => {
            response[i] = resolve;
          },
          (error) => {
            console.log(error);
          }
        );
    }
    resolve(response);
  });
};

exports.checkVariant = function (
  answers,
  exercisesCollection,
  subjectsData,
  subject
) {
  const exerciseModule = require("./exercise-module");
  return new Promise(async (resolve, reject) => {
    let response = {
      totalPoints: 0,
      maxPoints: 0,
      results: [],
    };
    for (var i = 0; i < answers.length; i++) {
      let type;
      let prot;
      await exerciseModule.getType(answers[i], exercisesCollection).then(
        (resolve) => {
          type = resolve;
        },
        (error) => {
          console.log(error);
        }
      );
      await exerciseModule.getProt(subject, subjectsData, type).then(
        (resolve) => {
          prot = resolve;
          response.maxPoints += prot.points;
        },
        (error) => {
          console.log(error);
        }
      );
      await exerciseModule
        .checkAnswer(answers[i], exercisesCollection, prot)
        .then(
          (resolve) => {
            response.totalPoints += resolve.points;
            response.results[i] = resolve;
          },
          (error) => {
            console.log(error);
          }
        );
    }
    resolve(response);
  });
};
