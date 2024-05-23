"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controlador_1 = require("./controlador");
const router = express_1.default.Router();
router.post('/codigo', controlador_1.agregarCodigo);
router.get('/versiones', controlador_1.consultarVersionesDeCodigo);
exports.default = router;
