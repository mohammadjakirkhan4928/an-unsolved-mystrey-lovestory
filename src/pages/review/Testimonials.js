import React, { useState, useEffect } from "react";
import Testimonial from "./Testimonial";
import Loader from "../loader/Loader";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState(3);

  useEffect(() => {
    fetch("http://localhost:9000/reviewGet")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, []);

  const loadMoreReviews = () => {
    setDisplayedReviews(displayedReviews + 3);
  };

  return (
    <section className="my-8 mx-5  text-gray-100">
      <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
        <h1 className="p-4 text-4xl font-semibold leading-none text-center text-primary">
          পাঠকদের  প্রতিক্রিয়া
        </h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        {reviews.length === 0 ? (
          <Loader></Loader>
        ) : (
          reviews
            .slice(0, displayedReviews)
            .map((review) => (
              <Testimonial
                key={review.id}
                name={review.name}
                message={review.message}
              />
            ))
        )}

        {reviews.length > 3 && displayedReviews < reviews.length && (
          <div className="w-full text-center">
            <button
              className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded mt-4 inline-block"
              onClick={loadMoreReviews}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
