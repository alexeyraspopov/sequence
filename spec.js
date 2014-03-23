/* global describe, it */
'use strict';
var should, sequence;

should = require('should');
sequence = require('./index');

describe('sequences', function(){
	function inc(number){
		return number + 1;
	}

	function isEven(number){
		return number % 2 === 0;
	}

	it('should have mapper', function(){
		var actual, expected;

		actual = sequence.create([1, 2, 3])
			.map(inc);

		// [1, 2, 3] -> [2, 3, 4]
		expected = [2, 3, 4];

		actual.value().should.eql(expected);
	});

	it('should have filter', function(){
		var actual, expected;

		actual = sequence.create([1, 2, 3])
			.filter(isEven);

		// [1, 2, 3] -> [2]
		expected = [2];

		actual.value().should.eql(expected);
	});

	it('should have mapper and filter', function(){
		var actual, expected;

		actual = sequence.create([1, 2, 3])
			.map(inc)
			.filter(isEven);

		// [1, 2, 3] -> [2, 3, 4] -> [2, 4]
		expected = [2, 4];

		actual.value().should.eql(expected);
	});
});
