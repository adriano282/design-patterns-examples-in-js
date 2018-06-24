var repo = function () {

	save = function (msg) {
		console.log(msg)
	}
	
	console.log('creating a new repo')
	return {
		save: save
	}
}

module.exports = repo() // here is the singleton 
