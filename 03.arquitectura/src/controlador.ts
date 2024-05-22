// src/controlador.ts
import { Request, Response } from 'express';
import { AgregarCodigo, ConsultarVersionesDeCodigo, EjecutarCodigo, CrearEditorDeCodigo, TraerEditorDeCodigo } from './Modelo';

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

export async function ejecutarCodigo(req: Request, res: Response) {
  const { codigo } = req.body;
  try {
    const resultado = EjecutarCodigo(codigo);
    res.json({ resultado });
  } catch (error) {
    res.status(500).send('Error al ejecutar el código');
  }
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
