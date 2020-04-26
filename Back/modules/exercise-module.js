exports.getExercise = function (id, exercisesCollection) {  //Получение задания из БД
    return new Promise((resolve, reject) => {
        exercisesCollection.findOne({"_id": id}, (err, result) => {
            if (err) {
                reject(err);
            }
            let exercise = {
                "name": "",
                "text": "",
                "addText": "",
            }
            if (result) {
                if (result.addText) {
                    exercise.addText = result.addText;
                }
                exercise.name = result.name;
                exercise.text = result.text;
            } else {
                exercise.text = "Не найдено";
            }
            resolve(exercise);
        });
    });
}

exports.checkAnswer = function () {                        //Проверка правильности задания

}
