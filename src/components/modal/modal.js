import React, { Component } from 'react';
import './modal.css';
import ExpandedTable from '../table/expandedTable';
import { ChildHeaders } from '../../services/constants';
import sumOfProperty from '../../utils/sumOfProperty';

class Modal extends Component {
  closeCustomModal = (e) => {
    this.props.onCloseModal(e);
  };
  render() {
    const { data, name } = this.props;
    const totalCustomerRewatds = sumOfProperty(data, 'totalRewards');
    return (
      <div id='myModal' className='modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            <span className='close' onClick={this.closeCustomModal}>
              &times;
            </span>
            <span className='customer-name'>{name} : </span>
            <span className='header-text'> Monthly Transactions</span>
          </div>

          <div className='modal-body'>
            <ExpandedTable tableData={data} headers={ChildHeaders} />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
