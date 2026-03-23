"use client";
import React from "react";

export const CustomCursor = () => {
  const cursorHolderRef = React.useRef<HTMLDivElement>(null);
  const cursorRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorHolderRef.current) {
        cursorHolderRef.current.style.translate = "";
        cursorHolderRef.current.style.rotate = "none";
        cursorHolderRef.current.style.scale = "none";
        cursorHolderRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const scaleCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      const target = e.target as HTMLElement | null;
      if (target?.tagName === "A" || target?.tagName === "BUTTON" || target?.parentElement?.tagName === "BUTTON" || target?.parentElement?.tagName === "A" || target?.parentElement?.parentElement?.tagName === "BUTTON" || target?.parentElement?.parentElement?.tagName === "A") {
        cursorRef.current.style.scale = "0.2";
      } else if (cursorRef.current.style.scale !== "1") {
        cursorRef.current.style.scale = "1";
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", scaleCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", scaleCursor);
    };
  }, []);

  return (
    <div className="fixed inset-0 h-dvh w-full z-10000 pointer-events-none overflow-hidden">
      <div ref={cursorHolderRef} className="hidden md:block">
        <div
          ref={cursorRef}
          className="absolute h-10 w-10 opacity-50 rounded-full -translate-1/2 transition-transform duration-600 ease-out border-3 border-primary"
        ></div>
      </div>
    </div>
  );
};
