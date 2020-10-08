const express = require('express')
const bcrypt = require('bcrypt')
const saltRounds = 10
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const host = '127.0.0.1'
const PORT = 8000
const { User } = require('./models')

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded
app.use(morgan('dev'))
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/home', {title: 'Welcome'})
})

app.post('/signup', (req, res, next) => {
  let user = User.build(req.body.user)
  bcrypt.hash(user.password, saltRounds, function(err, hash) {
    user.password = hash
    try {
      user.save()
      res.send({message: 'success', user: user.username})
      // log in the user
      // navigate to finish the profile
    } catch (error) {
      res.send({error: error.message})  
    }
  })
})

app.get('/commence', (req, res, next) => {
  // get user data from session
  // ask for birthday & bio
  // set zodiac
  // navigate to party formation screen
})

app.get('/formation', (req, res, next) => {
  // shows slightly different screen based on whether or not they have party members already
  // create party
})

app.post('/login', (req, res, next) => {

})

app.get('/player/:username', async (req, res, next) => {
  let user = await User.findOne({where: {username: req.params.username}})
  res.render('players/profile', {user: user})
})

app.listen(PORT, host, () => {
  console.log(`Server is running on ${host}:${PORT}`)
})
