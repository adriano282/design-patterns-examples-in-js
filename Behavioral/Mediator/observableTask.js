var ObserverList = require('./observerList')
var Task = require('./task')

var ObservableTask = function (data) {
        Task.call(this, data) // calling the Task's constructor
  
        this.observers = new ObserverList()
}

ObservableTask.prototype.addObserver = function( observer ) {
        this.observers.add( observer )
}

ObservableTask.prototype.removeObserver = function ( observer ) {
        var indexOf = this.observers.indexOf(observer, 0)
        this.observers.removeAt(indexOf)
}

ObservableTask.prototype.notify = function ( context ) {
        var observerCount = this.observers.count()

        for ( var i = 0; i < observerCount; i++ ) {
                this.observers.get(i)(context)
        }
}

ObservableTask.prototype.save = function () {
        this.notify(this)
        Task.prototype.save.call(this)
}

module.exports = ObservableTask



