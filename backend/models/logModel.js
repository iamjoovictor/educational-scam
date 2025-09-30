const db = require('../db/database');

const LogModel = {
    create: (tipo, callback) => {
        const timestamp = new Date().toISOString();
        db.run("INSERT INTO logs (tipo, timestamp) VALUES (?, ?)",
            [tipo, timestamp], function (err) {
                callback(err, { id: this.lastID, tipo, timestamp });
            });
    },
    getAll: (callback) => {
        db.all("SELECT * FROM logs ORDER BY timestamp DESC", [], (err, rows) => {
            callback(err, rows);
        });
    }
};

module.exports = LogModel;