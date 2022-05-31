import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

function MovieInformation(props) {
  const { id } = useParams()
  // const location = useLocation();
  // const state = location.state;
  const { favorites } = useSelector(state => state)

  console.log(favorites)
  const [state, setMovie] = useState()
  
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const key = "d935e5b2332dc2b6f39636cffcc59771";

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US&page=1`).then((response) => {
      setMovie(response.data);
    });
  }, [id])

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black" />
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/w500/${state?.backdrop_path}`}
          alt={state?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{state?.title}</h1>

          <p className="text-gray-400 text-sm">
            Released : {state?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(state?.overview, 500)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieInformation;
