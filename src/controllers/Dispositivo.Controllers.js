import { conexion } from "../Db.js";

export const getDispositivos = async (req, res) => {
    try {
        conexion.query('select * from dispositivo', function (error, results, field) {
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


export const addDispositivo = async (req, res) => {
    try {

        const {  } = req.body;
        const query = `INSERT INTO dispositivo ()
    VALUES()`
        conexion.query(query, [ ], function (error, results, fields) {
            if (error) {
                res.status(500).json({ message: error })
            } else {
                res.json({ message: 'dispositivo creado', data: results.insertId })
            }
        })

    } catch (error) {
        console.log(error)
    }
}