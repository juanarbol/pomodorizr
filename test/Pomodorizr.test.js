/* eslint-disable no-unused-vars */
/* global beforeEach, describe, it, should */
const chai = require('chai')
const should = chai.should()
/* eslint-enable no-unused-vars */

const Pomodorizr = require('./../lib/Pomodorizr')

describe('Pomodorizr', () => {
  describe('# Defaults', () => {
    let pomodorized
    beforeEach(() => {
      pomodorized = new Pomodorizr()
    })

    it('Should return 25 as default tomato duration', () => {
      pomodorized.tomatoDuration.should.be.equal(25)

      const tomato = pomodorized.buildTomato()
      tomato.hours().should.equal(0)
      tomato.minutes().should.equal(25)
      tomato.seconds().should.equal(0)
    })

    it('Should return 15 as default long break duration', () => {
      pomodorized.longBreakDuration.should.be.equal(15)

      const tomato = pomodorized.buildLongBreak()
      tomato.hours().should.equal(0)
      tomato.minutes().should.equal(15)
      tomato.minutes().should.not.equal(25)
      tomato.seconds().should.equal(0)
    })

    it('Should return 5 as default short break duration', () => {
      pomodorized.shortBreakDuration.should.be.equal(5)

      const tomato = pomodorized.buildShortBreak()
      tomato.hours().should.equal(0)
      tomato.minutes().should.equal(5)
      tomato.minutes().should.not.equal(25)
      tomato.seconds().should.equal(0)
    })

    it('Should return minutes as default dimention', () => {
      pomodorized.dimention.should.be.equal('minutes')
    })

    it('Should initialize tomatos counter as 0', () => {
      pomodorized.tomatos.should.equal(0)
      pomodorized.tomatos.should.not.equal(1)
    })

    it('Should initialize breaks counter as 0', () => {
      pomodorized.numberOfBreaks.should.equal(0)
      pomodorized.numberOfBreaks.should.not.equal(1)
    })

    it('Should initialize ununfinishedTomatos counter as 0', () => {
      pomodorized.ununfinishedTomatos.should.equal(0)
      pomodorized.ununfinishedTomatos.should.not.equal(1)
    })
  })

  describe('# Counters', () => {
    let pomodorized
    beforeEach(() => {
      pomodorized = new Pomodorizr()
    })

    it('Should sum 1 to tomato counter when one is created', () => {
      pomodorized.buildDuration()
      pomodorized.tomatos.should.equal(1)

      pomodorized.buildTomato()
      pomodorized.tomatos.should.equal(2)

      pomodorized.buildTomato()
      pomodorized.tomatos.should.equal(3)
    })

    it('Should sum 1 to breaks counter when one is created', () => {
      pomodorized.buildShortBreak()
      pomodorized.numberOfBreaks.should.equal(1)

      pomodorized.buildShortBreak()
      pomodorized.numberOfBreaks.should.equal(2)

      pomodorized.buildShortBreak()
      pomodorized.numberOfBreaks.should.equal(3)
    })
  })
})
