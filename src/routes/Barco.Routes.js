import { Router } from "express";  
import { addBarco, getBarco, getBarcos, updateBarco } from "../controllers/Barco.Controllers.js"; 

const router = Router();

router.get('/barco', getBarcos)
router.get('/barco/:id', getBarco)

router.post('/barco', addBarco)
router.put('/barco', updateBarco)

export default router;