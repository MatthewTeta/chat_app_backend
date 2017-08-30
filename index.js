const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>Chat App Backend</h1>')
})

app.listen(3000, function () {
  console.log('Chat app listening on port 3000!')
})