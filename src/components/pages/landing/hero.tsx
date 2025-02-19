import { LogoText } from "@/components/shared/logo";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="relative mt-2.5 sm:mt-5 lg:mt-28 bg-primary mx-2.5 sm:mx-5 rounded-[10px] sm:rounded-[20px] overflow-hidden max-h-[calc(100vh-1.25rem)]">
      <Image
        src="/banner.svg"
        className="absolute right-0 w-full !h-fit"
        fill
        alt={""}
      />
      <div
        data-aos="zoom-out"
        className="relative z-10 pt-[160px] sm:pt-[120px] text-white text-center max-w-4xl mx-auto w-11/12"
      >
        <div className="w-fit mx-auto max-w-[100px] object-contain">
          <LogoText className="w-full h-full" />
        </div>
        <h1
          data-aos="zoom-out"
          className="font-bold text-6xl md:text-8xl mx-auto mt-8"
        >
          Our Hearts in Every Pixel
        </h1>
        <p className="text-lg sm:text-2xl mt-7">
          Creating Games That Matter, With Passion and Purpose.
        </p>
        <div className="flex justify-center items-center space-x-2 mt-8"></div>
        <div className="flex justify-center relative h-[420px]"></div>
      </div>
    </div>
  );
}
