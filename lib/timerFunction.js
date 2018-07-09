const { duration } = require('moment')

const timerFunction = (units, dimension = 'minutes') => {
  return duration(units, dimension)
}

module.exports = timerFunction
