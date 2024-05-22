import { openDB } from './database/database';

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

export interface ResultadoDeCodigo{
  resultado: string;
}


export async function AgregarCodigo(codigo: string): Promise<void> {
  const db = await openDB();
  await db.run('INSERT INTO VersionesDeCodigo (codigo, fecha) VALUES (?, ?)', [codigo, new Date()]);
}

export async function EjecutarCodigo(codigo: string): Promise<string> {
  try {
    // Evitar el uso de eval directamente por seguridad
    const result = eval(codigo);
    return result.toString();
  } catch (error) {
    return error.toString();
  }
}

export async function ConsultarVersionesDeCodigo(): Promise<VersionesDeCodigo> {
  const db = await openDB();
  const versiones = await db.all<VersionDeCodigo[]>('SELECT * FROM VersionesDeCodigo');
  return { versiones };
}

export async function CrearEditorDeCodigo(): Promise<void> {
  const db = await openDB();
  await db.run('CREATE TABLE IF NOT EXISTS VersionesDeCodigo (id INTEGER PRIMARY KEY, codigo TEXT, fecha DATE)');
}

export async function TraerEditorDeCodigo(): Promise<EditorDeCodigo> {
  const db = await openDB();
  const editor = await db.get<EditorDeCodigo>('SELECT codigo FROM VersionesDeCodigo ORDER BY fecha DESC LIMIT 1');
  return editor || { codigo: '' };
}
