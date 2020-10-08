const {
  User,
  Unit,
  Equipment,
  Job,
  Region,
  Discipline,
  Ability,
} = require('../models')

createTables = async () => {
  await User.sync()
  await Unit.sync()
  await Equipment.sync()
  await Job.sync()
  await Region.sync()
  await Discipline.sync()
  await Ability.sync()
  console.log('Database tables created')
}

createTables()