import { conexion } from "../Db.js";

export const getCoordenadas = async (req, res) => {
    try {
        conexion.query('select * from coordenada_barco', function (error, results, field) {
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


export const addCoordenada = async (req, res) => {
    try {

        const {  } = req.body;
        const query = `INSERT INTO coordenada_barco ()
    VALUES()`
        conexion.query(query, [ ], function (error, results, fields) {
            if (error) {
                res.status(500).json({ message: error })
            } else {
                res.json({ message: 'Coordenada creada', data: results.insertId })
            }
        })

    } catch (error) {
        console.log(error)
    }
}