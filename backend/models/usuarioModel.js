const db = require('../db/database');

const UsuarioModel = {
    create: (nome, idade, turma, callback) => {
        db.run("INSERT INTO usuarios (nome, idade, turma) VALUES (?, ?, ?)",
        [nome, idade, turma], function (err) {
            callback(err, { id: this.lastID, nome, idade, turma });
        });
    },

    getAllUsuarios: (callback) => {
        db.all('SELECT * FROM usuarios', [], (err, rows) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, rows);
            }
        });
    }
};

module.exports = UsuarioModel;