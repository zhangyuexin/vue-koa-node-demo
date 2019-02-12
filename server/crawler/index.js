let request=require('request');
/**
 * 爬取网页内容  返回内容
 */
module.exports = function getTtile(params) {
  return new Promise((resolve, reject) => {
    request(params, function (error, response, body) {
      if (response.statusCode == 200) {
        resolve(body)
      } else {
        reject(error)
      }
    })
  })
}