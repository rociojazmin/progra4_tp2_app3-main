import { Router } from 'express';
import { agregarCodigoController, consultarVersionesDeCodigoController, traerEditorDeCodigoController } from '../controllers/controlador';

const router = Router();

router.post('/codigo', agregarCodigoController);
router.get('/versiones', consultarVersionesDeCodigoController);
router.get('/editor', traerEditorDeCodigoController);

export default router;
