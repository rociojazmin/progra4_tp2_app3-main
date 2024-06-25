import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite'; // Importa open y Database de sqlite para interactuar con la base de datos

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

let db: Database; // Variable para almacenar la conexión a la base de datos

async function inicializarDB() {
  if (!db) { // Si no hay conexión a la base de datos, inicializa una nueva
    db = await open({
      filename: './src/database.db', // Ruta del archivo de la base de datos
      driver: sqlite3.Database
    });
    await db.exec(`
      CREATE TABLE IF NOT EXISTS VersionDeCodigo (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        codigo TEXT NOT NULL,
        fecha TEXT NOT NULL
      );
    `); // Crea la tabla VersionDeCodigo si no existe
    await db.exec(`
      CREATE TABLE IF NOT EXISTS EditorDeCodigo (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        codigo TEXT NOT NULL
      );
    `); // Crea la tabla EditorDeCodigo si no existe
  }
}

export async function AgregarCodigo(codigo: string): Promise<void> {
  await inicializarDB(); // Inicializa la base de datos si no está inicializada
  const fecha = new Date().toISOString(); // Obtiene la fecha actual en formato ISO
  await db.run('INSERT INTO VersionDeCodigo (codigo, fecha) VALUES (?, ?)', [codigo, fecha]); // Inserta un nuevo registro en la tabla VersionDeCodigo
}

export async function ConsultarVersionesDeCodigo(): Promise<VersionesDeCodigo> {
  await inicializarDB(); // Inicializa la base de datos si no está inicializada
  const rows = await db.all('SELECT codigo, fecha FROM VersionDeCodigo', []); // Consulta todos los registros de la tabla VersionDeCodigo
  return { versiones: rows.map(row => ({ codigo: row.codigo, fecha: new Date(row.fecha) })) }; // Mapea los resultados a un arreglo de versiones de código
}


export function EjecutarCodigo(codigo: string): string {
  let resultado = '';

  // Sobrescribir el método console.log temporalmente
  const consolaOriginal = console.log;
  console.log = (...args: any[]) => {
    resultado += args.join(' ') + '\n';
  };

  try {
    const evalResultado = eval(codigo); // Ejecuta el código proporcionado usando la función eval
    if (evalResultado !== undefined) {
      resultado += String(evalResultado); // Agrega el resultado de eval al resultado si no es undefined
    }
  } catch (error) {
    if (error instanceof Error) { // Comprueba si el error es una instancia de Error
      resultado = `Error: ${error.message}`; // Devuelve el mensaje de error
    } else {
      resultado = `Error: ${String(error)}`; // Si no es un Error, devuelve el error como cadena
    }
  }

  // Restaurar el método console.log original
  console.log = consolaOriginal;

  return resultado;
}

 
export async function CrearEditorDeCodigo(): Promise<void> {
  await inicializarDB(); // Inicializa la base de datos si no está inicializada
  await db.run('INSERT INTO EditorDeCodigo (codigo) VALUES (?)', ['']); // Inserta un registro inicial en la tabla EditorDeCodigo
}

export async function TraerEditorDeCodigo(): Promise<EditorDeCodigo> {
  await inicializarDB(); // Inicializa la base de datos si no está inicializada
  const row = await db.get('SELECT codigo FROM EditorDeCodigo ORDER BY id DESC LIMIT 1'); // Obtiene el último código del editor almacenado en la base de datos
  return { codigo: row ? row.codigo : '' }; // Devuelve el código del editor o una cadena vacía si no hay registros
}

export async function ActualizarCodigo(id: number, codigo: string): Promise<void> {
  await inicializarDB();
  await db.run('UPDATE VersionDeCodigo SET codigo = ?, fecha = ? WHERE id = ?', [codigo, new Date().toISOString(), id]);
}
