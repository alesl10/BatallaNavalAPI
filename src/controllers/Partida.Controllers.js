import { conexion } from "../Db.js";

export const getPartidas = async (req, res) => {
    try {
        conexion.query('select * from partida', function (error, results, field) {
            if (error) {
                res.status(500).json({ message: error })
            } else {
                res.json({message:'Success', data:results});
            }
        })
    } catch (error) {
        console.log(error)
    }
}


export const addPartida = async (req, res) => {
    try {

        const { jugadorId, tableroId } = req.body;
        const query = `INSERT INTO partida (estado, jugador_id, tablero_id)
    VALUES(?, ?, ?)`
        conexion.query(query, ['En curso', jugadorId, tableroId], function (error, results, fields) {
            if (error) {
                res.status(500).json({ message: error })
            } else {
                res.json({ message: 'partida creada', data: results.insertId })
            }
        })

    } catch (error) {
        console.log(error)
    }
}

