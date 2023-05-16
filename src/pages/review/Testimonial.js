import React, { useState } from "react";

const Testimonial = ({ name, message }) => {
  const words = message.split(/\s+/);
  const first30Words = words.slice(0, 30);
  const restOfWords = words.slice(30);

  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
      <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
        <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="w-8 h-8 text-lime-400"
          >
            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
          </svg>
          {showAll ? words.join(" ") : first30Words.join(" ")}
          {!showAll && restOfWords.length > 0 && (
            <a
              onClick={() => setShowAll(true)}
              style={{
                cursor: "pointer",
                color: "lime",
              }}
            >
               ... See more
            </a>
          )}
          {showAll && (
            <a
              onClick={() => setShowAll(false)}
              style={{
                cursor: "pointer",
                color: "lime",
              }}
            >
                ... See less
            </a>
          )}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-lime-400 text-gray-900">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGl3P5G38b78VLpofjzLoBHA4OH2yCMbkseSkCOg&s"
          alt=""
          className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
        />
        <p className="text-xl font-semibold leading-tight">{name}</p>
      </div>
    </div>
  );
};

export default Testimonial;
