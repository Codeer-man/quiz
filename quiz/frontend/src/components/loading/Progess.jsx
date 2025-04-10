import React from "react";

const ProgressBarLoading = () => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full animate-pulse"
        style={{ width: "45%" }}
      ></div>
    </div>
  );
};

export default ProgressBarLoading;
