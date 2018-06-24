var factoryRepo = require('./factoryRepo')

var user = factoryRepo.user.get(1)

console.log(user)

var project = factoryRepo.project.get(1)

console.log(project)

var task = factoryRepo.task.get(1)

console.log(task)
