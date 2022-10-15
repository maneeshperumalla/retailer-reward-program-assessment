import { DOUBLE_REWARDS_AMOUNT, DOUBLE_REWARDS_POINTS, SINGLE_REWARDS_AMOUNT, SINGLE_REWARDS_POINTS } from '../services/constants';

const calculateRewards = (data) => {
  return data.map((record) => {
    let points = 0;
    let over100 = record.cost - DOUBLE_REWARDS_AMOUNT;
    let reward50 = record.cost - SINGLE_REWARDS_AMOUNT;
    if (over100 > 0) {
      points += over100 * DOUBLE_REWARDS_POINTS + SINGLE_REWARDS_AMOUNT;
    }
    if (record.cost > SINGLE_REWARDS_AMOUNT && record.cost === DOUBLE_REWARDS_AMOUNT) {
      points += SINGLE_REWARDS_AMOUNT;
    }
    if (record.cost > SINGLE_REWARDS_AMOUNT && record.cost <= DOUBLE_REWARDS_AMOUNT) {
      points += reward50 * SINGLE_REWARDS_POINTS;
    }
    return { ...record, totalRewards: points };
  });
};

export default calculateRewards;
