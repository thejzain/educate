import React from "react";
import Sidebar from "./Sidebar";
import Leaderboard from "./Leaderboard";
import FunctionalCards from "./FunctionalCards";
// import PushChat from "./pushchat";

const Layout = () => {
  return (
    <div>
      {/* <div>
        <PushChat />
      </div> */}
      <div style={{ height: "full" }} className="font-bold bg-white">
        <h1 className="text-2xl font-bold "></h1>
      </div>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex ">
          <Leaderboard />
        </div>
        <div className="flex-shrink-0">
          <FunctionalCards />
        </div>
      </div>
    </div>
  );
};
export default Layout;
