module.exports = function (server, database) {
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
  server.use((req, res, next) => {                  //Вывод запроса в консоль
      const date = new Date();
      console.log("Time: " + date + " Req: " + req.path);
      res.header("Access-Control-Allow-Origin", "*");
      next();
  });
}
