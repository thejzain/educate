import React from "react";
import Sidebar from "./Sidebar";
import AssignmentCard from "./AssignmentCard";
import { useRouter } from "next/router";
import abi_key from "./contract";
let Web3 = require("web3");

const Assignment = () => {
  const router = useRouter();
  function mint() {
    console.log("clicked")
    let web3 = Web3.providers.HttpProvider("https://sepolia-rpc.scroll.io");
    let contract = new web3.eth.Contract(
      abi_key,
      "0x1f365228cc03C99e9189f0B90a4b6285432242f1"
    );
    contract.methods
      .mint()
      .sent({ to: "0x3e4C127eD7777228e8b489C9291fD0f4E12e5e91", value: 50 });
  }
  return (
    <div className="w-full">
      <div style={{ height: "80px" }} className="font-bold flex">
        <h1 className="text-2xl font-bold p-3 m-3">Assignment</h1>
      </div>

      <div className="flex h-screen w-full">
        <Sidebar />
        <div className="w-2/3" onClick={() => mint}>
          <AssignmentCard />
        </div>
      </div>
    </div>
  );
};

export default Assignment;
