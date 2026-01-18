export function generateReport(stake, rewards) {
  console.log("----- Staking Report -----");
  console.log("Validator:", stake.validator);
  console.log("Amount Staked:", stake.amountStaked);
  console.log("New Total Staked:", stake.newTotal);
  console.log("Gross Reward:", rewards.grossReward);
  console.log("Commission Fee:", rewards.commissionFee);
  console.log("Net Reward:", rewards.netReward);
  console.log("---------------------------");
}
