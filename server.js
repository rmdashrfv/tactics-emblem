const express = require('express')
const bcrypt = require('bcrypt')
const sassMiddleware = require('node-sass-middleware')
const path = require('path')
const saltRounds = 10
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const host = process.env.host || '127.0.0.1'
const PORT = 8000
const { User } = require('./models')
const { Liquid } = require('liquidjs')
const engine = new Liquid()

app.use(express.json())
app.engine('liquid', engine.express({root: ['.', 'layouts']}))
app.use(bodyParser.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded
app.use(morgan('dev'))
app.set('views', './views')
app.set('view engine', 'liquid')
app.use(sassMiddleware({
  src: './assets/stylesheets',
  dest: path.join(__dirname, 'public'),
  debug: true,
  force: true,
  outputStyle: 'expanded'
}))

app.use(express.static(path.join(__dirname, 'public')))

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
