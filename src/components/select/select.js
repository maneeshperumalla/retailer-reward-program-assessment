import React from 'react';

const SelectFilter = ({ selectedOption, getSelectedValue, options }) => {
  const selectChangeHandler = (e) => {
    getSelectedValue(e.target.value);
  };

  return (
    <>
      <div className='expanded-table'>
        <span>Filter: </span>
        <span className='select'>
          <select value={selectedOption} onChange={selectChangeHandler}>
            {options.map((i) => (
              <option value={i.key}>{i.label}</option>
            ))}
          </select>
        </span>
      </div>
    </>
  );
};

export default SelectFilter;
