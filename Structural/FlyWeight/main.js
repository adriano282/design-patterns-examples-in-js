var FlyweightFactory = require('./flyweightFactory')
var TaskCollection = require('./taskCollection')


var projects = ['none', 'courses', 'training', 'project']
var priorities = [1, 2, 3, 4, 5]
var users = ['Gabriel', 'Aline', 'Adriano', 'Nathan']
var completed = [true, false]

var tasks = new TaskCollection()

var initialMemory = process.memoryUsage().heapUsed

for (var i = 0; i < 1000000; i++) {
        
	tasks.add({
		name: 'task' + i,
		user: users[Math.floor((Math.random() * 4))],
		priority: priorities[Math.floor((Math.random() * 5))],
		project: projects[Math.floor((Math.random() * 4))],
		completed: completed[Math.floor((Math.random() * 2))]
	})
}


var afterMemory = process.memoryUsage().heapUsed

console.log('Memory used: ' + ((afterMemory - initialMemory) / 1000000) + ' mb.')
console.log('Tasks: ' + tasks.size())
console.log('Flyweights: ' + FlyweightFactory.size())
