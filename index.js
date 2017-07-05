var autoprefixer = require('autoprefixer')
var postcss = require('postcss')

function coautoprefixer(body, opts) {
  return function (cb) {
    postcss(autoprefixer(opts)).process(body)
      .then(function(res) {
        cb(null, res.css)
      })
      .catch(function(err) {
        return cb(err)
      })
  }
}

function Autoprefixer(opts) {
  return function *autoprefixer (next) {
    yield next

    var body = this.body.toString()

    if (body == 'Not Found') {
      throw new Error('路径：' + this.path + ' 对应的文件没有找到')
    }

    opts = opts || {}

    this.body = yield coautoprefixer(body, opts)
    this.type = 'text/css'
  }
}

module.exports = Autoprefixer