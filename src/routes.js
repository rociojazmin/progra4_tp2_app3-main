"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes.ts
const express_1 = require("express");
const controlador_1 = require("./controlador");
const router = (0, express_1.Router)();
router.post('/codigo', controlador_1.agregarCodigo);
router.get('/versiones', controlador_1.consultarVersionesDeCodigo);
router.post('/ejecutar', controlador_1.ejecutarCodigo);
router.post('/editor/crear', controlador_1.crearEditorDeCodigo);
router.get('/editor', controlador_1.traerEditorDeCodigo);
exports.default = router;
