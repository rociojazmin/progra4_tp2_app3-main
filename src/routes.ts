// src/routes.ts
import { Router } from 'express';
import { agregarCodigo, consultarVersionesDeCodigo, ejecutarCodigo, crearEditorDeCodigo, traerEditorDeCodigo, actualizarCodigo } from './controlador';

const router = Router();

router.post('/codigo', agregarCodigo);
router.get('/versiones', consultarVersionesDeCodigo);
router.post('/ejecutar', ejecutarCodigo);
router.post('/editor/crear', crearEditorDeCodigo);
router.get('/editor', traerEditorDeCodigo);
router.put('/actualizar-codigo', actualizarCodigo);

export default router;
