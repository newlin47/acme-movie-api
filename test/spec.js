const app = require('supertest')(require('../app'));
const { expect } = require('chai');
const { syncAndSeed } = require('../db');
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
	describe('movies api', () => {
		it('returns 4 movies', async () => {
			const movies = await app.get('/api/movies');
			expect(movies.body.length).to.equal(4);
		});
	});
	describe('actors api', () => {
		it('returns 5 actors', async () => {
			const actors = await app.get('/api/actors');
			expect(actors.body.length).to.equal(5);
		});
	});
	describe('roles api', () => {
		it('returns 5 roles', async () => {
			const roles = await app.get('/api/roles');
			expect(roles.body.length).to.equal(6);
		});
	});
});
