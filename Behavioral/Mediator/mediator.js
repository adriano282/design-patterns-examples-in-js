var mediator = (function ()
{
	var channels = {}
	var subscribe = function (channel, context, func) 
	{
		if ( !mediator.channels[channel] ) { mediator.channels[channel] = [] }

		mediator
			.channels[channel]
			.push({
				context: context,
				func: func
			})
	}

	var publish = function (channel) {

		if (!mediator.channels[channel]) { return false }

		var args = Array.prototype.slice.call(arguments, 1)

		for ( var i = 0; i < mediator.channels[channel].length; i++)
		{
			var sub = mediator.channels[channel][i]
			sub.func.apply(sub.context, args)
		}
	}
	
	return {
		channels: channels,
		subscribe: subscribe,
		publish: publish
	}
}())


module.exports = mediator
