import React from 'react';
import Sidebar from './Sidebar';
import Leaderboard from './Leaderboard';
import FunctionalCards from './FunctionalCards';

const Layout = () => {
  return (
  <div>
    {/* Login Section */}
    <div style={{ height: '150px' }} className="font-bold bg-white">
      <h1 className="text-2xl font-bold "></h1>
    </div>

    {/* Dashboard Layout */}
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-1/2 flex justify-center items-center">
        <Leaderboard />
      </main>
      <FunctionalCards />
    </div>
  </div>
);

};

export default Layout;
