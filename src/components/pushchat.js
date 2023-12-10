import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
const ethers = require("ethers");
import { useState, useEffect } from "react";

const PushChat = () => {
  const messages = useState([]);
  const currentbuf = useState("");

  const signer = ethers.Wallet.createRandom();
  const useAlice = async function () {
    return await PushAPI.initialize(signer, {
      env: CONSTANTS.ENV.STAGING,
    });
  };
  const bobWalletAddress = "0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666";
  const messsageto = async function () {
    return await userAlice.chat.send(bobWalletAddress, {
      content: "sajdfkjs",
    });
  };
  const stream = async function () {
    await userAlice.initStream([CONSTANTS.STREAM.CHAT]);
  };
  
  stream.on(CONSTANTS.STREAM.CHAT, (message) => {
    console.log(message);
  });
  stream.connect();

  return <div>chat booi</div>;
};

export default PushChat;
