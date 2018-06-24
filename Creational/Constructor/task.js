var Task = function (name) {
	this.name = name;
	this.completed = false;
}

Task.prototype.complete = function () {
	this.completed = true
        console.log('completing task ' + this.name)
}

Task.prototype.save = function () {
	console.log('saving task ' + this.name)
}

Task.prototype.toString = function () {
	return this.name
}

module.exports = Task
