const express = require('express')
const bcrypt = require('bcrypt')
const saltRounds = 10
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const host = '127.0.0.1'
const PORT = 8000


app.use(express.json())
app.use(bodyParser.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded
app.use(morgan('dev'))
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/home', {title: 'Welcome'})
})

app.post('/signup', (req, res, next) => {
  let user = req.body.user
  bcrypt.hash(user.password, saltRounds, function(err, hash) {
    user.password = hash
    res.send({message: 'Registration successful', data: user})
  })
})

app.listen(PORT, host, () => {
  console.log(`Server is running on ${host}:${PORT}`)
})
