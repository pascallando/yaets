import riot = require('riot')
import riotControl = require('riotcontrol')
import Datastore = require('nedb')
import Bus from './bus'

// Register central dispatch main events bus
riotControl.addStore(new Bus())

// Create the app database instance
let datastore = new Datastore({
    filename: 'db',
    autoload: true
})

// Start riot router
riot.route.start(true)
riot.route.base('#')

riot.route('/', () => {
    riot.mount('#app', 'app', {riotControl})
})
