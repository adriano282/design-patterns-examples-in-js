var Task = function (data) {
	this.name = data.name
	this.user = data.user
}

Task.prototype.save = function () {
	console.log('saving task ' + this.name)
}

Task.prototype.complete = function () {
	console.log('completing task ' + this.name)
}

module.exports = Task
