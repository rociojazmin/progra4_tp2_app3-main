// src/index.ts
import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Servir los archivos estáticos de Monaco Editor
app.use('/monaco', express.static(path.join(__dirname, '../node_modules/monaco-editor')));

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
