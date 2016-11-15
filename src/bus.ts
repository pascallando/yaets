import riot = require('riot')

import {MyService} from './services/MyService'

export default function () {
    riot.observable(this)

    this.myService = new MyService()

    this.on('my-event', () => {
        console.log("My event was fired!")
        this.myService.say("Hi")
    })
}
