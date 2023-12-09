import React from 'react';
import SideCards from './SideCards.js'
const FunctionalCards = () => {
  return (
    <section className="w-full bg-grey-200 p-16 h-full">
      <div className="grid grid-cols-1 gap-4 p-4 w-full bg-grey-200">
        <SideCards/>
        <SideCards/>
        <SideCards/>
      </div>
    </section>
  );
};

export default FunctionalCards;
