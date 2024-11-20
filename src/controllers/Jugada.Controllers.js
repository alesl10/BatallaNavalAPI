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

        const {  } = req.body;
        const query = `INSERT INTO jugada ()
    VALUES()`
        conexion.query(query, [ ], function (error, results, fields) {
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