import React from "react";

const loading = () => {
  return (
    <div className="container">
      <div className="animate-pulse">
        <div className="h-64 bg-gray-300"></div>
        <div className="mt-4 h-16 bg-gray-300"></div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="h-16 bg-gray-300"></div>
          <div className="h-16 bg-gray-300"></div>
        </div>
      </div>
      <div className="mt-8 animate-pulse">
        <div className="h-16 bg-gray-300"></div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="h-16 bg-gray-300"></div>
          <div className="h-16 bg-gray-300"></div>
        </div>
      </div>
      <div className="mt-8 animate-pulse">
        <div className="h-64 bg-gray-300"></div>
        <div className="mt-4 h-16 bg-gray-300"></div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="h-16 bg-gray-300"></div>
          <div className="h-16 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
