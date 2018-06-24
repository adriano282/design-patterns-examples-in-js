var Task = require('./task')

var AuditingService = require('./auditingService')
var LoggingService = require('./loggingService')
var NotificationService = require('./notificationService')

var ObservableTask = require('./observableTask')

var task1 = new ObservableTask({name: 'create a demo for constructor', user: 'adriano.jesus2@fatec.sp.gov.br'})

var auditingS = new AuditingService()
var loggingS = new LoggingService()
var notificationS = new NotificationService()

task1.addObserver(auditingS.update)
task1.addObserver(loggingS.update)
task1.addObserver(notificationS.update)

task1.save()

console.log('removing the auditing observer')
task1.removeObserver(auditingS.update)

task1.save()
