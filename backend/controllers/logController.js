const LogModel = require('../models/logModel');

const LogController = {
    createLog: (req, res) => {
        const { tipo } = req.body;
        if (!tipo) return res.status(400).json({ error: "Tipo é obrigatório"});

        LogModel.create(tipo, (err, log) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json(log);
        });
    },

    getLogs: (req, res) => {
        LogModel.getAll((err, logs) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(logs);
        });
    }
};

module.exports = LogController;