module.exports = function(server, database){

	 function getVariant(variant, exercisesCollection){
		return new Promise(async (resolve, reject)=>{
			let response = [];
			for (var i = 0; i < variant.exercisesIDs.length; i++) {
				await getExercise(parseInt(variant.exercisesIDs[i]), exercisesCollection).then(
					resolve=>{
						response[i] = resolve;
					},
					error=>{
						console.log(error);
					}
				)
			}
			resolve(response);
		});
	}

	function getExercise(id, exercisesCollection){
		return new Promise((resolve, reject)=>{
			exercisesCollection.findOne({"_id":id}, (err, result)=>{
				if(err){
					reject(err);
				}
				resolve(result);
			});
		});
	}

	server.get("/:subject/variant.getCount/", (req, res)=>{
		let parameter = "variants."+req.params.subject;
		const collection = database.collection(parameter.toString());
	  collection.countDocuments({}, (err, count)=>{
			if(err){
				throw err;
			}
	  		res.json({'count':count});
	  	});
	});

	server.get("/:subject/variant.getReady/:id", (req, res)=>{

			let subject = String(req.params.subject);
			let varId = parseInt(req.params.id);
			const varCollection = database.collection("variants."+subject);
			const exercisesCollection = database.collection("exercises."+subject);
			varCollection.findOne({"_id":varId}, (err, variant)=>{
				if(err){
					throw err;
				}
					console.log(variant.exercisesIDs);
					getVariant(variant, exercisesCollection).then(
							resolve=>{
								res.json(resolve);
							},
							error=>{
								console.log(error)
							}
					)
			});

	});

};
