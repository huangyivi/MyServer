const koaRouter = require("koa-router");
const convert = require("./convert.js");
const router = new koaRouter();

router.post("/md2pdf", async (ctx, next) => {
  let file = ctx.request.files.file;
  let result = await convert(file);
  ctx.body = result;
  next();
});

module.exports = router;
