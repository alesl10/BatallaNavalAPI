import express from "express";
import { conexion } from "./Db.js";
import cors from 'cors'
// rutas
import BarcoRoutes from './routes/Barco.Routes.js'
import CoordenadRoutes from './routes/Coordenada.Routes.js'
import DificultadRoutes from './routes/Dificultad.Routes.js'
import DispositivoRoutes from './routes/Dispositivo.Routes.js'
import JugadorRoutes from './routes/Jugador.Routes.js'
import JugadaRoutes from './routes/Jugada.Routes.js'
import PartidaRoutes from './routes/Partida.Routes.js'

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(BarcoRoutes);
app.use(CoordenadRoutes);
app.use(DificultadRoutes);
app.use(DispositivoRoutes);
app.use(JugadorRoutes);
app.use(JugadaRoutes);
app.use(PartidaRoutes);

conexion.connect(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Conectado a la base de datos')
    }
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})
