var taskRepo = function ()  {

	get = function (id) {
		console.log('getting task with id ' + id)
		return { id: id, description: 'task description' }
	}

	return {
		get: get
	}
}

module.exports = taskRepo 
