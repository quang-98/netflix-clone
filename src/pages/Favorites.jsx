import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useSelector } from "react-redux";
import Movie from "../components/Movie";
import { selectUser } from "../features/userSlice";

function Favorites() {
  const { favorites } = useSelector((state) => state);
  const user = useSelector(selectUser);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      {user ? (
        <>
          <div className="fixed top-[15rem]">
            <h2 className="text-white font-bold md:text-xl p-4">Favorite</h2>
            <div className="relative flex items-center group">
              <MdChevronLeft
                onClick={slideLeft}
                className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                size={40}
              />
              <div
                id={"slider"}
                className="w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
              >
                {favorites?.map((item, id) => (
                  <Movie key={id} item={item} />
                ))}
              </div>
              <MdChevronRight
                onClick={slideRight}
                className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                size={40}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-white fixed top-[10rem]">
            Please Login
          </h1>
        </>
      )}
    </>
  );
}

export default Favorites;
