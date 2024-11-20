import { conexion } from "../Db.js";

export const getDificultad = async (req, res) => {
    try {
        conexion.query('select * from dificultad', function (error, results, field) {
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


export const addDificultad = async (req, res) => {
    try {

        const {  } = req.body;
        const query = `INSERT INTO dificultad ()
    VALUES()`
        conexion.query(query, [ ], function (error, results, fields) {
            if (error) {
                res.status(500).json({ message: error })
            } else {
                res.json({ message: 'dificultad creada', data: results.insertId })
            }
        })

    } catch (error) {
        console.log(error)
    }
}