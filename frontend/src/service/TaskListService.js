const tasks = [
  { id: 0, name: 'Pagar Boleto', categoryId: 0, isComplete: true },
  { id: 1, name: 'Assistir aula', categoryId: 0, isComplete: false },
  { id: 2, name: 'Entregar trabalho', categoryId: 0, isComplete: false },
  { id: 3, name: 'Revisar projeto', categoryId: 1, isComplete: true },
  { id: 4, name: 'Ir pra daily', categoryId: 1, isComplete: false },
  { id: 5, name: 'Andar de bicleta', categoryId: 2, isComplete: false },
  { id: 6, name: 'Ir Caminhar', categoryId: 2, isComplete: false },
  { id: 7, name: 'Fazer um bolo', categoryId: 2, isComplete: true },
];

const getTasks = () => {
  return tasks;
};

// const getCategories = () => {
//   axios.get(`${API_URL}/lists`, ({ data }) => {
//     console.log(data);
//   });
// }

const getTasksById = (id) => {
  return tasks[parseInt(id)];
};

const getTasksByCategoryId = (id) => {
  return tasks.filter(t => t.categoryId === parseInt(id));
};

const updateTask = (id) => {
  tasks[parseInt(id)].isComplete = !tasks[parseInt(id)].isComplete;
  return tasks[parseInt(id)];
}

// const deleteTask = (id) => {

// }

module.exports = {
  getTasks,
  getTasksById,
  getTasksByCategoryId,
  updateTask,
  // deleteTask
};