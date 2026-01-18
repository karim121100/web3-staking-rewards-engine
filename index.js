import { connectRPC } from "./rpc.client.js";
import { loadValidators } from "./validator.registry.js";
import { stakeTokens } from "./staking.engine.js";
import { calculateRewards } from "./reward.calculator.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Staking Rewards Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const validators = loadValidators();

const stakeResult = stakeTokens(validators[0], 500);
const rewards = calculateRewards(stakeResult);

generateReport(stakeResult, rewards);
