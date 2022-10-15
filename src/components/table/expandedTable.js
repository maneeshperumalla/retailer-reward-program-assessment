import React, { Component, useState } from 'react';
import './table.css';
import lastThreeMonthsFilter from '../../utils/lastThreeMonths';
import sumOfProperty from '../../utils/sumOfProperty';

const ExpandedTable = ({ headers, tableData }) => {
  const [selectedOption, setSelectionOption] = useState('');

  const selectChangeHandler = (e) => {
    setSelectionOption(e.target.value);
  };

  const last3MonthsData = lastThreeMonthsFilter(tableData);
  const filteredList = selectedOption === 'last3months' ? last3MonthsData : tableData;
  const totalCustomerRewatds = sumOfProperty(filteredList, 'totalRewards');

  return (
    <>
      <div className='expanded-table'>
        <span>Filter: </span>
        <span className='select'>
          <select value={selectedOption} onChange={selectChangeHandler}>
            <option value='all'>All</option>
            <option value='last3months'>Last 3 months</option>
          </select>
        </span>
        <table>
          <thead>
            <tr>
              {headers.map((header, key) => {
                return <th key={key}>{header}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {filteredList.map((value, key) => {
              return (
                <>
                  <tr key={key}>
                    <td>{value.month}</td>
                    <td>{value.totalTransactions}</td>
                    <td>{value.cost}</td>
                    <td>{value.totalRewards}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <p>{`Total Rewards: ${totalCustomerRewatds}`}</p>
      </div>
    </>
  );
};

export default ExpandedTable;
