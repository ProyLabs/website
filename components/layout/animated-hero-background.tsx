// "use client";

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// interface Props {
//   src: string;
// }

// export default function AnimatedFigure({ src }: Props) {
//   const frameRef = useRef<HTMLDivElement | null>(null);
//   const videoRef = useRef<HTMLDivElement | null>(null);

//   useLayoutEffect(() => {
//     const frame = frameRef.current;
//     const video = videoRef.current;

//     if (!frame || !video) return;

//     const ctx = gsap.context(() => {
//       //
//       // INITIAL LOAD: scale from center
//       //
//       gsap.fromTo(
//         frame,
//         {
//           inset: "0",
//             width: "calc(100% - 24px)",
//           height: "calc(-24px + 100vh)",
//           scale: 0,
//            borderRadius: 200,
//         },
//         {
//           top: 12,
//           left: 12,
//           borderRadius: 20,
//           scale: 1,
//           duration: 1.4,
//           ease: "power3.out",
//         }
//       );

//       gsap.fromTo(
//         video,
//         { opacity: 0 },
//         {
//           opacity: 1,
//           delay: 1,
//           ease: "power3.out",
//         }
//       );

//         //
//         // SCROLL ANIMATION: expand frame to full bleed
//         //
//         gsap.to(frame, {
//           "--frame-top": "0px",
//           "--frame-left": "0px",
//           "--frame-width": "100%",
//           "--frame-height": "100vh",
//           "--frame-radius": "0px",
//           ease: "none",
//           scrollTrigger: {
//             trigger: frame,
//             start: "top bottom",
//             end: "top top",
//             scrub: true,
//           },
//         });

//         //
//         // VIDEO subtle polish
//         //
//         gsap.fromTo(
//           video,
//           { scale: 1,  },
//           {
//             scale: 1,
//             ease: "none",
//             scrollTrigger: {
//               trigger: frame,
//               start: "top bottom",
//               end: "top top",
//               scrub: true,
//             },
//           }
//         );
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <figure className="">
//       <div
//         id="frame"
//         ref={frameRef}
//         className="frame rounded-3xl absolute overflow-clip origin-center!"
//       >
//         <div
//           id="canvas"
//           className="bg-black top-1/2 left-1/2 absolute w-full h-full -translate-1/2"
//           style={{ clipPath: "100%" }}
//         >
//           <div
//             id="video"
//             ref={videoRef}
//             className="size-full m-auto top-0 left-0"
//             data-video-options='{"attributes":["autoplay","muted","loop","playsinline"]}'
//           >
//             <video
//               className="size-full m-auto top-0 left-0 object-cover object-center"
//               autoPlay
//               muted
//               loop
//               playsInline
//               preload="metadata"
//             >
//               <source src={src} type="video/mp4" />
//             </video>
//           </div>
//         </div>
//       </div>
//     </figure>
//   );
// }
