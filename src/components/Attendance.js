import React from 'react';
import Sidebar from './Sidebar';
import FunctionalCards from './FunctionalCards';
import SubjectCards from './SubjectCards'

const Attendance = () => {
return (
  <div className="w-full">
    <div style={{ height: '80px' }} className="font-bold flex ">
      <h1 className="text-2xl font-bold  p-3 m-3">Attendance</h1>
    </div>

    {/* Dashboard Layout */}
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="w-2/3">
      <div className="w-full p-5">
        <div className="p-5 w-full border rounded shadow-md shadow-gray-400">
          {/* Card 1 - Functionality 1 */}
          <h1>Percentage</h1>
        </div>
      </div>
      <main className="w-full p-8 pt-10 flex flex-wrap gap-4">
      <SubjectCards/>
      <SubjectCards/>
      <SubjectCards/>
      </main>
      </div>
      <FunctionalCards />
    </div>
  </div>
);



};

export default Attendance;