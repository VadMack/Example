module.exports = function (server) {
  server.use((req, res) => {
    res.status(400).send("Unknown request");
  });
};
