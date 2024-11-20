import { Router } from "express";
import {getDispositivos} from '../controllers/Dispositivo.Controllers.js'

const router = Router();

router.get('/dispositivo', getDispositivos)

router.post('/dispositivo', (req, res) => {
    res.json({ message: 'Hola mundo desde el creador de dispositivo' })
})

export default router;