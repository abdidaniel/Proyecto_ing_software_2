const jwt = require('jsonwebtoken');
const { isTokenRevoked } = require('./controllers/userController'); // Importar la función de verificación

exports.protectRoute = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No se proporcionó un token' });
  }

  if (isTokenRevoked(token)) {
    return res.status(401).json({ message: 'Token revocado. No autorizado' });
  }

  jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token no válido' });
    }
    
    req.user = decoded;
    next();
  });
};
