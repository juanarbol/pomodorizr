const timerFunction = require('./timerFunction')
const defaultConfig = require('./defaults')

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
    } = config

    this.dimention = dimention || defaultConfig.dimention
    this.longBreakDuration = longBreakDuration || defaultConfig.longBreakDuration
    this.numberOfBreaks = numberOfBreaks || defaultConfig.numberOfBreaks
    this.shortBreakDuration = shortBreakDuration || defaultConfig.shortBreakDuration
    this.tomatoDuration = tomatoDuration || defaultConfig.tomatoDuration
    this.tomatos = tomatos || defaultConfig.tomatos
    this.ununfinishedTomatos = unfinishedTomatos || defaultConfig.unfinishedTomatos
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
   * @returns Momentjs duration object
   */
  buildTomato () {
    return this.buildDuration()
  }

  /**
   * This method will return a short break timer
   * * @returns Momentjs duration object
   */
  buildShortBreak () {
    return this.buildDuration(this.shortBreakDuration, this.dimetion, 'break')
  }

  /**
   * This method will return a long break timer
   * * @returns Momentjs duration object
   */
  buildLongBreak () {
    return this.buildDuration(this.longBreakDuration, this.units, 'break')
  }
}

module.exports = Pomodorizr
