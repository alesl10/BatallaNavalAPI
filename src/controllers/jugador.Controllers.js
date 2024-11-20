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

export const login = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).send({ message: "Faltan credenciales" });
        }

        const query = `
            SELECT * FROM jugador WHERE jugador.email = ?;
        `;
        conexion.query(query, [email], async (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: "Error interno al obtener los datos" });
            }

            if (results.length === 0) {
                return res.status(404).send({ message: "Usuario no encontrado" });
            }

            const user = results[0];

            res.status(200).send({ message: 'Inicio de sesión exitoso', data: user });
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error interno en el servidor" });
    }
};

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


