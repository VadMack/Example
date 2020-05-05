exports.getExercise = function (id, exercisesCollection) {  //Получение задания из БД
    return new Promise((resolve, reject) => {
        exercisesCollection.findOne({"_id": id}, (err, result) => {
            if (err) {
                reject(err);
            }
            let exercise = {
                "id": "",
                "text": "",
                "addText": "",
            }
            if (result) {
                if (result.addText) {
                    exercise.addText = result.addText;
                }
                exercise.id = id.toString();
                exercise.text = result.text;
            } else {
                exercise.text = "Не найдено";
            }
            resolve(exercise);
        });
    });
}

exports.checkAnswer = function (answer, exercisesCollection, prot) {                        //Проверка правильности задания
  return new Promise((resolve, reject)=>{
    exercisesCollection.findOne({"_id":parseInt(answer.id)},(err, result)=>{
      let resultObj = {
        "id":answer.id,
        "result":0,
        "userAnswer":"",
        "correctAnswer":"",
        "points":0
      }
      if (err){
        reject(err);
      }
      if(result){

        let answerText;

          answerText = answer.answ.toLowerCase().replace(/,/g, '.');
          if(!prot.spaceImportant){
            answerText = answerText.replace(/\s+/g, '')
          }
          let count = compareAnswers(answerText, result.answers[0]);
          if(prot.shuffledAnswer){
            resultObj.correctAnswer = result.answers[0];
            if(answerText.length<=result.answers[0].length && count>0){
                  if(count==result.answers[0].length){
                    resultObj.result = 2;
                    resultObj.points = prot.points;
                  }else if(!prot.strictCheck){
                      resultObj.result = 1;
                      resultObj.points = count;
              }
            }

          }else{
            if(prot.strictCheck){
              for (var i = 0; i < result.answers.length; i++) {
                if(i!=result.answers.length-1){
                  resultObj.correctAnswer += result.answers[i]+" | ";
                }else{
                  resultObj.correctAnswer += result.answers[i];
                }

              }
              for (var i = 0; i < result.answers.length; i++) {
                if(answerText==result.answers[i]){
                  resultObj.result = 2;
                  resultObj.points = prot.points;

                  break;
                }
              }
            }else{
              resultObj.points = count;
              if(count == result.answers[0].length){
                resultObj.result = 2;
              }else if(count>0){
                resultObj.result = 1;
              }
            }

          }

          resultObj.userAnswer = answerText;
      }
      resolve(resultObj);
    });

  });
}

exports.getType = function (answer, exercisesCollection) {
  return  new Promise((resolve, reject)=>{
    exercisesCollection.findOne({"_id":parseInt(answer.id)}, (err, result)=>{
      if(err){
        reject(err);
      }
      if(result){
        resolve(result.type);
      }
    });
  });

}
exports.getProt = function (subject, subjectsData, type) {
  return  new Promise((resolve, reject)=>{
    subjectsData.findOne({"name":subject}, (err, result)=>{
      if(err){
        reject(err);
      }
      if(result){
        resolve(result.exercises.find(el=>el.type==type));
      }
    });
  });

}

 function compareAnswers(userAnswer, correctAnswer) {
  let count = 0;
   for (var i = 0; i < userAnswer.length; i++) {
    for (var j = 0; j < correctAnswer.length; j++) {
      if(userAnswer[i]==correctAnswer[j]){
        count++;
        correctAnswer = correctAnswer.replace(userAnswer[i], '');
        break;
      }
    }
  }
  return count;
}
