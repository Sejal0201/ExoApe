import React, { useEffect, useRef } from "react";
import reelplayvideo from "./reelplayvideo.mp4";
import gsap, { Power4 } from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger";
import { scale } from "motion/react";

function Playreel() {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline( {
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        pin: true,
        scrub: 1,
        
      }
    })
    tl
    .to(videodiv.current,{
      width: "105%",
      height: "105%",
      ease: Power4
    }, 'a')
    .to(play.current,{
      x: "100%",
      ease: Power4,
      scale: 1.2
    }, 'a')
    .to(reel.current,{
      x: "-100%",
      ease: Power4,
      scale: 1.2
    }, 'a')
  });
  return (
    <div
      ref={parent}
      className="w-full h-screen overflow-hidden bg-black relative"
    >
      <div
        ref={videodiv}
        className="w-40 sm:w-96 overflow-hidden aspect-video  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <video
          muted
          loop
          autoPlay
          className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2.5]"
          src={reelplayvideo}
        ></video>
      </div>
      <div className="overlay absolute w-full h-full  text-white py-20 flex flex-col justify-between">
        <div className="w-full flex items-center justify-center gap-3 ">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="text-sm">Work in motion</h3>
        </div>
        <h1 className="w-full flex justify-center gap-20 sm:gap-96 items-center">
          <div ref={play} className="text-4xl sm:text-8xl font-light">Play</div>
          <div ref={reel} className="text-4xl sm:text-8xl font-light">Reel</div>
        </h1>
        <p className="text-center px-10 text-xs">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
}

export default Playreel;
