const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;
const cors = require('cors');

const corsOptions = require("./config/server-config/cors.js");
const db = require("./config/server-config/db.js");
const server = express();


server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(cors(corsOptions));


function startRouting(database) {
    server.use((req, res, next) => {                  //проверка наличия подключения к БД
        database.command({ping: 1}, (err, result) => {
            if (result) {
                next();
            } else {
                console.log("Connection lost, waiting for new request");
                res.status(503).send("Connection to BD lost, please try again later");
            }
        });
    });
    server.use((req, res, next) => {                  //Вывод тела запроса в консоль
        let date = new Date();
        console.log("Time: " + date + " Req: " + req.path);
        next();
    });
    require("./routes/routes.js")(server, database);//Подключение роутов
}

function BDConnect() {
    mongodb.connect(db.url, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        },
        function (err, client) {
            if(err){
              console.log("BD connecting error");
              BDConnect();
              return;
            }
            console.log("Server started, routing");
            const database = client.db(db.dbName);
            startRouting(database);
        });
}

BDConnect();
server.listen(8000);
