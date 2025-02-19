"use client";
import Hero from "@/components/pages/landing/hero";
import "aos/dist/aos.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // const slider = React.useRef<HTMLDivElement>(null);
  const container = React.useRef<HTMLDivElement>(null);

  // // horizontal scrolling stuff
  // React.useLayoutEffect(() => {
  //   const mm = gsap.matchMedia();

  //   const ctx = gsap.context(() => {
  //     const panels = gsap.utils.toArray(".panel");

  //     mm.add("(min-width: 640px)", () => {
  //       gsap.to(panels, {
  //         xPercent: -83 * (panels.length - 1),
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: slider.current,
  //           pin: true,
  //           start: "top 15%",
  //           scrub: 1,
  //           end: () => "+=" + slider.current!.offsetWidth,
  //           markers: false,
  //         },
  //       });
  //     });
  //   }, container);

  //   return () => ctx.revert();
  // });

  return (
    <div ref={container}>
      <Hero />
      <div className="py-14 bg-[#F5F6FC] bg-opacity-50 mx-2.5 sm:mx-5 mt-5 rounded-[20px]">
        <div className="w-9/12 sm:w-7/12 xl:w-4/12 mx-auto flex flex-col items-center">
          <p className="text-3xl sm:text-5xl font-semibold text-black text-center">
            Experience Entertainment with Eternal Impact.
          </p>
          <div className="px-4 py-2.5 mt-6  text-center text-base">
            Proylabs is a game development studio dedicated to creating
            immersive experiences that reflect the light of faith and the
            strength of Christian values.
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="grid grid-cols-1 lg:grid-cols-4 gap-[18px] mx-2.5 sm:mx-5 mt-5"
      >
        <div className="rounded-[100px] overflow-hidden w-full group relative cursor-pointer">
          <div className="bg-black bg-opacity-0 absolute w-full h-full lg:group-hover:bg-opacity-50 transition-element2 z-10"></div>
          <div className="relative h-[500px] bg-[#4982F5]">
            {/* <img
              src="https://firebasestorage.googleapis.com/v0/b/chow-328715.appspot.com/o/brands%2F500-Chow-October-24th7435_img.jpg?alt=media&amp;token=de4367af-5fc8-4c2c-bdfa-1f2bca50435d"
              alt="background"
              className="object-cover h-full w-full object-center transition-element2 lg:group-hover:scale-125 transition ead"
            /> */}
          </div>
        </div>

        <div className="rounded-[100px] overflow-hidden w-full group relative cursor-pointer">
          <div className="bg-black bg-opacity-0 absolute w-full h-full lg:group-hover:bg-opacity-50 transition-element2 z-10"></div>
          <div className="relative h-[500px] bg-[#FC3F62]">
            {/* <img
              src="https://firebasestorage.googleapis.com/v0/b/chow-328715.appspot.com/o/brands%2F500-Chow-October-24th7435_img.jpg?alt=media&amp;token=de4367af-5fc8-4c2c-bdfa-1f2bca50435d"
              alt="background"
              className="object-cover h-full w-full object-center transition-element2 lg:group-hover:scale-125 transition ead"
            /> */}
          </div>
        </div>

        <div className="rounded-[100px] overflow-hidden w-full group relative cursor-pointer">
          <div className="bg-black bg-opacity-0 absolute w-full h-full lg:group-hover:bg-opacity-50 transition-element2 z-10"></div>
          <div className="relative h-[500px] bg-[#FC7F3F]">
            {/* <img
              src="https://firebasestorage.googleapis.com/v0/b/chow-328715.appspot.com/o/brands%2F500-Chow-October-24th7435_img.jpg?alt=media&amp;token=de4367af-5fc8-4c2c-bdfa-1f2bca50435d"
              alt="background"
              className="object-cover h-full w-full object-center transition-element2 lg:group-hover:scale-125 transition ead"
            /> */}
          </div>
        </div>

        <div className="rounded-[100px] overflow-hidden w-full group relative cursor-pointer">
          <div className="bg-black bg-opacity-0 absolute w-full h-full lg:group-hover:bg-opacity-50 transition-element2 z-10"></div>
          <div className="relative h-[500px] bg-[#FCC33F]">
            {/* <img
              src="https://firebasestorage.googleapis.com/v0/b/chow-328715.appspot.com/o/brands%2F500-Chow-October-24th7435_img.jpg?alt=media&amp;token=de4367af-5fc8-4c2c-bdfa-1f2bca50435d"
              alt="background"
              className="object-cover h-full w-full object-center transition-element2 lg:group-hover:scale-125 transition ead"
            /> */}
          </div>
        </div>
      </div>

      {/* carousel */}
      {/* <div
        className="relative mt-5 flex flex-col sm:flex-row mx-2.5 sm:mr-5 overflow-x-hidden"
        ref={slider}
      >
        <div
          className={`grid grid-cols-1 sm:grid-cols-2  grid-rows-1 gap-[18px] mx-auto w-full flex-shrink-0 sm:mx-5`}
        >
          {carouselCopies.map((card) => (
            <CarouselCard key={card.title} {...card} />
          ))}
        </div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-[18px] w-full mx-auto mt-5 sm:m-0 flex-shrink-0`}
        >
          {carouselCopies2.map((card) => (
            <CarouselCard key={card.title} {...card} />
          ))}
        </div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2  grid-rows-1 gap-[18px] mx-auto w-full flex-shrink-0 sm:mx-5`}
        >
          {carouselCopies.map((card) => (
            <CarouselCard key={card.title} {...card} />
          ))}
        </div>
      </div> */}
    </div>
  );
}
