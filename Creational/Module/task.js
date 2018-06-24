class Task {
	constructor (name) {
		this.name = name
	}

	save () {
		console.log('savinng task ' + this.name)
	}

	toString () {
		return this.name
	}
}

module.exports = Task
