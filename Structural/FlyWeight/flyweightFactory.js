var Flyweight = require('./flyweight')

var FlyweightFactory = function() {
        var flyweights = {}

        var get = function (priority, user,  project, completed) {

                var flyweight = flyweights[priority + user + project + completed]

                if (!flyweight) {
                        flyweight = new Flyweight(priority, user, project, completed)
                        flyweights[priority + user + project + completed] = flyweight
                }
                return flyweight
        }

        var size = function () {
                var count = 0
                for (var f in flyweights) {
                        count++
                }
                return count
        }

        return {
                get: get,
                size: size
        }
}

module.exports = FlyweightFactory()

