const express = require('express');
const router = express.Router();
const calculadoraControllers = require('../controllers/calculadoraControllers.js');

router
    .post('/sumar', calculadoraControllers.sumar)
    .post('/restar', calculadoraControllers.restar)
    .post('/multiplicar', calculadoraControllers.multiplicar)
    .post('/ordenarAscendente', calculadoraControllers.ordenarAscendente)
    .post('/ordenarDescendente', calculadoraControllers.ordenarDescendente)
    .post('/evaluar', calculadoraControllers.evaluarEcuacion);

module.exports = router;
