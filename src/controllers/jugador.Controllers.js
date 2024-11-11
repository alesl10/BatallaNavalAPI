import { conexion } from "../Db.js";

export const getJugadores = async (req, res) => {
    try {
        conexion.query('select * from jugador', function (error, results, fields) {
            if (error) {
                res.status(500).send({ message: "Error al obtener los jugadores" });
            }
            res.send({ message: 'success', data: results });
        })

    } catch (error) {
        console.error(error);
    }
}

export const addJugador = async (req, res) => {
    try {
        const { nombre, apellido, apodo, icono, email } = req.body

        // Parametrización de la consulta
        const query = `
            INSERT INTO jugador (nombre, apellido, apodo, icono, email) 
            VALUES (?, ?, ?, ?, ?)
        `

        // Ejecutando la consulta con los valores como parámetros
        conexion.query(query, [nombre, apellido, apodo, icono, email], function (error, results, fields) {
            if (error) {
                res.json({ error: error.message })
            } else {
                res.json({ message: "Jugador agregado con éxito", data: results })
            }
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error al agregar el jugador' })
    }
}


