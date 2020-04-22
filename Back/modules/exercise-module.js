exports.getExercise = function(id, exercisesCollection){
  return new Promise((resolve, reject)=>{
    exercisesCollection.findOne({"_id":id}, (err, result)=>{
      if(err){
        reject(err);
      }
      resolve(result);
    });
  });
}

exports.checkAnswer = function() {
  
}
