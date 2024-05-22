import { Request, Response } from 'express';
import { AgregarCodigo, ConsultarVersionesDeCodigo } from './Modelo';

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
