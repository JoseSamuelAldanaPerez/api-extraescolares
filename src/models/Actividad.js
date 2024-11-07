const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const actividadSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    trim: true,
  },
  categoria: {
    type: String,
    enum: ['deportiva', 'cultural', 'civica'],
    required: true,
  },
  horas: {
    type: Number,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    trim: true,
  },
});

actividadSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

const Actividad = model('Actividad', actividadSchema, 'actividades');
module.exports = Actividad;
