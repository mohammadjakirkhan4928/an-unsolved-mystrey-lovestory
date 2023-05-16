import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faComment,
  faDownload,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { useState } from "react";
import './novelcover.css';




const NovelCover = () => {

  return (
    <div className="flex items-center justify-center m-5 bg-base-200 ">
      <div className="flex flex-col lg:flex-row items-center justify-center m-5">
        <Link to="/novelpdfpage?page=1">
          <img
             src="https://i.ibb.co/DKbDcMz/AN-UNSOLVED.jpg"
            alt="novel-cover-image"
            className="max-w-sm h-64 rounded-lg shadow-2xl"

          />
        </Link>

        <div className="text-center lg:text-left lg:ml-8">
          <h1 className="text-5xl md:font-bold font-semibold text-blue-600">
            An Unsolved Mystery Lovestory
          </h1>
          <p className="py-6 text-lg font-semibold">
            By:
            <span className="py-6 text-lg font-semibold text-blue-600">
              Mohammad Jakir Khan
            </span>
          </p>

          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 sm:justify-center md:justify-center">
            <div className="">
              <Link
                to="/novelpdfpage"
                className="btn btn-primary  flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faBookOpen} className="p-2" />
                Read
              </Link>
            </div>
            <div className="">
              <a
                href="/Story.pdf"
                download
                className="btn  btn-outline btn-primary  flex items-center justify-center"
              >
                <FontAwesomeIcon
                  icon={faDownload}
                  className="p-2  text-teal-700"
                />
                Download Novel
              </a>
            </div>
            <div className="">
              <Link
                to="/review"
                className="btn  btn-outline btn-info  flex items-center justify-center"
              >
                <FontAwesomeIcon
                  icon={faComment}
                  className="p-2 text-teal-900"
                />
                Submit Review
              </Link>
            </div>
            <div className="">
              <Link
                to="/songs"
                className="btn   btn-warning  flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faMusic} className="p-2 text-teal-900" />
                Songs lyrics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelCover;
