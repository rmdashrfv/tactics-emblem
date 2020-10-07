const express = require('express')
const app = express()
const morgan = require('morgan')
const host = '127.0.0.1'
const PORT = 8000

app.use(morgan('dev'))
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send({message: 'success'})
})

app.listen(PORT, host, () => {
  console.log(`Server is running on ${host}:${PORT}`)
})
