const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('postgres://mlaw:cjiaang11@localhost/tacticsemblem')

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATE
  },
  bio: {
    type: DataTypes.STRING
  },
  rank: {
    type: DataTypes.ENUM,
    values: ['Beginniner', 'Novice Adventurer', 'Adventurer', 'Warrior']
  },
  zodiac: {
    type: DataTypes.ENUM,
    values: ['Capricorn', 'Cancer', 'Libra', 'Saggitarius']
  },
  exp: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  metadata: {
    type: DataTypes.JSONB,
    defaultValue: {}
  }
})

const Unit = sequelize.define('Unit', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.ENUM,
    values: ['Male', 'Female', 'None']
  },
  zodiac: {
    type: DataTypes.ENUM,
    values: ['Capricorn', 'Cancer', 'Libra', 'Saggitarius']
  },
  maxHp: {
    type: DataTypes.INTEGER,
    defaultValue: 100
  },
  maxMp: {
    type: DataTypes.INTEGER,
    defaultValue: 10
  },
  strength: {
    type: DataTypes.INTEGER,
    defaultValue: 10
  },
  magicAtk: {
    type: DataTypes.INTEGER,
    defaultValue: 8
  },
  equipment: {
    type: DataTypes.JSONB,
    defaultValue: {
      right: null, left: null, helmet: null, body: null, shoes: null, accessory: null
    }
  },
  level: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  moveRange: {
    type: DataTypes.INTEGER,
    defaultValue: 3
  },
  bravery: {
    type: DataTypes.INTEGER,
    default: 85
  },
  faith: {
    type: DataTypes.INTEGER,
    default: 75
  },
  exp: {
    type: DataTypes.INTEGER,
    default: 0
  },
  jp: {
    type: DataTypes.JSONB,
    default: {Squire: 0}
  }
})

const Discipline = sequelize.define('Disciplines', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  abilities: {
    type: DataTypes.JSONB
  }
})

const Ability = sequelize.define('Abilities', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  damage: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
})

const Region = sequelize.define('Region', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

