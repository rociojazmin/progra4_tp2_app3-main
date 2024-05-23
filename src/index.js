"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes")); // Importa las rutas definidas en otro archivo
const dotenv_1 = __importDefault(require("dotenv")); // Importa dotenv para cargar variables de entorno desde .env
const path_1 = __importDefault(require("path")); // Importa la biblioteca path para manejar rutas de archivos
dotenv_1.default.config(); // Carga las variables de entorno desde .env
const app = (0, express_1.default)(); // Crea una instancia de la aplicación Express
const PORT = process.env.PORT || 3000; // Obtiene el puerto del entorno o utiliza 3000 por defecto
app.use(express_1.default.json()); // Permite el análisis de solicitudes JSON
// Servir los archivos estáticos de Monaco Editor desde la ruta '/monaco'
app.use('/monaco', express_1.default.static(path_1.default.join(__dirname, '../node_modules/monaco-editor')));
app.use('/api', routes_1.default); // Monta las rutas en el prefijo '/api'
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Inicia el servidor y muestra un mensaje en la consola
});
