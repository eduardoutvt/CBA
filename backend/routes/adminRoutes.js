// backend/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin'); // Importar el modelo de administrador

// Ruta de inicio de sesión
router.post('/login', async (req, res) => {
  const { username, password } = req.body; // Obtener credenciales del cuerpo de la solicitud

  try {
    // Buscar al administrador por nombre de usuario y contraseña
    const admin = await Admin.findOne({ username, password });

    if (!admin) {
      // Si no se encuentra el administrador, devuelve un error 401
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // Generar un token de sesión (simple en este ejemplo)
    const token = 'admin-token'; // En producción, usa JWT u otro método seguro

    // Devuelve el token al cliente
    res.json({ token });
  } catch (error) {
    // Si ocurre un error en el servidor, devuelve un error 500
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Ruta para obtener la lista de administradores (para verificar)
router.get('/', async (req, res) => {
  try {
    const admins = await Admin.find({});
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener administradores' });
  }
});

module.exports = router;
