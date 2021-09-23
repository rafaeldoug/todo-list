   
const express = require('express');
const router = express.Router();
const List = require('../model/list');

// criando funções de middleware
const findById = async (req, res, next) => {
  req.list = await List.findById(req.params.id);
  next();
};

// retorne todas  as listas
router.get('/', async (req, res) => {
  res.json(await List.find());
});

// retorne a lista com o id especificado
router.get('/:id', findById, async (req, res) => {
  res.json(req.list);
});

// adicionar uma nova lista
router.post('/new', async (req, res) => {
  res.json(await new List(req.body).save());
});

// alterar a lista com o id especificado
router.put('/:id', findById, async (req, res) => {
  res.json(await req.list.set(req.body).save());
});

// remover a lista com o id especificado
router.delete('/:id', findById, async (req, res) => {
  console.log(req);
  req.list.remove();
  res.json({mensagem: 'Lista removido com sucesso'});
});

module.exports = router;