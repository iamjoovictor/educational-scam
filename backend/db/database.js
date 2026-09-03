const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const databasePath = process.env.DB_PATH
    ? path.resolve(process.env.DB_PATH)
    : process.env.VERCEL
        ? '/tmp/database.sqlite'
        : path.join(__dirname, 'database.sqlite');

const db = new sqlite3.Database(databasePath);

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        idade INTEGER,
        turma TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tipo TEXT,
        timestamp TEXT
    )`);
});

module.exports = db;