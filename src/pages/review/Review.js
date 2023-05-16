import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Testimonials from "./Testimonials";

const Review = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!name) {
  //     toast.error("Please enter your name.");
  //     return;
  //   }

  //   if (!message) {
  //     toast.error("Please enter your review.");
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     await axios.post("http://localhost:9000/review", { name, message });
  //     toast.success("Review submitted successfully!");
  //     setName("");
  //     setMessage("");
  //     setReviewSubmitted(true);
  //   } catch (err) {
  //     console.error(err);
  //     toast.error("Failed to submit review");
  //   }

  //   setLoading(false);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      toast.error("Please enter your name.");
      return;
    }

    if (!message) {
      toast.error("Please enter your review.");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:9000/review", { name, message });
      toast.success("Review submitted successfully!");
      setName("");
      setMessage("");
      setReviewSubmitted(true);

      // Wait for 5 seconds before reloading the page
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit review");
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="grid max-w-screen-xl my-6 grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-800 text-gray-100">
        <div className="flex flex-col justify-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's Review!
            </h2>
            <div className="dark:text-gray-400">Thank you so much!</div>
          </div>
        </div>

        <form noValidate="" className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder=""
              required
              className="w-full p-3 rounded text-primary"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm">
              Write your review
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              className="w-full p-3 rounded text-primary"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full btn-primary p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
