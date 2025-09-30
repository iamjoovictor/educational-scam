const UsuarioModel = require('../models/usuarioModel');

const UsuarioController = {
    createUsuario: (req, res) => {
        const { nome, idade, turma } = req.body;
        if (!nome || !idade || !turma) {
            return res.status(400).json({ error: "Campos obrigatórios" });
        }

        UsuarioModel.create(nome, idade, turma, (err, usuario) => {
            console.log("Dados recebidos:", nome, idade, turma);
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json(usuario);
        });
    },

    listUsuarios: (req, res) => {
        UsuarioModel.getAllUsuarios((err, usuarios) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(usuarios);
        });
    }
};

module.exports = UsuarioController;