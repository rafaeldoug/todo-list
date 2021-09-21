const categories = [
  { id: 0, name: 'Faculdade' },
  { id: 1, name: 'Trabalho' },
  { id: 2, name: 'Aleatório' },
  { id: 3, name: 'Família' }
];

const getCategories = () => {
  return categories;
};

// const getCategories = () => {
//   axios.get(`${API_URL}/lists`, ({ data }) => {
//     console.log(data);
//   });

// }

const getCategoryById = (id) => {
  return categories[parseInt(id)];
};

module.exports = {
  getCategories,
  getCategoryById
};