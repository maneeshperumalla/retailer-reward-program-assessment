const combineTransactionsByCustomer = ( data, filterby ) => {
  return Object.values(
    data.reduce((prev, curr) => {
      const dynamicCurrentValue = filterby === 'id' ? curr.id : curr.month;
      if (prev[dynamicCurrentValue]) {
        prev[dynamicCurrentValue].cost += curr.cost;
        prev[dynamicCurrentValue].totalTransactions++;
        prev[dynamicCurrentValue].totalRewards += curr.totalRewards;
        // if (showOrders) prev[dynamicCurrentValue].totalTransactions++;
      } else {
        prev[dynamicCurrentValue] = { ...curr, totalTransactions: 1 };
      }
      return prev;
    }, {})
  );
};

export default combineTransactionsByCustomer;
