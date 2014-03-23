'use strict';

exports.create = function(value){
	return new Sequence(value);
};

function Sequence(value){
	this.data = value;
}

Sequence.prototype.map = function(fn){
	return new MapSequence(this, fn);
};

Sequence.prototype.filter = function(fn){
	return new FilterSequence(this, fn);
};

Sequence.prototype.value = function(){
	return this.data;
};

function FilterSequence(parent, fn){
	this.fn = fn;
	this.parent = parent;
}

FilterSequence.prototype = Object.create(Sequence.prototype);

FilterSequence.prototype.value = function(){
	return this.parent.value().filter(this.fn);
};

function MapSequence(parent, fn){
	this.fn = fn;
	this.parent = parent;
}

MapSequence.prototype = Object.create(Sequence.prototype);

MapSequence.prototype.value = function(){
	return this.parent.value().map(this.fn);
};
