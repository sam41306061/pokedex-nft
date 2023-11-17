const hre = require('hardhat');

async function main() {
  const PokeDexNFT = await hre.ethers.getContractFactory('PokeDexNFT');
  console.log('Deploying PokeDexNFT contract');

  const pdxnft = await PokeDexNFT.deploy('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65');
  await pdxnft.deployed();

  console.log('PokeDexNFT deployed to:', pdxnft.address);
}
// boiler plate execute code
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });