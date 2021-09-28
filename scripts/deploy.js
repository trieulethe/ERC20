// scripts/deploy.js
async function main() {
  // erc20
  const GLDToken = await ethers.getContractFactory("GLDToken");
  console.log("Deploying GLDToken...");
  const token = await GLDToken.deploy(1000000000);
  await token.deployed();
  console.log("token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
