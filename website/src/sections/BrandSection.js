import React from 'react';

const BrandSection = () => {
  return (
    <section className="relative w-screen h-[600px] bg-black overflow-hidden flex items-center justify-center">
      <div className="w-screen px-0">
        <h1
          className="text-9xl sm:text-[150px] md:text-[200px] lg:text-[280px] xl:text-[350px] 2xl:text-[400px] font-black leading-[0.9] whitespace-nowrap overflow-hidden text-center"
          style={{ textIndent: '-0.09em' }}
        >
          <span className="text-white">Code</span><span className="text-blue-600">Xa</span>
        </h1>
      </div>
    </section>
  );
};

export default BrandSection;
