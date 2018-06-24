var Task = function (name) {
	this.name = name
}

Task.prototype.save = function () {
	console.log('saving task ' + this.name)
}

Task.prototype.complete = function () {
	console.log('completing task ' + this.name)
}

module.exports = Task
