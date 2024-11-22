import { Router } from "express";
import {getJugadas, addJugada} from '../controllers/Jugada.Controllers.js'

const router = Router();

router.get('/jugada', getJugadas)

router.post('/jugada', addJugada)

export default router;