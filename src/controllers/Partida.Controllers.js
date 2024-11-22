import { conexion } from "../Db.js";

export const getPartidas = async (req, res) => {
  try {
    conexion.query("select * from partida", function (error, results, field) {
      if (error) {
        res.status(500).json({ message: error });
      } else {
        res.json({ message: "Success", data: results });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const addPartida = async (req, res) => {
  try {
    const { dificultadId } = req.body;
    const query = `INSERT INTO partida (dificultad_id)
    VALUES(?)`;
    conexion.query(query, [dificultadId], function (error, results, fields) {
      if (error) {
        res.status(500).json({ message: error });
      } else {
        res.json({ message: "partida creada", data: results.insertId });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatePartida = async (req, res) => {
  try {
    const { id } = req.params;
    const query = `
        UPDATE partida
SET fecha_fin = NOW()
WHERE id_partida = (?) AND fecha_fin IS NULL;
        `;
    conexion.query(query, [id], function (error, results, fields) {
      if (error) {
        res.status(500).json({ message: error });
      } else {
        res.json({ message: "partida actualizada", data: results });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
