const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb").MongoClient;
const cors = require("cors");

const db = require("./config/server-config/db.js");
const server = express();
const port = 8000;
const dbUrl = "mongodb://" + db.login + ":" + db.password + db.url;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

function startRouting(database) {
  require("./routes/routes.js")(server, database);
}

function BDConnect() {
  mongodb.connect(
    dbUrl,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    function (err, client) {
      if (err) {
        setTimeout(() => {
          console.log("BD connecting error");
          BDConnect();
          return;
        }, 3000);
      }
      console.log("DB connected");
      const database = client.db(db.dbName);
      startRouting(database);
    }
  );
}

BDConnect();
server.listen(port, () => {
  console.log("Listening on " + port);
});
