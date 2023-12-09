import React from 'react';
import Sidebar from './Sidebar';
import AssignmentCard from './AssignmentCard'
import { useRouter } from 'next/router';

const Assignment = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      <div style={{ height: '80px' }} className="font-bold flex">
        <h1 className="text-2xl font-bold p-3 m-3">Assignment</h1>
      </div>

      <div className="flex h-screen w-full">
        <Sidebar />
        <div className="w-2/3">
           <AssignmentCard/>

        </div>
      </div>
    </div>
  );
};

export default Assignment;
