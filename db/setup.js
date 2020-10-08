const {
  User,
  Unit,
  Equipment,
  Job,
  Region,
  Discipline,
  Ability
} = require('../models')
const sequelize = require('sequelize')

createTables = async () => {
  await User.sync({force: true})
  await Unit.sync({force: true})
  await Equipment.sync({force: true})
  await Job.sync({force: true})
  await Region.sync({force: true})
  await Discipline.sync({force: true})
  await Ability.sync({force: true})
  console.log('Database tables created')
}

createTables()