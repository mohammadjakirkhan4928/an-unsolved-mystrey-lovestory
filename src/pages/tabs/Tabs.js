import React from "react";
import { Link, useLocation } from "react-router-dom";
import './tabs.css';

const Tabs = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className=" flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center  flex-nowrap dark:bg-gray-800 dark:text-gray-100">
      <Link
        to="/"
        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-400 dark:text-gray-50 ${
          isActive("/") ? "border-primary font-bold" : ""
        }`}
      >
        <span>Home</span>
      </Link>
      <Link
        to="/novelpdfpage"
        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-400 dark:text-gray-50 ${
          isActive("/novelpdfpage") ? "border-primary font-bold" : ""
        }`}
      >
        <span>Novel</span>
      </Link>
      <Link
        to="/review"
        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-400 dark:text-gray-50 ${
          isActive("/review") ? "border-primary font-bold" : ""
        }`}
      >
        <span>Review</span>
      </Link>
      <Link
        to="/songs"
        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-400 dark:text-gray-50 ${
          isActive("/songs") ? "border-primary font-bold" : ""
        }`}
      >
        <span>Song</span>
      </Link>
    </div>
  );
};

export default Tabs;
