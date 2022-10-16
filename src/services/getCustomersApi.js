import axios from 'axios';

const getCustomersList = async () => {
  const response = await axios.get('http://localhost:8000/getAllTransactions');
  return response.data;
};

export default getCustomersList;
