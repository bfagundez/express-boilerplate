const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

// for parsing application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/formprocess', (req, res) => {
  console.log('req.body',req.body)
  console.log('req.params',req.params)
  res.send('got the params')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

