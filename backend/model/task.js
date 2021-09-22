       
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  id:Number,
  nome: String,
  dataCriacao: Date,
  valor: Boolean,
  list : [
    {type: mongoose.Schema.Types.ObjectId,ref:'List'}
]
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Task', taskSchema);