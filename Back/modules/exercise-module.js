exports.getExercise = function (id, exercisesCollection) {  //Получение задания из БД
    return new Promise((resolve, reject) => {
        exercisesCollection.findOne({"_id": id}, (err, result) => {
            if (err) {
                reject(err);
            }
            let exercise = {
                "id": "",
                "name": "",
                "text": "",
                "addText": "",
            }
            if (result) {
                if (result.addText) {
                    exercise.addText = result.addText;
                }
                exercise.id = id.toString();
                exercise.name = result.name;
                exercise.text = result.text;
            } else {
                exercise.text = "Не найдено";
            }
            resolve(exercise);
        });
    });
}

exports.checkAnswer = function (answer, exercisesCollection) {                        //Проверка правильности задания
  return new Promise((resolve, reject)=>{
    exercisesCollection.findOne({"_id":parseInt(answer.id)}, (err, result)=>{
      let resultObj = {
        "id":answer.id,
        "result":""
      }
      if (err){
        reject(err);
      }
      if(result){
        let answerText = answer.answ.toLowerCase().replace(/\s+/g, '').replace(/,/g, '.');
        if(answerText==result.answer){
          resultObj.result = true;
        }else{
          resultObj.result = false;
        }
      }
      resolve(resultObj);
    })

  })
}
