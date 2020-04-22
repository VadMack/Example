module.exports = function(server, database){

	const varModule = require('../modules/variant-module');


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
					varModule.getVariant(variant, exercisesCollection).then(
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
