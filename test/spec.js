const app = require('supertest')(require('../app'));
const { expect } = require('chai');
const {
	syncAndSeed,
	models: { Movie },
} = require('../db');
const two = require('../index');

describe('Our App', () => {
	beforeEach(async () => {
		await syncAndSeed();
	});
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
	describe('movies', () => {
		it('has four movies', async () => {
			const movies = await Movie.findAll();
			expect(movies.length).to.equal(4);
		});
	});
});
