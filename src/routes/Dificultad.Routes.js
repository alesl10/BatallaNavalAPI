import { Router } from "express";
import { getDificultad } from '../controllers/Dificultad.Controllers.js'

const router = Router();

router.get('/dificultad', getDificultad)

router.post('/dificultad', (req, res) => {
    res.json({ message: 'Hola mundo desde el creador de dificultad' })
})

export default router;