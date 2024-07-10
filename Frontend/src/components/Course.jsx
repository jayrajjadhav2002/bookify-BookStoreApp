import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2x1 container mx auto md:px-20 px-4">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We are happy to have you{" "}
            <span className="text-pink-500"> here! :)</span>{" "}
          </h1>
          <p className="mt-12">
            Welcome to <span className="text-pink-500 font-bold">bookify</span>,
            where stories come alive and imagination knows no bounds. Our
            curated collection spans every genre, from timeless classics to
            modern masterpieces. Cozy nooks invite you to linger, while expert
            staff guide your literary journey. Discover hidden gems and
            bestsellers alike in a haven designed for book lovers. Dive into
            your next adventure today!
          </p>
          <Link to="/">
            <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
