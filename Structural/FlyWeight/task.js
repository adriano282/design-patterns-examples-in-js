var FlyweightFactory = require('./flyweightFactory')

var Task = function (data) {
        this.flyweight = FlyweightFactory.get(data.priority, data.user, data.project, data.completed)
        this.name = data.name
//	this.priority = data.priority
//	this.user = data.user
//	this.project = data.project
//	this.completed = data.completed
}

Task.prototype.priority = function () {
        return this.flyweight.priority
}

module.exports = Task

