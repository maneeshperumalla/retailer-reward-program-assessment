import React, { useState } from 'react';
import Modal from '../modal/modal';
import './table.css';
import combineTransactionsByCustomer from '../../utils/filterTransactions';

const ParentTable = ({ headers, tableData, expndableData }) => {
  const [isExpand, setIsExpand] = useState(false);
  const [customerTrans, setCustomerTrans] = useState([]);
  const [customerName, setCustomerName] = useState('');

  const showAllTransactions = (id, name) => {
    const filterById = expndableData.filter((x) => x.id === id);
    const filteredList = combineTransactionsByCustomer(filterById, 'month');
    setCustomerTrans(filteredList);
    setIsExpand(true);
    setCustomerName(name);
  };

  const close = () => setIsExpand(false);

  return (
    <>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              {headers.map((header, key) => {
                return <th key={key}>{header}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((value, key) => {
              return (
                <>
                  <tr key={key}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.totalTransactions}</td>
                    <td>{value.cost}</td>
                    <td>{value.totalRewards}</td>
                    <td>
                      <button
                        onClick={() =>
                          showAllTransactions(value.id, value.name)
                        }
                      >
                        View All
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      {isExpand && (
        <Modal onCloseModal={close} data={customerTrans} name={customerName} />
      )}
    </>
  );
};

export default ParentTable;
