import { toast } from 'react-toastify';

const getCustomersList = async () => {
  /* axios is a better alternative for fetch to manage error handling */
  const response = await fetch('http://localhost:8000/getAllTransactionvs');
  if (response.ok) {
    toast.success('Succesfully loaded customers data');
    return response.json();
  } else {
    toast.error('Error loading customers data');
    return Promise.reject(response);
  }
};

export default getCustomersList;
