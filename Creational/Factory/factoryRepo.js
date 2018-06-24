var factoryRepo = function () {
	var repos = this
	var repoList = 
	[
		{name: 'task', source: './taskRepo'},
		{name: 'project', source: './projectRepo'},
		{name: 'user', source: './userRepo'}
	]

	repoList.forEach (function(repo) {
		repos[repo.name] = require(repo.source)()	
	})
}
module.exports = new factoryRepo
