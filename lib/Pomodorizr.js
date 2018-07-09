const timerFunction = require('./timerFunction')

// Durations are defined in minutes by convention
const defaultConfig = {
  dimention: 'minutes',
  longBreakDuration: 15,
  numberOfBreaks: 0,
  shortBreakDuration: 5,
  tomatoDuration: 25,
  tomatos: 0,
  unfinishedTomatos: 0
}

class Pomodorizr {
  constructor (config = defaultConfig) {
    const {
      dimention,
      longBreakDuration,
      numberOfBreaks,
      shortBreakDuration,
      tomatoDuration,
      tomatos,
      unfinishedTomatos
    } = defaultConfig

    this.dimention = dimention || 'minutes'
    this.longBreakDuration = longBreakDuration || 15
    this.numberOfBreaks = numberOfBreaks || 0
    this.shortBreakDuration = shortBreakDuration || 5
    this.tomatoDuration = tomatoDuration || 25
    this.tomatos = tomatos || 0
    this.ununfinishedTomatos = unfinishedTomatos || 0
  }

  /**
   * This method will create a momentjs duration
   * @param {Number} units Number of time to me measured
   * @param {String} dimetion Minutes, seconds, hours...
   * @param {String} type Pomodoro or break
   * @returns Momentjs duration object
   */
  buildDuration (units = this.tomatoDuration, dimetion = this.dimetion, type = 'tomato') {
    const timer = timerFunction(units, dimetion)
    this.countTimer(type)

    return timer
  }

  /**
   * This method will count tomatos and breaks
   * @param {string} type Tipe of tomato (break or tomato)
   * @returns {void}
   */
  countTimer (type) {
    const isTomato = (type === 'tomato')
    const isBreak = !isTomato

    this.tomatos += isTomato
    this.numberOfBreaks += isBreak
  }

  /**
   * This method will generate a tomato timer
   */
  buildTomato () {
    return this.buildDuration()
  }

  /**
   * This method will return a short break timer
   */
  buildShortBreak () {
    return this.buildDuration(this.shortBreakDuration, this.dimetion, 'break')
  }

  /**
   * This method will return a long break timer
   */
  buildLongBreak () {
    return this.buildDuration(this.longBreakDuration, this.units, 'break')
  }
}

module.exports = Pomodorizr
