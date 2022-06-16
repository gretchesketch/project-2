const { Pool } = require('pg');
const router = require("express").Router();
const { Post, Comment } = require("../../models");
//const withAuth = require("../../utils/auth");


app.get('/', (req, res) => listVideogames(req, res))

async function listVideogames(req, res) {
    try {
    const db = await conn.connect()
    const result = await db.query('SELECT * FROM videogames');
    const results = { videogames: (result) ? result.rows : null};
    res.render('search', results );
    db.release();
    } catch (err) {
    console.error(err);
    res.send("Error " + err);
    }
    }