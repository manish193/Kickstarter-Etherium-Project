import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
require("dotenv").config();
const deployedAddress = process.env.DEPLOYED_ADDRESS;
const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  deployedAddress
  
);

export default instance;
