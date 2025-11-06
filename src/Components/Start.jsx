import { Expo, Power4 } from "gsap/all";
import { motion } from "motion/react";
import React from "react";
motion;
Power4;
function Start() {
  return (
    <div className=" relative w-full h-[150vh] sm:h-[250vh]">
      <div className="picture w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="w-full absolute top-0">
        <div className=" text max-w-screen-2xl h-full mx-auto px-5 sm:px-10 text-white">
          <div className="Para mt-72 sm:mt-[30rem]">
            {[
              "Global digital design studio partnering with",
              " brands and businesses that create exceptional",
              "experiences where people live, work, and unwind.",
            ].map((item, index) => {
              return (
                <p className="text-md  masker sm:text-3xl overflow-hidden">
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: Expo.easeInOut,
                      duration: 0.8,
                      delay: index * 0.3,
                    }}
                    className="inline-block origin-left"
                  >
                    {item}
                  </motion.span>
                </p>
              );
            })}
          </div>
          <div className="headings mt-5 sm:mt-10">
            {["Digital", "Design", "Experience"].map((item, index) => {
              return (
                <h1 className="text-6xl sm:text-[17rem] font-light py-3 sm:py-4 sm:-mt-20 tracking-tighter leading-none overflow-hidden">
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: Power4.easeInOut,
                      duration: 0.8,
                      delay: 1 + index * 0.15,
                    }}
                    className="inline-block origin-left"
                  >
                    {item}
                  </motion.span>
                </h1>
              );
            })}
          </div>
          <div className="Para2 sm:w-1/3 mt-10 sm:mt-20">
            <p sm:text-xl>
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <a
              className="sm:text-xl sm:border-b-[1px] border-b-[.3px] border-zinc-100 pb-1 mt-10 inline-block"
              href="# "
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
