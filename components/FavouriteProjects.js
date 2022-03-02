import React from "react";
import Link from "next/link";

export default function FavouriteProjects() {
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
          <h1 className="text-6xl lg:text-6xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-gray dark:text-gray-600 text-center">
            Favorite Projects
          </h1>
        </header>
        <p>.</p>
        <p>.</p>
        {/* Grid starts here */}
        <div className="grid md:grid-cols-3 gap-8 lg:-mt-8 pb-5">
          {/* Single card */}
          <a
            href="https://paws-next.vercel.app/education"
            className="w-full block col-span-3 shadow-2xl"
            target="_blank"
          >
            <div className="relative overflow-hidden">
              <img
                src="/static/paws-next.png"
                alt="paws-next"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                paws-next{" "}
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://movies-hycwn468p-angelinatr15.vercel.app/"
            className="w-full block col-span-3  sm:col-span-2 shadow-2xl"
            target="_blank"
          >
            <div className="relative overflow-hidden">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="/static/movies.png"
                alt="movies"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Movies
              </h1>
              <h1 className="absolute bottom-10 left-10 text-black-50 font-bold text-xl">
                02
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://shopping-spree-kc2lsy8bp-angelinatr15.vercel.app/"
            className="w-full block col-span-3 sm:col-span-1  object-cover"
            target="_blank"
          >
            <div className="relative overflow-hidden shadow-2xl">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="/static/shopping.png"
                alt="shopping"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                shopping-spree
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                03
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
