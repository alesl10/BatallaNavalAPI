import { Router } from "express";
import { getPartidas, addPartida } from "../controllers/Partida.Controllers.js";

const router = Router();

router.get('/partida', getPartidas)

router.post('/partida', addPartida)

export default router;