import { conexion } from "../Db.js";

export const getJugadas = async (req, res) => {
    try {
        conexion.query('select * from jugada', function (error, results, field) {
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


export const addJugada = async (req, res) => {
    try {

        const {fila, columna, jugador_id,partida_id  } = req.body;
        const query = `INSERT INTO jugada (fila, columna, jugador_id, partida_id)
    VALUES(?,?,?,?)`
        conexion.query(query, [fila, columna, jugador_id,partida_id ], function (error, results, fields) {
            if (error) {
                res.status(500).json({ message: error })
            } else {
                res.json({ message: 'jugada creada', data: results.insertId })
            }
        })

    } catch (error) {
        console.log(error)
    }
}