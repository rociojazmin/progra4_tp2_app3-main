// src/routes.ts
import { Router } from 'express';
import { agregarCodigo, consultarVersionesDeCodigo, ejecutarCodigo, crearEditorDeCodigo, traerEditorDeCodigo } from './controlador';

const router = Router();

router.post('/codigo', agregarCodigo);
router.get('/versiones', consultarVersionesDeCodigo);
router.post('/ejecutar', ejecutarCodigo);
router.post('/editor/crear', crearEditorDeCodigo);
router.get('/editor', traerEditorDeCodigo);

export default router;
