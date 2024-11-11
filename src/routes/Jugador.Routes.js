import { Router } from "express";
import { getJugadores, addJugador } from "../controllers/jugador.Controllers.js";

const router = Router();

router.get("/jugador", getJugadores);
router.post("/jugador", addJugador)

export default router;