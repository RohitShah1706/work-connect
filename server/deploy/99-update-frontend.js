const {ethers, network} = require("hardhat");
const fs = require('fs');
const FRONT_END_ADDRESSES_FILE = "../client/src/constants/contractAddresses.json";
const FRONT_END_ABI_FILE = "../client/src/constants/abi.json";

module.exports = async () => {
    console.log("Inside update-frontend.js",process.env.UPDATE_FRONT_END);
    if(process.env.UPDATE_FRONT_END == "true")
    {
        console.log("Updating front end...")
        await updateContractAddress();
        await updateABI();
    }
}
const updateContractAddress = async () => {
    const jobPlatform = await ethers.getContract("JobPlatform");
    const chainId = network.config.chainId.toString();
    const currentAddresses = JSON.parse(fs.readFileSync(FRONT_END_ADDRESSES_FILE,"utf8"));
    if(chainId in currentAddresses){
        if(!currentAddresses[chainId].includes(jobPlatform.address)){
            currentAddresses[chainId].push(jobPlatform.address);
        }
    }
    else{
        currentAddresses[chainId] = [jobPlatform.address];
    }
    fs.writeFileSync(FRONT_END_ADDRESSES_FILE, JSON.stringify(currentAddresses));
}
const updateABI = async () => {
    const jobPlatform = await ethers.getContract("JobPlatform");
    const chainId = network.config.chainId.toString();
    // ! interface directly gives us the ABI and we format it to be a JSON string
    fs.writeFileSync(FRONT_END_ABI_FILE,jobPlatform.interface.format(ethers.utils.FormatTypes.json));
}
module.exports.tags = ["all","frontend","main"]