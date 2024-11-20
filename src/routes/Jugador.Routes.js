import { Router } from "express";
import { getJugadores, addJugador, login } from "../controllers/jugador.Controllers.js";

const router = Router();

router.get("/jugador", getJugadores);
router.post("/jugador", addJugador)
router.post("/login", login)

export default router;