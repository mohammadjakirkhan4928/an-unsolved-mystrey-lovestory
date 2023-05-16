import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
      <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-50">
       
        <div className="p-4 space-y-4 sm:px-8">
          <div className="w-full h-4 rounded bg-gray-300"></div>
          <div className="w-full h-4 rounded bg-gray-300"></div>
          <div className="w-3/4 h-4 rounded bg-gray-300"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-lime-400 text-gray-900">
        <div className="w-16 h-16 mb-2 -mt-16 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="w-5/6 h-6 rounded bg-gray-300 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loader;
