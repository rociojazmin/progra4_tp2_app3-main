// src/controlador.ts
import { Request, Response } from 'express'; // Importar objetos Request y Response de Express
import { AgregarCodigo, ConsultarVersionesDeCodigo, EjecutarCodigo, CrearEditorDeCodigo, TraerEditorDeCodigo } from './Modelo';
import { NodeVM } from 'vm2';
import { Writable } from 'stream';

export async function agregarCodigo(req: Request, res: Response) {
  const { codigo } = req.body;
  try {
    await AgregarCodigo(codigo);
    res.status(201).send('Código agregado exitosamente');
  } catch (error) {
    res.status(500).send('Error al agregar el código');
  }
}

export async function consultarVersionesDeCodigo(req: Request, res: Response) {
  try {
    const versiones = await ConsultarVersionesDeCodigo();
    res.json(versiones);
  } catch (error) {
    res.status(500).send('Error al consultar las versiones de código');
  }
}

export function ejecutarCodigo(codigo: string): string {
  let resultado = '';

  // Sobreescribir el método console.log temporalmente
  const consolaOriginal = console.log;
  console.log = (...args: any[]) => {
    resultado += args.join(' ') + '\n';
  };

  try {
    eval(codigo);
  } catch (error) {
    if (error instanceof Error) {
      resultado = `Error: ${error.message}`;
    } else {
      resultado = `Error: ${String(error)}`;
    }
  }

  // Restaurar el método console.log original
  console.log = consolaOriginal;

  return resultado;
}


export async function crearEditorDeCodigo(req: Request, res: Response) {
  try {
    await CrearEditorDeCodigo();
    res.status(201).send('Editor de código creado exitosamente');
  } catch (error) {
    res.status(500).send('Error al crear el editor de código');
  }
}

export async function traerEditorDeCodigo(req: Request, res: Response) {
  try {
    const editor = await TraerEditorDeCodigo();
    res.json(editor);
  } catch (error) {
    res.status(500).send('Error al traer el editor de código');
  }
}
