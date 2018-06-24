var mediator = require('./mediator')

var Task = require('./task')

var AuditingService = require('./auditingService')
var LoggingService = require('./loggingService')
var NotificationService = require('./notificationService')

var ObservableTask = require('./observableTask')

var task1 = new ObservableTask({name: 'create a demo for constructor', user: 'adriano.jesus2@fatec.sp.gov.br'})

var auditingS = new AuditingService()
var loggingS = new LoggingService()
var notificationS = new NotificationService()

mediator.subscribe('save', auditingS, auditingS.update)
mediator.subscribe('save', loggingS, loggingS.update)
mediator.subscribe('save', notificationS, notificationS.update)

task1.save = function () {
	mediator.publish('save', this)
	Task.prototype.save.call(this)
}

task1.save()

