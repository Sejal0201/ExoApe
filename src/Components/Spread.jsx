import React from "react";

function Spread() {
  return (
    <div className="w-full bg-white ">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 ">
        <div className="flex items-center justify-center gap-2">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 mt-15"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h1 className="mt-15">In the media</h1>
        </div>
        <div className="text mt-18 text-center">
            
          <h1 className="capitalize text-6xl sm:text-9xl tracking-tighter">Spread</h1>
          <h1 className="capitalize text-6xl sm:text-9xl tracking-tighter">the news</h1>
          <p className="w-2/3 sm:w-1/3 mx-auto mt-5 sm:mt-10 text-md sm:text-xl ">
            Find out more about our work on these leading design and technology
            platforms.
          </p>
          <a
            className=" border-b-[1px]  border-zinc-900 pb-1c mt-20 inline-block"
            href="#"
          >
            Browse all news
          </a>
        </div>
      </div>
      <div className=" w-full mt-26 bg-black px-5 sm:px-10 text-white text-center ">
        <div className="w-full py-27 text-center">
          <h1 className="capitalize text-6xl sm:text-9xl tracking-tighter ">Our</h1>
          <h1 className="capitalize text-6xl sm:text-9xl tracking-tighter ">Story</h1>

          <p className="w-2/3 sm:w-1/3 mx-auto sm:text-xl mt-17 text-sm text-center ">
            The story behind Exo Ape is one of exploration, creativity and
            curiosity.
          </p>
          <a
            className=" border-b-[1px]  border-white-400 pb-1c mt-9 inline-block"
            href="#"
          >
            Our Story
          </a>
        </div>
      </div>
    </div>
  );
}

export default Spread;
