import { Router } from "express";

const router = Router();

router.get('/jugada', (req, res)=>{
    res.json({message:'ruta de jugadas'})
})

router.post('/jugada', (req, res)=>{
    res.json({message:'ruta de crear jugadas'})
})

export default router;