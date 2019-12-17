const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VoluntariosSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  foto: { type: String, required: true },
  ajuda: { type: String }
})

const voluntariosModel = mongoose.model('voluntarios', VoluntariosSchema);

module.exports = { voluntariosModel, VoluntariosSchema };
