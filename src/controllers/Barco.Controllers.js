import { conexion } from "../Db.js";

export const getBarcos = async (req, res) => {
    try {
        conexion.query('SELECT * FROM barco', function (error, results, fields) {
            if (error) {
                res.status(500).json({ message: 'Error al obtener los barcos', error: error })
            } else {
                res.json(results)
            }
        })
    } catch (error) {
        console.log(error)
    }
}