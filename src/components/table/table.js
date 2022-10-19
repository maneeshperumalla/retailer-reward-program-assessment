import React from 'react';
import Modal from '../modal/modal';
import './table.css';

const Table = ({ tableData, tableConfig, customerTrans, customerName, isExpand, close }) => {
  return (
    <>
      <div className='table-container'>
        <table>
          <thead className='header-thead'>
            <tr className='header-tr'>
              {tableConfig.map((header, key) => {
                return <td key={key}>{header.headerName}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((value, key) => {
              return (
                <>
                  <tr className='body-tr' key={key}>
                    {tableConfig.map((body, key) => {
                      return (<td className='body-td' key={key}>{body.isActionable
                        ? <button className='body-action' onClick={() => body.onClick(value[body.getId], value[body.getName])}>{body.buttonName}</button>
                        : <span>{value[body.key]}</span>}</td>);
                    })}
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

export default Table;
