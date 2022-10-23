import React, { useEffect, useState } from 'react';
import './dashboard.css';
import getCustomersList from '../services/getCustomersApi';
import Table from '../components/table/table';
import { config } from '../services/constants';
import combineTransactionsByCustomer from '../utils/filterTransactions';
import calculateRewards from '../utils/calculateRewards';
import Loader from '../components/loader/loader';
import { ToastContainer } from 'react-toastify';

const Dashboard = () => {
  const [customersList, setCustomersList] = useState([]);
  const [TransactionsList, setTransactionsList] = useState([]);
  const [customerTrans, setCustomerTrans] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [loading, setLoading] = useState(true);
  const [isExpand, setIsExpand] = useState(false);


  useEffect(() => {
    getCustomersList()
      .then((data) => {
        /* Setting timeout just to showcase the Loader */
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        const pointsPerTransaction = calculateRewards(data);
        const filteredByCustomer = combineTransactionsByCustomer(pointsPerTransaction, 'id');
        setCustomersList(filteredByCustomer);
        setTransactionsList(pointsPerTransaction);
      })
      .catch((error) => { 
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        console.log('API error', error)
      });
  }, []);

  const showAllTransactions = (id, name) => {
    const filterById = TransactionsList.filter((x) => x.id === id);
    const filteredList = combineTransactionsByCustomer(filterById, 'month');
    setCustomerTrans(filteredList);
    setIsExpand(true);
    setCustomerName(name);
  };

  const close = () => setIsExpand(false);

  return (
    <div className='container'>
      <header className='container-header'>Retailer Dashboard</header>
      <div className='container-body'>
        {loading ? (
          <div className='loading-container'>
            <Loader />
          </div>
        ) : (
          <Table
            tableData={customersList}
            tableConfig={config((id, name) => showAllTransactions(id, name))}
            customerTrans={customerTrans}
            customerName={customerName}
            isExpand={isExpand}
            tableType='parent'
            close={() => close()}
          />
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Dashboard;
