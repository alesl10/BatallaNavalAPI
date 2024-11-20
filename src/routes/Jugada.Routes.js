import { Router } from "express";
import {getJugadas} from '../controllers/Jugada.Controllers.js'

const router = Router();

router.get('/jugada', getJugadas)

router.post('/jugada', (req, res)=>{
    res.json({message:'ruta de crear jugadas'})
})

export default router;