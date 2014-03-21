/* global describe, it */
'use strict';
var should = require('should');

describe('sequences', function(){
	it('should pass', function(){
		(true).should.be.exactly(true);
	});
});
