import { Router } from "express";  
import { getBarcos } from "../controllers/Barco.Controllers.js"; 

const router = Router();

router.get('/barco', getBarcos)

router.post('/barco', (req, res) =>{
    res.json({message:'Hola mundo desde el creador de barcos'})
})

export default router;