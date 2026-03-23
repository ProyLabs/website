"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Hero() {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const hGroupRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const video = videoRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const hgroup = hGroupRef.current;

    if (!frame || !video || !title || !subtitle || !hgroup) return;

    const ctx = gsap.context(() => {
      const titleSplit = new SplitText(title, {
        type: "lines,words",
        linesClass: "split-line",
      });

      const subtitleSplit = new SplitText(subtitle, {
        type: "lines",
        linesClass: "split-line",
      });

      gsap.from(titleSplit.words, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.03,
        duration: 0.9,
        ease: "power3.out",
        delay: 1.2,
      });

      gsap.from(subtitleSplit.lines, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.6,
      });

      gsap.fromTo(
        video,
        { opacity: 0 },
        {
          opacity: 1,
          delay: 1,
          duration: 0.6,
          ease: "power3.out",
        },
      );

      // SCROLL EXPANSION
      gsap
        .timeline({
          scrollTrigger: {
            trigger: frame,
            start: "bottom 95%",
            end: "bottom 90%",
            scrub: true,
          },
        })
        .to(frame, {
          top: 0,
          left: 0,
          height: "100dvh",
          width: "100%",
          borderRadius: "0px",
        })
        .to(
          video,
          {
            scale: 1.05,
            ease: "none",
            // opacity: 0.85,
          },
          0,
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#what-we-do",
            start: "bottom 100%",
            scrub: true,
          },
        })
        .to(frame, {
          position: "relative",
          "--frame-height": "100%",
        });
    }, frame);

    // Optionally, you could trigger a callback or set a state here if you want to control section visibility from within Hero.
    // For now, just let the next section be visible by default after Hero renders/animates.
    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-clip bg-transparent z-1 w-full h-auto relative block p-12">
      <div className="text-white z-10 relative">
        <hgroup
          ref={hGroupRef}
          className="flex items-stretch flex-col justify-between h-[calc(100lvh-48px)] gap-y-25 pt-[max(112px,min(calc(112px+(148-112)*((100vw-440px)/(1440-440))),148px))] pb-[max(32px,min(calc(32px+.012*(100vw-440px)),44px))] w-full mx-auto max-w-screen-2xl"
        >
          <h1
            ref={titleRef}
            className="text-[clamp(4rem,2.4694rem+6.8027vw,9rem)] tracking-[-.03em] leading-[1em] max-w-6xl uppercase font-semibold"
          >
            Building Games That Matter
          </h1>
          <div className="items-end flex-row flex justify-between w-full gap-6">
            <h2
              ref={subtitleRef}
              className="text-[max(1.25rem,min(calc(1.25rem+.004*(100vw-27.5rem)),1.5rem))] max-w-2xl font-semibold"
            >
              We design and build meaningful games—digital and physical—that
              bring people together, spark engagement, and turn ideas into
              unforgettable play experiences.
            </h2>
          </div>
        </hgroup>
      </div>
      <div
        id="what-we-do"
        className="bg-transparent relative z-1 text-white py-17.5 w-full rounded-b-4xl"
      >
        <div className="flex flex-col justify-between pt-12 pb-11 w-full mx-auto max-w-screen-2xl">
          <div className="uppercase font-semibold text-sm px-4 py-2 rounded bg-white/10 w-fit backdrop-blur-2xl">
            What We Do
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 size-full mx-auto max-w-screen-2xl">
          <p className="text-[max(1.875rem,min(calc(1.875rem+.028*(100vw-27.5rem)),3.625rem))] leading-none font-medium">
            At Proylabs, we turn ideas into playable experiences.
          </p>
          <div className="text-base sm:text-lg space-y-4">
            <p>
              We partner with creators, brands, communities, and organisations
              to design, build, and launch games that connect people — whether
              on mobile, web, tabletop, or in live social settings.
            </p>
            <p>
              From concept to production, we combine game design thinking,
              modern technology, and storytelling to create experiences that are
              not just fun, but purposeful and memorable.
            </p>
            <p>
              Whether you already have an idea or you’re starting from a blank
              page, we help you shape it into something people genuinely love to
              play.
            </p>
          </div>
        </div>
      </div>
      <figure className="">
        <div ref={frameRef} className="frame">
          <div className="frame-canvas">
            <div
              ref={videoRef}
              className="size-full m-auto top-0 left-0"
              data-video-options='{"attributes":["autoplay","muted","loop","playsinline"]}'
            >
              <video
                className="size-full m-auto top-0 left-0 object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/hero.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
}

export default Hero;
