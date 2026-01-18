export function stakeTokens(validator, amount) {
  console.log("Staking tokens with:", validator.name);

  validator.totalStaked += amount;

  return {
    validator: validator.name,
    amountStaked: amount,
    newTotal: validator.totalStaked,
    commission: validator.commission
  };
}
