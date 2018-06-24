var Task = require('./task')

var legacyTask = new Task('legacy task')


var urgentTask = new Task('urgent task')

legacyTask.notify = function () {
	console.log('notifying ...')
}

// here is the decorator
// we are decorating our save method without breaking it
legacyTask.save = function () {
	this.notify()	
	Task.prototype.save.call(this)
}

legacyTask.save()
urgentTask.save() 
