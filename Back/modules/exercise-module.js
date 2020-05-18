exports.getCount = function (database, params) {
  return new Promise((resolve, reject) => {
    const collection = database.collection("exercises." + params.subject);
    collection.countDocuments({ type: parseInt(params.type) }, (err, count) => {
      if (err) {
        reject(err);
      }
      resolve({ count: count });
    });
  });
};

exports.getCountAll = function (database, params) {
  return new Promise((resolve, reject) => {
    const collection = database.collection("subjects.data");
    collection.findOne({ name: params.subject }, (err, subject) => {
      if (err) {
        reject(err);
      }
      resolve({ count: subject.numOfExercises });
    });
  });
};

exports.getMarathon = function (database, req) {
  return new Promise((resolve, reject) => {
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
      .toArray((err, array) => {
        try {
          if (array.length <= req.body.usedArray.length) {
            return reject(404);
          }
          let randId = -1;
          while (randId == -1) {
            randId = getRandId(array, req.body.usedArray);
          }
          getExercise(randId, collection).then(
            (result) => {
              usedArray = req.body.usedArray;
              usedArray[usedArray.length] = randId;
              response.exercise = result;
              response.usedArray = usedArray;
              resolve(response);
            },
            (error) => {
              console.log(error);
              return reject(500);
            }
          );
        } catch (error) {
          console.log(error);
          return reject(400);
        }
      });
  });
};

exports.addOne = function (database, req) {
  return new Promise((resolve, reject) => {
    const exercisesCollection = database.collection(
      "exercises." + req.params.subject
    );
    const subjectsData = database.collection("subjects.data");
    subjectsData.findOne({ name: req.params.subject }, (err, result) => {
      if (result && result.exercises[parseInt(req.body.type) - 1]) {
        addExercise(
          req.body,
          exercisesCollection,
          req.params.subject,
          subjectsData
        )
          .then((result) => {
            resolve({ newId: result });
          })
          .catch((error) => {
            return reject(500);
          });
      } else {
        return reject(404);
      }
    });
  });
};

function getExercise(id, exercisesCollection) {
  return new Promise((resolve, reject) => {
    exercisesCollection.findOne({ _id: id }, (err, result) => {
      let exercise = {
        id: "",
        text: "",
        addText: "",
        numInVar: "",
      };
      if (err) {
        return reject(500);
      }
      if (result) {
        if (result.addText) {
          exercise.addText = result.addText;
        }
        exercise.id = id.toString();
        exercise.text = result.text;
        resolve(exercise);
      } else {
        return reject(404);
      }
    });
  });
}
module.exports.getExercise = getExercise;

exports.checkAnswer = function (database, answer, subject) {
  const exercisesCollection = database.collection("exercises." + subject);
  const subjectsData = database.collection("subjects.data");
  return new Promise((resolve, reject) => {
    exercisesCollection.findOne({ _id: parseInt(answer.id) }, (err, result) => {
      if (err) {
        return reject(500);
      }
      if (result) {
        resolve(result.type);
      } else {
        return reject(400);
      }
    });
  })
    .then((type) => {
      getProt(subject, subjectsData, type)
        .then((prot) => {
          resolve(prot);
        })
        .catch((error) => {
          return reject(error);
        });
    })
    .then((prot) => {
      return new Promise((resolve, reject) => {
        exercisesCollection.findOne(
          { _id: parseInt(answer.id) },
          (err, result) => {
            try {
              let resultObj = {
                id: answer.id,
                numInVar: "",
                result: 0,
                userAnswer: "",
                correctAnswer: "",
                points: 0,
                maxPoints: 0,
              };
              resultObj.maxPoints = prot.points;
              if (err) {
                return reject(500);
              }
              if (result) {
                for (var i = 0; i < result.answers.length; i++) {
                  if (i != result.answers.length - 1) {
                    resultObj.correctAnswer += result.answers[i] + " | ";
                  } else {
                    resultObj.correctAnswer += result.answers[i];
                  }
                }

                let answerText = answer.answ.toLowerCase().replace(/,/g, ".");
                if (!prot.spaceImportant) {
                  answerText = answerText.replace(/\s+/g, "");
                }
                if (prot.selfCheck) {
                  let points = parseInt(answerText);
                  resultObj.correctAnswer = prot.points;
                  if (points > 0 && points < prot.points) {
                    resultObj.result = 1;
                    resultObj.points = points;
                    resultObj.userAnswer = points;
                  } else if (points >= prot.points) {
                    resultObj.result = 2;
                    resultObj.points = prot.points;
                    resultObj.userAnswer = prot.points;
                  }
                  resolve(resultObj);
                  return;
                }
                let count;
                if (prot.shuffledAnswer) {
                  count = compareAnswersShuffled(answerText, result.answers[0]);
                  if (
                    answerText.length <= result.answers[0].length &&
                    count > 0
                  ) {
                    if (count == result.answers[0].length) {
                      resultObj.result = 2;
                      resultObj.points = prot.points;
                    } else if (!prot.strictCheck) {
                      resultObj.result = 1;
                      resultObj.points = count;
                    }
                  }
                } else {
                  count = compareAnswers(answerText, result.answers[0]);
                  if (prot.strictCheck) {
                    for (var i = 0; i < result.answers.length; i++) {
                      if (answerText == result.answers[i]) {
                        resultObj.result = 2;
                        resultObj.points = prot.points;
                        break;
                      }
                    }
                  } else {
                    resultObj.points = count;
                    if (count == result.answers[0].length) {
                      resultObj.result = 2;
                    } else if (count > 0) {
                      resultObj.result = 1;
                    }
                  }
                }
                resultObj.userAnswer = answerText;
              }
              resolve(resultObj);
            } catch (e) {
              return reject(400);
            }
          }
        );
      });
    });
};

