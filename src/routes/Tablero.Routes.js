import { Router } from "express";

const router = Router();

router.get('/tablero', (req, res) => {
    res.json({ message: 'tablero' })
})

router.post('/tablero', (req, res) => {
    res.json({ message: 'crear tablero ' })
})

export default router;