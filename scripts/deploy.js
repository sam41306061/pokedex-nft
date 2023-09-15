async function main() {

  const {time} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // deploy contracts here:
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = 1_000_000_000;
    const lockedAmount = ethers.BigNumber.from(ONE_GWEI);
    const unlockTime = ethers.BigNumber.from(await time.latest()).add(ONE_YEAR_IN_SECS)

  const LockContract = await ethers.getContractFactory('Lock');

  const lockked = await LockContract.deploy({
    lockedAmount:lockedAmount, 
    unlockTime:unlockTime
  });
  await lockked.deployed();
  console.log('We have successfully deployed lockked');
  
  // For each contract, pass the deployed contract and name to this function to save a copy of the contract ABI and address to the front end.
  saveFrontendFiles(lockked, 'Lock');
}

function saveFrontendFiles(contract, name) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../../frontend/contractsData";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: contract.address }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
