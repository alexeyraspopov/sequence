'use strict';

var monad = require('monad').monad;

var sequence = monad();

sequence.lift('map', function(value, fn){
	return value.map(fn);
});

sequence.lift('filter', function(value, fn){
	return value.filter(fn);
});

sequence.liftValue('value', function(value){
	return value;
});

exports.create = function(value){
	return sequence(value);
};
