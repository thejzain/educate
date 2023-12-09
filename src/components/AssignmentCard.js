import React from 'react';
import { useRouter } from 'next/router';



const SubjectCards = () => {
  const router = useRouter()
  return (
     <div className="w-full p-5 relative">
          <div className="p-8 w-full h-40 border rounded shadow-md shadow-gray-400 relative">
            <h1 className="font-bold text-2xl pb-3">Mathematics</h1>
            <h1>Quiz 1</h1>
            <h3>Description</h3>
            <button onClick={() => router.push('/quiz')} className="absolute bottom-3 right-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Attend Quiz
            </button>
          </div>
        </div>

  );
};

export default SubjectCards;