import express, { Express } from 'express';
import routes from './routes'; // Importa las rutas definidas en otro archivo
import dotenv from 'dotenv'; // Importa dotenv para cargar variables de entorno desde .env
import path from 'path'; // Importa la biblioteca path para manejar rutas de archivos
import cors from 'cors';

dotenv.config(); // Carga las variables de entorno desde .env

const app: Express = express(); // Crea una instancia de la aplicación Express
const PORT = process.env.PORT || 3000; // Obtiene el puerto del entorno o utiliza 3000 por defecto

app.use(cors()); // Permite CORS en todas las rutas
app.use(express.json()); // Permite el análisis de solicitudes JSON

// Servir los archivos estáticos de Monaco Editor desde la ruta '/monaco'
app.use('/monaco', express.static(path.join(__dirname, '../node_modules/monaco-editor')));

app.use('/api', routes); // Monta las rutas en el prefijo '/api'

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Inicia el servidor y muestra un mensaje en la consola
});
