require('dotenv').config();

const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

const SERVER_PORT = parseInt(process.env.SERVER_PORT);

app.use(express.json());
app.use(cors());


app.use('/lists', require('./controller/list_controller'));
app.use('/tasks', require('./controller/task_controller'));
app.use('/usuarios', require('./controllers/usuarios-controller'));
app.use('/session',  require('./controllers/session-controller'));

console.log("Abrindo conexão com o BD...");
db.conecta(() => {
  console.log("Conexão OK!");
  console.log("Iniciando servidor web...");
  app.listen(SERVER_PORT, () => {
    console.log(`Servidor rodando em http://localhost:${SERVER_PORT}`);
  });
});
