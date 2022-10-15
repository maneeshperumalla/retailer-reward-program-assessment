import React, { useEffect, useState } from 'react';
import './dashboard.css';
import getCustomersList from '../services/getCustomersApi';
import ParentTable from '../components/table/table';
import { ParentHeaders } from '../services/constants';
import combineTransactionsByCustomer from '../utils/filterTransactions';
import calculateRewards from '../utils/calculateRewards';

const Dashboard = () => {
  const [customersList, setCustomersList] = useState([]);
  const [TransactionsList, setTransactionsList] = useState([]);

  useEffect(() => {
    getCustomersList().then((data) => {
      const pointsPerTransaction = calculateRewards(data);
      const filteredByCustomer = combineTransactionsByCustomer(
        pointsPerTransaction,
        'id'
      );
      setCustomersList(filteredByCustomer);
      setTransactionsList(pointsPerTransaction);
    });
  }, []);

  return (
    <div className='container'>
      <header className='container-header'>Retailer Dashboard</header>
      <div className='container-body'>
        <ParentTable
          tableData={customersList}
          expndableData={TransactionsList}
          headers={ParentHeaders}
          tableType='parent'
        />
      </div>
    </div>
  );
};

export default Dashboard;
