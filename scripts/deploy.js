
const hre = require("hardhat");

async function main() {
 

  const Soundex = await hre.ethers.getContractFactory("SoundexMarketplace");
  const soundex = await Soundex.deploy();

  await soundex.deployed();

  console.log(
    `Contract deployed to ${soundex.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
