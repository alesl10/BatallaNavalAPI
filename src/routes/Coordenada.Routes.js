import { Router } from "express";
import { getCoordenadas, addCoordenada } from '../controllers/Coordenada.Controllers.js'

const router = Router();

router.get('/coordenadas', getCoordenadas)


router.post('/coordenadas', addCoordenada)

export default router;