const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;
const cors = require('cors');

const server = express();
const mongoClient = new mongodb("mongodb://localhost:27017/", { useNewUrlParser: true });
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());


let db;
let collection;

let corsOptions = {
	origin:"*",
	optionsSuccessStatus: 200
}

server.use(cors(corsOptions));

mongoClient.connect(function(err, client){
  if(err){
    console.log(err);
  }
  db = client.db("exercises");
  collection = db.collection("inf");

});


server.get("/exercise/inf", function(req, res){
	const id = parseInt(req.query.id);
	let count = collection.countDocuments();
	console.log(count);
	collection.findOne({'_id': id}, (err, item)=>{
		if(err){
			res.send("ERROR");
		}else{
			res.send({"count": count});
			console.log(req.body);
		}
	});
	console.log("A");
});

server.listen(8000);
