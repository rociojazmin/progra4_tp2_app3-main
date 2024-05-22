import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

export interface VersionDeCodigo {
  codigo: string;
  fecha: Date;
}

export interface VersionesDeCodigo {
  versiones: VersionDeCodigo[];
}

export interface EditorDeCodigo {
  codigo: string;
}

export interface ResultadoDeCodigo {
  resultado: string;
}

let db: Database;

async function inicializarDB() {
  if (!db) {
    db = await open({
      filename: './src/database.db',
      driver: sqlite3.Database
    });
    await db.exec(`
      CREATE TABLE IF NOT EXISTS VersionDeCodigo (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        codigo TEXT NOT NULL,
        fecha TEXT NOT NULL
      );
    `);
    await db.exec(`
      CREATE TABLE IF NOT EXISTS EditorDeCodigo (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        codigo TEXT NOT NULL
      );
    `);
  }
}

export async function AgregarCodigo(codigo: string): Promise<void> {
  await inicializarDB();
  const fecha = new Date().toISOString();
  await db.run('INSERT INTO VersionDeCodigo (codigo, fecha) VALUES (?, ?)', [codigo, fecha]);
}

export async function ConsultarVersionesDeCodigo(): Promise<VersionesDeCodigo> {
  await inicializarDB();
  const rows = await db.all('SELECT codigo, fecha FROM VersionDeCodigo', []);
  return { versiones: rows.map(row => ({ codigo: row.codigo, fecha: new Date(row.fecha) })) };
}

export function EjecutarCodigo(codigo: string): string {
  try {
    const resultado = eval(codigo); // Esta es una manera simplificada, puedes reemplazarla con la lógica necesaria
    return String(resultado);
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
    return String(error);
  }
}

export async function CrearEditorDeCodigo(): Promise<void> {
  await inicializarDB();
  await db.run('INSERT INTO EditorDeCodigo (codigo) VALUES (?)', ['']);
}

export async function TraerEditorDeCodigo(): Promise<EditorDeCodigo> {
  await inicializarDB();
  const row = await db.get('SELECT codigo FROM EditorDeCodigo ORDER BY id DESC LIMIT 1');
  return { codigo: row ? row.codigo : '' };
}
