import { Router } from "express";
import { getCoordenadas } from '../controllers/Coordenada.Controllers.js'

const router = Router();

router.get('/coordenadas', getCoordenadas)


router.post('/coordenadas', (req, res) => {
    res.json({ message: 'Hola mundo desde el creador de coordenadas' })
})

export default router;