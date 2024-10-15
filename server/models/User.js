const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//esquema del usuario
const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['Administrador', 'Médico', 'Usuario Interno'], 
    default: 'Usuario Interno' 
  }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);