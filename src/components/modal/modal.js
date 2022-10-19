import React, { Component, useState } from 'react';
import './modal.css';
import sumOfProperty from '../../utils/sumOfProperty';
import { transactionsTable, options } from '../../services/constants';
import Table from '../table/table';
import lastThreeMonthsFilter from '../../utils/lastThreeMonths';
import SelectFilter from '../select/select';

const Modal = ({ onCloseModal, data, name }) => {
  const onclose = (e) => {
    onCloseModal();
  };

  const [selectedOption, setSelectionOption] = useState('');

  const last3MonthsData = lastThreeMonthsFilter(data);
  const filteredList = selectedOption === 'last3months' ? last3MonthsData : data;
  const totalCustomerRewatds = sumOfProperty(filteredList, 'totalRewards');

  const selectedOptionList = (opt) => {
    setSelectionOption(opt);
  };

  return (
    <div id='myModal' className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <span className='close' onClick={(e) => onclose(e)}>
            &times;
          </span>
          <span className='customer-name'>{name} : </span>
          <span className='header-text'> Monthly Transactions</span>
        </div>
        <div className='modal-body'>
          <SelectFilter
            selectedOption={selectedOption}
            getSelectedValue={(opt) => selectedOptionList(opt)}
            options={options}
          />
          <Table tableData={filteredList} tableConfig={transactionsTable()} />
          <p>{`Total Rewards: ${totalCustomerRewatds}`}</p>
        </div>
      </div>
    </div>
  );
};
export default Modal;
