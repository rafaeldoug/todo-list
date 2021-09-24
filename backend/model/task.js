
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isComplete: { type: Boolean, default: false },
  listId: { type: mongoose.Schema.Types.ObjectId, ref: 'List', required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);