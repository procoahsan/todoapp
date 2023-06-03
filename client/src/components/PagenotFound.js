import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
    <p className="text-lg text-gray-600 mb-8">
      The requested page does not exist.
    </p>
    <button
      className="px-4 py-2 text-lg font-semibold bg-red-500 text-white rounded hover:bg-red-600"
      onClick={handleRedirect}
    >
      Go to Home
    </button>
  </div>
  );
};

export default PageNotFound;
