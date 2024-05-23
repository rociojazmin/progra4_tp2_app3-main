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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraerEditorDeCodigo = exports.CrearEditorDeCodigo = exports.EjecutarCodigo = exports.ConsultarVersionesDeCodigo = exports.AgregarCodigo = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
const sqlite_1 = require("sqlite"); // Importa open y Database de sqlite para interactuar con la base de datos
let db; // Variable para almacenar la conexión a la base de datos
function inicializarDB() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!db) { // Si no hay conexión a la base de datos, inicializa una nueva
            db = yield (0, sqlite_1.open)({
                filename: './src/database.db', // Ruta del archivo de la base de datos
                driver: sqlite3_1.default.Database
            });
            yield db.exec(`
      CREATE TABLE IF NOT EXISTS VersionDeCodigo (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        codigo TEXT NOT NULL,
        fecha TEXT NOT NULL
      );
    `); // Crea la tabla VersionDeCodigo si no existe
            yield db.exec(`
      CREATE TABLE IF NOT EXISTS EditorDeCodigo (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        codigo TEXT NOT NULL
      );
    `); // Crea la tabla EditorDeCodigo si no existe
        }
    });
}
function AgregarCodigo(codigo) {
    return __awaiter(this, void 0, void 0, function* () {
        yield inicializarDB(); // Inicializa la base de datos si no está inicializada
        const fecha = new Date().toISOString(); // Obtiene la fecha actual en formato ISO
        yield db.run('INSERT INTO VersionDeCodigo (codigo, fecha) VALUES (?, ?)', [codigo, fecha]); // Inserta un nuevo registro en la tabla VersionDeCodigo
    });
}
exports.AgregarCodigo = AgregarCodigo;
function ConsultarVersionesDeCodigo() {
    return __awaiter(this, void 0, void 0, function* () {
        yield inicializarDB(); // Inicializa la base de datos si no está inicializada
        const rows = yield db.all('SELECT codigo, fecha FROM VersionDeCodigo', []); // Consulta todos los registros de la tabla VersionDeCodigo
        return { versiones: rows.map(row => ({ codigo: row.codigo, fecha: new Date(row.fecha) })) }; // Mapea los resultados a un arreglo de versiones de código
    });
}
exports.ConsultarVersionesDeCodigo = ConsultarVersionesDeCodigo;
function EjecutarCodigo(codigo) {
    try {
        const resultado = eval(codigo); // Ejecuta el código proporcionado usando la función eval
        return String(resultado); // Devuelve el resultado como cadena
    }
    catch (error) {
        if (error instanceof Error) { // Comprueba si el error es una instancia de Error
            return error.message; // Devuelve el mensaje de error
        }
        return String(error); // Si no es un Error, devuelve el error como cadena
    }
}
exports.EjecutarCodigo = EjecutarCodigo;
function CrearEditorDeCodigo() {
    return __awaiter(this, void 0, void 0, function* () {
        yield inicializarDB(); // Inicializa la base de datos si no está inicializada
        yield db.run('INSERT INTO EditorDeCodigo (codigo) VALUES (?)', ['']); // Inserta un registro inicial en la tabla EditorDeCodigo
    });
}
exports.CrearEditorDeCodigo = CrearEditorDeCodigo;
function TraerEditorDeCodigo() {
    return __awaiter(this, void 0, void 0, function* () {
        yield inicializarDB(); // Inicializa la base de datos si no está inicializada
        const row = yield db.get('SELECT codigo FROM EditorDeCodigo ORDER BY id DESC LIMIT 1'); // Obtiene el último código del editor almacenado en la base de datos
        return { codigo: row ? row.codigo : '' }; // Devuelve el código del editor o una cadena vacía si no hay registros
    });
}
exports.TraerEditorDeCodigo = TraerEditorDeCodigo;
