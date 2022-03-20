module.exports.serverGet = function(port="8000", dir="/", resp) {
  const express = require('express')
  const app = express()
  
  app.get(`${dir}`, function (req, res) {
    res.send(`${resp}`)
  })
  app.listen(port)
}