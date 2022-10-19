export const DOUBLE_REWARDS_AMOUNT = 100;
export const DOUBLE_REWARDS_POINTS = 2;
export const SINGLE_REWARDS_AMOUNT = 50;
export const SINGLE_REWARDS_POINTS = 1;
export const LAST_3_MONTHS = 3;

export const options = [
  {
    key: 'all',
    label: 'All',
  },
  {
    key: 'last3months',
    label: 'Last 3 Months',
  },
];

export const config = (onViewAll) => [
  {
    headerName: 'Customer ID',
    key: 'id',
    isActionable: false,
  },
  {
    headerName: 'Name',
    key: 'name',
    isActionable: false,
  },
  {
    headerName: 'Total Orders',
    key: 'totalTransactions',
    isActionable: false,
  },
  {
    headerName: 'Total Amount',
    key: 'cost',
    isActionable: false,
  },
  {
    headerName: 'Total Rewards',
    key: 'totalRewards',
    isActionable: false,
  },
  {
    headerName: 'Action',
    key: '',
    isActionable: true,
    buttonName: 'View Transactions',
    onClick: onViewAll,
    getId: 'id',
    getName: 'name',
  },
];

export const transactionsTable = () => [
  {
    headerName: 'Month',
    key: 'month',
    isActionable: false,
  },
  {
    headerName: 'Transactions',
    key: 'totalTransactions',
    isActionable: false,
  },
  {
    headerName: 'Amount Spent',
    key: 'cost',
    isActionable: false,
  },
  {
    headerName: 'Monthly Rewards',
    key: 'totalRewards',
    isActionable: false,
  },
];
