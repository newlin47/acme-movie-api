const express = require('express');
const path = require('path');
const {
	models: { Movie, Actor, Role },
} = require('./db');

const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/movies', async (req, res, next) => {
	try {
		res.send(await Movie.findAll());
	} catch (ex) {
		next(ex);
	}
});

app.get('/api/actors', async (req, res, next) => {
	try {
		res.send(await Actor.findAll());
	} catch (ex) {
		next(ex);
	}
});

app.get('/api/roles', async (req, res, next) => {
	try {
		res.send(await Role.findAll());
	} catch (ex) {
		next(ex);
	}
});

module.exports = app;
