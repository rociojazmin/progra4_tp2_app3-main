"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.traerEditorDeCodigo = exports.crearEditorDeCodigo = exports.ejecutarCodigo = exports.consultarVersionesDeCodigo = exports.agregarCodigo = void 0;
const Modelo_1 = require("./Modelo");
function agregarCodigo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { codigo } = req.body;
        try {
            yield (0, Modelo_1.AgregarCodigo)(codigo);
            res.status(201).send('Código agregado exitosamente');
        }
        catch (error) {
            res.status(500).send('Error al agregar el código');
        }
    });
}
exports.agregarCodigo = agregarCodigo;
function consultarVersionesDeCodigo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const versiones = yield (0, Modelo_1.ConsultarVersionesDeCodigo)();
            res.json(versiones);
        }
        catch (error) {
            res.status(500).send('Error al consultar las versiones de código');
        }
    });
}
exports.consultarVersionesDeCodigo = consultarVersionesDeCodigo;
function ejecutarCodigo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { codigo } = req.body;
        try {
            const resultado = (0, Modelo_1.EjecutarCodigo)(codigo);
            res.json({ resultado });
        }
        catch (error) {
            res.status(500).send('Error al ejecutar el código');
        }
    });
}
exports.ejecutarCodigo = ejecutarCodigo;
function crearEditorDeCodigo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, Modelo_1.CrearEditorDeCodigo)();
            res.status(201).send('Editor de código creado exitosamente');
        }
        catch (error) {
            res.status(500).send('Error al crear el editor de código');
        }
    });
}
exports.crearEditorDeCodigo = crearEditorDeCodigo;
function traerEditorDeCodigo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const editor = yield (0, Modelo_1.TraerEditorDeCodigo)();
            res.json(editor);
        }
        catch (error) {
            res.status(500).send('Error al traer el editor de código');
        }
    });
}
exports.traerEditorDeCodigo = traerEditorDeCodigo;
