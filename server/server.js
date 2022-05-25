const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("server/db.json");
const middlewares = jsonServer.defaults();
const anaDb = require("../src/assets/anaTablo.json");
const altDb = require("../src/assets/altTablo.json");
const arrays = require("./arrays");
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/ana", seedAnaTablo, (req, res) => {
  res.status(200).jsonp(anaDb);
});
server.post("/alt", (req, res, next) => {
  console.log("anaDb[0]");
  res.status(200).jsonp(altDb);
});

server.use(router);
server.listen(4201, () => {
  console.log("JSON Server is running");
});

function seedAnaTablo(req, res, next) {
  const example = anaDb.data[0];
  const filterableElements = arrays.anaTablo.filter((a) => a.ref);
  console.log(filterableElements);
  console.log(req.body);
  next();
}
