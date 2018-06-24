var Task = require('./task')

var f = function TaskCollection () {
        var tasks = {}
        var count = 0
        var add = function (data) {
                tasks[data.name] = new Task(data)
                count++
        }

        var get = function (name) {
                return tasks[name]
        }

        var size = function () {
                return count
        }

        return {
                size: size,
                get: get,
                add: add
        }
}

module.exports = f

