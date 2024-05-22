import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.db');

export interface VersionDeCodigo {
  codigo: string;
  fecha: Date;
}

export interface VersionesDeCodigo {
  versiones: VersionDeCodigo[];
}

export function AgregarCodigo(codigo: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const fecha = new Date().toISOString();
    db.run('INSERT INTO VersionDeCodigo (codigo, fecha) VALUES (?, ?)', [codigo, fecha], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

export function ConsultarVersionesDeCodigo(): Promise<VersionesDeCodigo> {
  return new Promise((resolve, reject) => {
    db.all('SELECT codigo, fecha FROM VersionDeCodigo', [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve({ versiones: rows.map(row => ({ codigo: row.codigo, fecha: new Date(row.fecha) })) });
      }
    });
  });
}