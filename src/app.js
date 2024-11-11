import express from "express";
import { conexion } from "./Db.js";
// rutas
import JugadorRoutes from './routes/Jugador.Routes.js'
import BarcoRoutes from './routes/Barco.Routes.js'
import JugadaRoutes from './routes/Jugada.Routes.js'
import PartidaRoutes from './routes/Partida.Routes.js'
import TableroRoutes from './routes/Tablero.Routes.js'

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(JugadorRoutes);
app.use(BarcoRoutes);
app.use(JugadaRoutes);
app.use(PartidaRoutes);
app.use(TableroRoutes);

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
