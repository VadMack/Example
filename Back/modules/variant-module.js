exports.getVariant = function (variant, exercisesCollection) { //составление полного варианта из БД
    const exerciseModule = require('./exercise-module');
    return new Promise(async (resolve, reject) => {
        let response = [];
        for (var i = 0; i < variant.exercisesIDs.length; i++) {
            await exerciseModule.getExercise(parseInt(variant.exercisesIDs[i]), exercisesCollection).then(
                resolve => {
                    response[i] = resolve;
                },
                error => {
                    console.log(error);
                }
            )
        }
        resolve(response);
    });
}

exports.checkVariant = function (answers, exercisesCollection) {
    const exerciseModule = require('./exercise-module');
    return new Promise(async (resolve, reject)=>{
      let response = [];
      for (var i = 0; i < answers.length; i++) {
        await exerciseModule.checkAnswer(answers[i], exercisesCollection).then(
          resolve =>{
            response[i] = resolve;
          },
          error =>{
            console.log(error);
          }
        );
      }
      resolve(response);
    });

}
