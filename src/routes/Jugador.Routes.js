import { Router } from "express";
import { getJugadores, addJugador, login, jugadorDelMes } from "../controllers/jugador.Controllers.js";

const router = Router();

router.get("/jugador", getJugadores);
router.get("/jugador/jugadordelmes", jugadorDelMes);
router.post("/jugador", addJugador)
router.post("/login", login)

export default router;