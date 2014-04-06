var SILLY = (function(module){
	module.DoIt = function(resultobject){
		resultobject.prepend(Date() + '<br/>');
	};
	return module;
}(SILLY || {}));
