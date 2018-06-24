var Task = require('./task')
var Repo = require('./taskRepository')

var task1 = new Task('create a demo for module')
var task2 = new Task('create a demo for singleton')

task1.save()
task2.save() 


Repo.save(task1)
Repo.save(task2)

Repo.get('10')
Repo.get('20')
