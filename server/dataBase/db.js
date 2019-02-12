let config = require('./config')
var mysql = require('mysql');
class Db {
  static getInstance() { /*单例*/

    if (!Db.instance) {

      Db.instance = new Db();
    }
    return Db.instance;
  }

  constructor(pool) {
    //连接数据库
    this.pool = mysql.createPool(config);
  }
  handel(sql) {
    const pool = this.pool;
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            //关闭数据库
            connection.release()
          })
        }
      })
    })
  }
}

module.exports = Db.getInstance()