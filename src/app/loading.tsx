import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
