import express from 'express';
import dotenv from 'dotenv';
import router from 'routes';
import { openDb } from './database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Inicialización de la base de datos
async function initDb() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS versiones (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      codigo TEXT,
      fecha TEXT
    )
  `);
}

initDb();
