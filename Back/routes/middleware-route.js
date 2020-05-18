module.exports = function (server, database) {
  server.use((req, res, next) => {
    database.command({ ping: 1 }, (err, result) => {
      if (result) {
        next();
      } else {
        console.log(
          "Connection lost, waiting for new request to try to reconnect"
        );
        res
          .status(503)
          .send("Соединение с базой данных потеряно, повторите попытку позже");
      }
    });
  });
  server.use((req, res, next) => {

    const date = new Date();
    console.log("Time: " + date + " Req: " + req.path);
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

};
