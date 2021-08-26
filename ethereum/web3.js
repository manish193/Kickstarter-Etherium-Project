import Web3 from "web3";
require("dotenv").config();
const network = process.env.RINKEBY_ENDPOINT;

let web3;

if (
  typeof window !== "undefined" &&
  (typeof window.ethereum !== "undefined" || typeof window.web3 !== "undefined")
) {
  if (typeof window.ethereum !== "undefined") {
    web3 = new Web3(window.ethereum);

    if (typeof window.ethereum.autoRefreshOnNetworkChange !== "undefined") {
      window.ethereum.autoRefreshOnNetworkChange = false;
    }

    window.ethereum.on("chainChanged", () => {
      document.location.reload();
    });

    window.ethereum
      .enable()
      .then(_accounts => {
      })
      .catch(function(error) {
        console.error(error);
        alert(
          "Sorry, this application requires user approval to function correctly."
        );
      });
  } else {
    web3 = new Web3(window.web3.currentProvider);
  }
} else {
  const provider = new Web3.providers.HttpProvider(
    network
  );

  web3 = new Web3(provider);
}

export default web3;
