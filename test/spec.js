const { expect } = require('chai');
const two = require('../index.js');

describe('Our App', () => {
	it('equals two', () => {
		expect(two).to.equal(2);
	});
});
