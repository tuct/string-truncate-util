'use strict';
// Note this is small letters
var expect = require('chai').expect;
var truncate = require('../index');

describe('truncate', function() {
	it('truncates a array of strings with more string', function() {
		expect(truncate().arrayOfStrings(["tobi","manf","hubsi","otto","hildergrad"])).to.equal('tobi, manf, hubsi, 2 more');
	});
	it('truncates the last element', function() {
		expect(truncate().arrayOfStrings(["tobi","manf","hubsi","hildergrad"])).to.equal('tobi, manf, hubsi, hil...');
	});
	it('displays all items if possible', function() {
		expect(truncate().arrayOfStrings(["tobi","manf",])).to.equal('tobi, manf');
	});
	it('truncates but don\'t display more message' , function() {
		expect(truncate().arrayOfStrings(["tobitobitobitobitobitobitobitobitobitobitobitobi"])).to.equal('tobitobitobito...');
	});
	it('truncates a array of strings with more string', function() {
		expect(truncate().arrayOfStrings(["tobi","tobi","to","tobias","tobias"])).to.equal('tobi, tobi, to, ...2 more');
	});
	it('truncates a array of strings with more string without padding to max chars', function() {
		expect(truncate({
			nodes: {
				paddingChar: null
			}
		}).arrayOfStrings(["tobi","tobi","to","tobias","tobias"])).to.equal('tobi, tobi, to, 2 more');
	});

	it('is possible to change minWordLength', function() {
		expect(truncate({
			nodes:{
				minWordLength: 7,
				paddingChar: null
			}
		}).arrayOfStrings(["tobi","manf","hubsi","hildergrad"])).to.equal('tobi, manf, 2 more');
	});

	it('return truncateString when maxChars is too short',function() {
		expect(truncate().string("tobias",2)).to.equal('...');
	});
	it('truncates a string',function() {
		expect(truncate().string("tobias",5)).to.equal('to...');
	});
	it('is possible to change the truncate string',function() {
		expect(truncate({truncateString: ".."}).string("tobias stanzel",3)).to.equal('t..');
	});
	it('can be used to count hidden words',function() {
		var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut iaculis justo, tincidunt consequat sapien. Sed ultricies sagittis metus, at consequat elit venenatis a. Aliquam.";
		expect(truncate({
			maxLength: 70,
			nodes: {
				paddingChar: null,
				separator: " ",
				moreSuffix: ", %d more words"
			}
		}).arrayOfStrings(text.split(" "))).to.equal('Lorem ipsum dolor sit amet, consectetur adipiscing e..., 17 more words');
	});

			


});
