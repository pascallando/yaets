import * as mocha from 'mocha'
import {assert} from 'chai'

import {MyService} from '../services/MyService'


describe('MyService', () => {

    var myService: MyService

    beforeEach(function() {
         myService = new MyService()
    })

    describe('Perform addition.', () => {
        it('Should perform an addition correctly', () => {
            assert.equal(myService.add(2, 4), 6)
        })
    })
})

