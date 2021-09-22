       
const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  id:Number,
  nome: String,
  dataCriacao: Date,
}, { 
  timestamps: true 
});

module.exports = mongoose.model('List', listSchema);