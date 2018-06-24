
var userRepo = function () {

	get = function (id) {
		console.log('getting user with id ' + id)
		return { id: id, user: 'adriano'}
	}
	return {
		get: get
	}
}

module.exports = userRepo 
