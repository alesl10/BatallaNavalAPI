import { Router } from "express";
import { getPartidas, addPartida, updatePartida } from "../controllers/Partida.Controllers.js";

const router = Router();

router.get('/partida', getPartidas)

router.post('/partida', addPartida)
router.put('/partida/:id', updatePartida)

export default router;