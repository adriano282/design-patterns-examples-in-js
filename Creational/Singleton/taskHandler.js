var repo = require('./repo')

var myRepo = repo

var handler = function () {
	save = function () {
		myRepo.save('saving from my taskhandler')
	}

	return {
		save: save
	}
}

module.exports = handler()
