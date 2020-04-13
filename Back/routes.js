module.exports = function(server, database){

	server.get("/variant/getCount/:subject", function(req, res){
	let parameter = "variants."+req.params.subject;
	const collection = database.collection(parameter.toString());
  	collection.countDocuments({}, (err, count)=>{
  		console.log(count);
  		res.json({'count':count});
  	});
});

};