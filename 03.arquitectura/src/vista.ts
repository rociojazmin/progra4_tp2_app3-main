import express from 'express';
import { agregarCodigo, consultarVersionesDeCodigo } from './controlador';

const router = express.Router();

router.post('/codigo', agregarCodigo);
router.get('/versiones', consultarVersionesDeCodigo);

export default router;
