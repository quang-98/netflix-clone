import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../features/favoritesSlice";

const Movie = ({ item }) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);

  const handleRemoveFavorite = (id) => {
    setLike(false);
    dispatch(removeFavorite(id));
  };

  const handleAddFavorite = (item) => {
    setLike(true);
    dispatch(addFavorite(item));
  };
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt="{item?.title}"
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <Link
          to={`/information/${item?.id}`}
          state={item}
          className="white-space-normal cursor-pointer text-xs md:text-sm font-bold flex justify-center items-center h-full text-center"
        >
          {item?.title}
        </Link>
        <p>
          {like ? (
            <FaHeart
              className="absolute top-4 left-4 text-gray-300"
              onClick={() => handleRemoveFavorite(item?.id)}
            />
          ) : (
            <FaRegHeart
              className="absolute top-4 left-4 text-gray-300"
              onClick={() => handleAddFavorite(item)}
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
