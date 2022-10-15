const app = require('supertest')(require('../app'));
const { expect } = require('chai');
const two = require('../index');

describe('Our App', () => {
	describe('app basics', () => {
		it('equals two', () => {
			expect(two).to.equal(2);
		});
	});
	describe('homepage', () => {
		it('has sample html', async () => {
			const response = await app.get('/');
			expect(response.status).to.equal(200);
		});
	});
});
