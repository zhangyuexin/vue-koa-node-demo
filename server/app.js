var koa =new require('koa')
  , logger = require('koa-logger')
  , json = require('koa-json')
  , onerror = require('koa-onerror');

var index = require('./routes/index');
var app=new koa();
// error handler
onerror(app);

// global middlewares
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(async (ctx,next)=>{
  var start = new Date;
  await next();
  var ms = new Date - start;
  console.log(ms);
});

app.use(require('koa-static')(__dirname + '/public'));

// routes definition
app.use(index.routes(), index.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;
