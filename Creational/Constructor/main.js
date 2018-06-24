var Task = require('./task')

var task1 = new Task('creating demo task for construction')
var task2 = new Task('creating demo task for singleton')
var task3 = new Task('creating demo task for module')
var task4 = new Task('creating demo task for prototype')

task1.complete()
task2.save()
task3.save()
task4.save()


