const getCustomersList = async () => {
  try {
    const api = await fetch('http://localhost:8000/getAllTransactions');
    const response = await api.json();
    return response;
  } catch (error) {
    return null;
  }
};

export default getCustomersList;
