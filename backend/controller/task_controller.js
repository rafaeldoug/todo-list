const express = require('express');
const router = express.Router();
const Task = require('../model/task');

// criando funções de middleware
const findById = async (req, res, next) => {
  req.task = await Task.findById(req.params.id);
  next();
};
// criando funções de middleware
const findByIdList = async (req, res, next) => {
  req.task = await Task.find({ listId: req.params.idList });
  next();
};
// retorne todos os tasks
router.get('/', async (req, res) => {
  res.json(await Task.find());
});

// retorne o task com o id especificado
router.get('/:id', findById, async (req, res) => {
  res.json(req.task);
});

// adicionar um novo task
router.post('/new', async (req, res) => {
  res.json(await new Task(req.body).save());
});

// alterar o task com o id especificado
router.put('/:id', findById, async (req, res) => {
  res.json(await req.task.set(req.body).save());
});

// completar a task com o id especificado
router.put('/:id/complete', findById, async (req, res) => {
  res.json(await req.task.set({ isComplete: !req.task.isComplete }).save());
});

// retorne o tasks da lista com id especifico. 
router.get('/lists/:idList', findByIdList, async (req, res) => {
  res.json(req.task);
});

// remover o task com o id especificado
router.delete('/:id', findById, async (req, res) => {
  req.task.remove();
  res.json({ mensagem: 'Task removido com sucesso' });
});

module.exports = router;
