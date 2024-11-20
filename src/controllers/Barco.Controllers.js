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
export const getBarco = async (req, res) => {

    const {id} = req.params
    try {
        conexion.query(`SELECT * FROM barco where id_barco = ${id} `, function (error, results, fields) {
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

export const addBarco = async (req, res) => {
    try {

        const { tamanio, partida_id} = req.body;
        const query = `INSERT INTO barco (estado, tamanio, partida_id)
    VALUES(?, ?, ?)`
        conexion.query(query, ['intacto', tamanio, partida_id], function (error, results, fields) {
            if (error) {
                res.status(500).json({ message: error })
            } else {
                res.json({ message: 'barco creado', data: results.insertId })
            }
        })

    } catch (error) {
        console.log(error)
    }
}


export const updateBarco = async (req, res) => {
    try {

        const { estado, id_barco} = req.body;
        const query = `UPDATE barco set estado =  ? WHERE id_barco = ${id_barco}`
        conexion.query(query, [estado ], function (error, results, fields) {
            if (error) {
                res.status(500).json({ message: error })
            } else {
                res.json({ message: 'barco actualizado', data: results.insertId })
            }
        })

    } catch (error) {
        console.log(error)
    }
}