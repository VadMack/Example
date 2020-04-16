const variantConfig = require("../config/data/variant-data.js");

module.exports = function(server, database){

	server.get("/:subject/variant.getCount/", (req, res)=>{
	let parameter = "variants."+req.params.subject;
	const collection = database.collection(parameter.toString());
  	collection.countDocuments({}, (err, count)=>{
  		console.log(count);
  		res.json({'count':33});
  		});
	});

	server.get("/:subject/variant.getReady/:id", (req, res)=>{

	});

};
