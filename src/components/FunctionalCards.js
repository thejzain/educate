import React from 'react';
import SideCards from './SideCards'
const FunctionalCards = () => {
  return (
    <section className="w-1/3 bg-gray-200 p-4">
      <div className="grid grid-cols-1 gap-4 w-full bg-gray-200 p-4">
        <SideCards/>
        <SideCards/>
        <SideCards/>
      </div>
    </section>
  );
};

export default FunctionalCards;
