import React, { useEffect, useState } from 'react';
import './dashboard.css';
import getCustomersList from '../services/getCustomersApi';
import Table from '../components/table/table';
import { ParentHeaders, config } from '../services/constants';
import combineTransactionsByCustomer from '../utils/filterTransactions';
import calculateRewards from '../utils/calculateRewards';

const Dashboard = () => {
  const [customersList, setCustomersList] = useState([]);
  const [TransactionsList, setTransactionsList] = useState([]);
  const [customerTrans, setCustomerTrans] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [isExpand, setIsExpand] = useState(false);

  useEffect(() => {
    getCustomersList().then((data) => {
      const pointsPerTransaction = calculateRewards(data);
      const filteredByCustomer = combineTransactionsByCustomer(pointsPerTransaction, 'id');
      setCustomersList(filteredByCustomer);
      setTransactionsList(pointsPerTransaction);
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
        <Table
          tableData={customersList}
          tableConfig={config((id, name) => showAllTransactions(id, name))}
          customerTrans={customerTrans}
          customerName={customerName}
          isExpand={isExpand}
          tableType='parent'
          close={() => close()}
        />
      </div>
    </div>
  );
};

export default Dashboard;
