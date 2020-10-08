const {
  User,
  Unit,
  Equipment,
  Job,
  Region,
  Discipline,
  Ability
} = require('../models')
const { argv } = require('yargs')
const mode = argv.reset || false

createTables = async () => {
  await User.sync({force: mode})
  await Unit.sync({force: mode})
  await Equipment.sync({force: mode})
  await Job.sync({force: mode})
  await Region.sync({force: mode})
  await Discipline.sync({force: mode})
  await Ability.sync({force: mode})
  console.log(mode ? 'Database reset' : 'Database tables setup')
}

createTables()