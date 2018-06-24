var projectRepo = function () {

	get = function(id) {
		console.log('getting project with id ' + id)
		return { id: id, project: 'project name' }
	}
	
	return {
		get: get
	}
}
module.exports = projectRepo

