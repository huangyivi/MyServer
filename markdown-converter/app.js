const Koa = require("koa");
const cors = require("@koa/cors");
const koaBody = require("koa-body");
const router = require("./router.js");
const app = new Koa();

app.use(cors());
app.use(
  koaBody({
    multipart: true,
    formidable: {
      keepExtensions: true, //保留后缀
    },
  })
);

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
