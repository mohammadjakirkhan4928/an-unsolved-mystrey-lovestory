import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="px-8 py-2 bg-primary text-white rounded my-2">
      <div className="text-center font-semibold">
        <h5>
          এটি আমার প্রথম ছোট উপন্যাস। অনুগ্রহ করে
          <span className="text-warning underline p-2">
            <Link to="/review">মতামত দিন</Link>
          </span>
          😘
        </h5>
      </div>
    </div>
  );
};

export default Banner;
