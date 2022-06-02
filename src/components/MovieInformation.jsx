import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import requests from "../Request";

function MovieInformation(props) {
  const { id } = useParams();

  const [state, setMovie] = useState();

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  useEffect(() => {
    axios.get(requests.requestSingle(id)).then((response) => {
      setMovie(response.data);
    });
  }, [id]);

  return (
    <div data-testid="test-1" className="w-full h-[550px] text-white">
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
