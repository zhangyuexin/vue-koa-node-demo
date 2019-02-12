var router = require('koa-router')();
var db=require('../dataBase/db.js')
var crawler=require('../crawler/index')
var cheerio = require('cheerio')
router.get('/list',async (ctx)=>{
  let data = await db.handel('select * from db_bookmark')
  let res={
    code:1,
    data:data,
    tip:'成功'
  }
  ctx.body = res
})

router.post('/add', async (ctx) => {
  let params = ctx.request.body.url
  let body = await crawler(params)
  const $ = cheerio.load(body)
  let data = $('title').text()
  await db.handel('insert into db_bookmark(name,url) values(' +'"'+ data + '"'+','+'"' + params +'"'+ ')')
  ctx.body = 1
})

router.get('/delete', async (ctx) => {
  let params=ctx.query.id
  let data = await db.handel('delete from db_bookmark where id='+params)
  ctx.body = data
})
module.exports = router;
