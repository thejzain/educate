import React from 'react';

const Profile = () => {
  return (
    <div className='bg-grey-100 h-8 shadow-sm shadow-purple-600 flex flex-direction-row px-16 rounded-lg w-96 m-8'>
      <div className="flex-grow">
        Name
      </div>
      <div className="flex-grow">
        Rank
      </div>
      <div className="flex-grow">
        Points
      </div>
    </div>
  );
};

export default Profile;

