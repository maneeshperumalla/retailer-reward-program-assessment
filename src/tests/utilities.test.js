import sumOfProperty from '../utils/sumOfProperty';
import lastThreeMonthsFilter from '../utils/lastThreeMonths';
import calculateRewards from '../utils/calculateRewards';
import combineTransactionsByCustomer from '../utils/filterTransactions';
import {
  props,
  calculateRewardsProps,
  filterByCustomerId,
  filterByCustomerMonth,
  last3MonthsData,
} from './props';

describe('calculateRewards', () => {
  test('should filter data and calculate total rewards for each object', () => {
    expect(calculateRewards(props)).toStrictEqual(calculateRewardsProps);
  });
});

describe('combineTransactionsByCustomer by Id', () => {
  test('should filter data and filter the data by a property', () => {
    expect(
      combineTransactionsByCustomer(calculateRewardsProps, 'id')
    ).toStrictEqual(filterByCustomerId);
  });
});

describe('validate sumOfProperty utility function', () => {
  test('should filter and array of objects and retrun with sum of the cost ', () => {
    expect(sumOfProperty(props, 'cost')).toBe(1431);
  });
});

describe('validate lastThreeMonthsFilter utility function', () => {
  test('should filter array of objects with last 3 months data', () => {
    expect(lastThreeMonthsFilter(filterByCustomerMonth)).toStrictEqual(
      last3MonthsData
    );
  });

  test('should handle if empty or null date is passed', () => {
    const mock = [
      {
        id: 'JAM78789',
        date: null,
      },
    ];
    expect(lastThreeMonthsFilter(mock)).toStrictEqual([]);
    expect(lastThreeMonthsFilter(mock)).not.toBeNull();
  });
});
