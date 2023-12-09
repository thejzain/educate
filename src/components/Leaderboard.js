import React from "react";
import Profile from "./Profile.js";
const Leaderboard = () => {
  return (
    <div>
      <div>
        <h1>Status Board</h1>
      </div>
      <div className="button bg-transparent p-[200px] m-8 ">
        <Profile Name={"name1"} Rank={1} Points={5} />
        <Profile Name={"name1"} Rank={1} Points={5} />
        <Profile Name={"name1"} Rank={1} Points={5} />
      </div>
    </div>
  );
};

export default Leaderboard;
