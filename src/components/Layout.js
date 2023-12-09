import React from 'react';
import Sidebar from './Sidebar';
import Leaderboard from './Leaderboard';
import FunctionalCards from './FunctionalCards';

const Layout = () => {



  return (
  <div>
    <div style={{ height: 'full' }} className="font-bold bg-white">
      <h1 className="text-2xl font-bold "></h1>
    </div>
    {/* Dashboard Layout */}
    <div className="flex h-screen">
      <Sidebar />
       <div className="flex-grow flex justify-center items-center">
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
