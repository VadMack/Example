const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;
const cors = require('cors');

const server = express();
const corsOptions = require("./config/server-config/cors.js");
const db = require("./config/server-config/db.js");
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());


server.use(cors(corsOptions));

mongodb.connect(db.url, function(err, client){
  if(err){
    console.log(err);
  }else {
    const database = client.db("example");

    server.use((req, res, next)=>{
      let date = new Date();
      console.log("Time: " + date + " Req: " + req.path);
      next();
    });

    require("./routes/routes.js")(server, database);
  }
});


server.listen(8000);