function getRandId(idArray, usedArray) {
  let randNum = Math.floor(Math.random() * idArray.length);
  let randId = idArray[randNum]._id;
  let isUsed = false;
  for (var i = 0; i < usedArray.length; i++) {
    if (randId == usedArray[i]) {
      isUsed = true;
      break;
    }
  }
  if (isUsed) {
    return -1;
  } else {
    return randId;
  }
}
module.exports.getRandId = getRandId;

function getProt(subject, subjectsData, type) {
  return new Promise(function (resolve, reject) {
    subjectsData.findOne({ name: subject }, (err, result) => {
      if (err) {
        return reject(500);
      }
      if (result) {
        resolve(result.exercises.find((el) => el.type == type));
      } else {
        return reject(400);
      }
    });
  });
}
module.exports.getProt = getProt;

function addExercise(exerciseObj, exercisesCollection, subject, subjectsData) {
  return new Promise(async (resolve, reject) => {
    let exerciseToAdd = {
      _id: 0,
      type: parseInt(exerciseObj.type),
      text: exerciseObj.text.toString(),
      addText: exerciseObj.addText.toString(),
      answers: [],
    };
    let prot;
    await exercisesCollection.countDocuments({}, (error, count) => {
      if (error) {
        return reject(error);
      }
      exerciseToAdd._id = count + 1;
    });
    await getProt(subject, subjectsData, exerciseObj.type)
      .then((resolve) => {
        prot = resolve;
      })
      .catch((error) => {
        return reject(error);
      });
    answersArray = exerciseObj.answer
      .toLowerCase()
      .replace(/,/g, ".")
      .split("|");
    for (var i = 0; i < answersArray.length; i++) {
      exerciseToAdd.answers[i] = answersArray[i];
      if (!prot.spaceImportant) {
        exerciseToAdd.answers[i] = exerciseToAdd.answers[i].replace(/\s+/g, "");
      }
    }
    exercisesCollection.insertOne(exerciseToAdd, (error, result) => {
      if (error) {
        return reject(error);
      } else {
        resolve(exerciseToAdd._id);
      }
    });
  });
}
module.exports.addExercise = addExercise;

function compareAnswersShuffled(userAnswer, correctAnswer) {
  let count = 0;
  for (var i = 0; i < userAnswer.length; i++) {
    for (var j = 0; j < correctAnswer.length; j++) {
      if (userAnswer[i] == correctAnswer[j]) {
        count++;
        correctAnswer = correctAnswer.replace(userAnswer[i], "");
        break;
      }
    }
  }
  return count;
}
function compareAnswers(userAnswer, correctAnswer) {
  let count = 0;
  for (var i = 0; i < userAnswer.length; i++) {
    if (userAnswer[i] == correctAnswer[i]) {
      count++;
    }
  }
  return count;
}
