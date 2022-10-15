import { LAST_3_MONTHS } from '../services/constants';

const lastThreeMonthsFilter = (tableData) => {
  const abc = tableData.filter((val) => {
    const today = new Date();
    const transactiondate = new Date(val.date);
    const last3months = new Date(today.setMonth(today.getMonth() - LAST_3_MONTHS));
    return  transactiondate >= last3months;
  });
  return abc
};

export default lastThreeMonthsFilter;
