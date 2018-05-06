const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    'message': 'Hello World!'
  })
})

app.listen(3000, '0.0.0.0', () => {
  console.log('Listening on http://0.0.0.0:3000')
})
