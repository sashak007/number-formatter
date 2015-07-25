'use strict';

var expect = require('chai').expect,
	  numFormatter = require('@jdaudier/number-formatter');

describe('#numFormatter', function(){

	it('should convert a single digit', function(){

		var result = numFormatter(1);

		expect(result).to.equal('1');

	});

	it('should convert double digits', function(){

		var result = numFormatter(12);

		expect(result).to.equal('12');

	});

	it('should convert triple digits', function(){

		var result = numFormatter(123);

		expect(result).to.equal('123');

	});

	it('should convert four digits', function(){

		var result = numFormatter(1234);

		expect(result).to.equal('1,234');

	});

	it('should convert five digits', function(){

		var result = numFormatter(12345);

		expect(result).to.equal('12,345');

	});

	it('should convert six digits', function(){

		var result = numFormatter(123456);

		expect(result).to.equal('123,456');

	});

	it('should convert seven digits', function(){

		var result = numFormatter(1234567);

		expect(result).to.equal('1,234,567');

	});

	it('should convert eight digits', function(){

		var result = numFormatter(12345678);

		expect(result).to.equal('12,345,678');

	});


});