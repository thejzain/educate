import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from './Sidebar';

const Quiz = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    // Handle the submission logic here (e.g., send to backend, calculate score)
    // For demonstration, just console.log the selected option
//    console.log('Selected Option:', selectedOption);
    setSubmitted(true);
  };

  const handleGoBack = () => {
    router.back(); // Go back to the previous page
  };
  return (
    <div className="w-full h-full">
      <div style={{ height: '80px' }} className="font-bold ">
        <h1 className="text-2xl font-bold p-3 m-3">Assignment</h1>
      </div>
      <div className=" w-full h-full bg-white text-black p-4 ">
           <div className=" border border-solid border-black p-4 w-[600px] ">
           <div>
           <div className="w-2/3">
           <div className="w-full">
           <div className="">
              <h2>Question 1:</h2>
              <label>
              <input
                 type="radio"
                 value="Option A"
                 checked={selectedOption === 'Option A'}
                 onChange={handleOptionChange}
               />
          Option A
        </label>
        <label>
          <input
            type="radio"
            value="Option B"
            checked={selectedOption === 'Option B'}
            onChange={handleOptionChange}
          />
          Option B
        </label>
        <label>
          <input
            type="radio"
            value="Option C"
            checked={selectedOption === 'Option C'}
            onChange={handleOptionChange}
          />
          Option C
        </label>
        <label>
          <input
            type="radio"
            value="Option D"
            checked={selectedOption === 'Option D'}
            onChange={handleOptionChange}
          />
          Option D
        </label>
      </div>
      </div>
      {!submitted ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <button onClick={handleGoBack}>Go Back</button>
      )}
    </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;