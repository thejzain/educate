import React from 'react';
import Profile from './Profile.js';
const Leaderboard = () => {
  return (
    <div>
    <div><h1>Status Board</h1></div>
    <div className="button bg-transparent p-[200px] m-8 ">
      <Profile/>
      <Profile/>
      <Profile/>
    </div>
    </div>
  );
};

export default Leaderboard;
