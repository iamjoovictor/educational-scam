const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuarioRoutes');
const logRoutes = require('./routes/logRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', usuarioRoutes);
app.use('/api', logRoutes);

module.exports = app;