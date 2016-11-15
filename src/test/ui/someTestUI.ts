/**
 * @see http://electron.atom.io/spectron/
 * @see http://webdriver.io/api/
 * @see https://github.com/domenic/chai-as-promised
 */

const Application = require('spectron').Application
const path = require('path')
const chaiAsPromised = require('chai-as-promised')

import * as mocha from 'mocha'
import * as chai from 'chai'

chai.should()
chai.use(chaiAsPromised)

// TODO: clean this...
var electronPath = path.join(__dirname, '../../..', 'node_modules', '.bin', 'electron')
var appPath = path.join(__dirname, '../../..')

var app = new Application({
    path: electronPath,
    args: [appPath]
})




describe('UI Tests', function () {

    this.timeout(5000);

    beforeEach(function () {
        return app.start()
    })

    afterEach(function () {
        return app.stop()
    })

    it('Should make the app visible', function () {
        return app.browserWindow.isVisible().should.eventually.equal(true)
    })

    it('Should set the title to "Pacer"', function () {
        return app.client.getTitle().should.eventually.equal("Pacer")
    })

    it('Should set value properly', function () {
        let selector: string = 'input[name="speedInput"]'

        return app.client
        .click('#myButton')
        .waitForValue(selector, 1000)
        .getValue(selector)
        .should.eventually.equal('145')
    })

    it('Should calculate pace and duration from speed and distance', function () {

        let scenario = app.client
        .setValue('input[name="speedInput"]', 12)
        .setValue('input[name="distanceInput"]', 12)
        .waitForValue('input[name="paceMinInput"]', 1000)
        .waitForValue('input[name="paceSecInput"]', 1000)
        .waitForValue('input[name="durationHourInput"]', 1000)
        .waitForValue('input[name="durationMinInput"]', 1000)
        .waitForValue('input[name="durationSecInput"]', 1000)

        return Promise.all([
            scenario.getValue('input[name="paceMinInput"]').should.eventually.equal('5'),
            scenario.getValue('input[name="paceSecInput"]').should.eventually.equal('00'),
            scenario.getValue('input[name="durationHourInput"]').should.eventually.equal('1'),
            scenario.getValue('input[name="durationMinInput"]').should.eventually.equal('0'),
            scenario.getValue('input[name="durationSecInput"]').should.eventually.equal('0'),
        ])
    })

    it('Should calculate pace and duration from speed and distance', function () {

        let scenario = app.client
        .setValue('input[name="distanceInput"]', 10)
        .setValue('input[name="durationHourInput"]', 0)
        .setValue('input[name="durationMinInput"]', 34)
        .setValue('input[name="durationSecInput"]', 15)
        .waitForValue('input[name="speedInput"]', 1000)
        .waitForValue('input[name="paceMinInput"]', 1000)
        .waitForValue('input[name="paceSecInput"]', 1000)

        return Promise.all([
            scenario.getValue('input[name="speedInput"]').should.eventually.equal('17.52'),
            scenario.getValue('input[name="paceMinInput"]').should.eventually.equal('3'),
            scenario.getValue('input[name="paceSecInput"]').should.eventually.equal('25.5'),
        ])
    })

});

