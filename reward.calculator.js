export function calculateRewards(stakeResult) {
  const rewardRate = 0.1;
  const grossReward = stakeResult.amountStaked * rewardRate;
  const commissionFee = grossReward * stakeResult.commission;

  return {
    grossReward: grossReward.toFixed(2),
    commissionFee: commissionFee.toFixed(2),
    netReward: (grossReward - commissionFee).toFixed(2)
  };
}
