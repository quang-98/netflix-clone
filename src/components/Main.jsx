import axios from "axios";
import { stringify } from "postcss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black" />
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <Link
              to={`/information/${movie?.id}`}
              state={movie}
              className="border bg-gray-300 text-black border-gray-300 py-2 px-5"
            >
              Play
            </Link>
            <button className="border text-white border-gray-300 ml-4 py-2 px-5">
              Watch later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released : {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 100)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
