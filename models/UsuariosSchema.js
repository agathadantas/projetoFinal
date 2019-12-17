const mongoose = require('mongoose');
const { VoluntariosSchema } = require('./VoluntariosSchema')
const Schema = mongoose.Schema;
const UsuariosSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  foto: { type: String, required: true },
  limitacao : { type: String, required: true },
  ajuda : { type: String },
  voluntarios: [VoluntariosSchema]
})

UsuariosSchema.add ({
  voluntarios: [VoluntariosSchema]
});

const usuariosModel = mongoose.model('usuarios', UsuariosSchema);

module.exports = usuariosModel;
