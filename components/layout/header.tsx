"use client";
import gsap from "gsap";
import Link from "next/link";
import { Button } from "../ui/button";
import { LogoFull } from "../ui/logo";
import { useLayoutEffect, useRef } from "react";

const menuItems = [
  { title: "Projects", link: "#our-products" },
  { title: "Company", link: "" },
  { title: "Newsroom", link: "" },
];

export default function Header() {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const header = headerRef.current;

    if (!header) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        header,
        { opacity: 0, top: -20 },
        {
          top: 20,
          opacity: 1,
          delay: 1,
          duration: 0.6,
          ease: "power3.out",
        },
      );
    }, header);

    return () => ctx.revert();
  }, []);
  return (
    <header className="header">
      <div
        ref={headerRef}
        className="h-13.5 z-100 fixed top-5 inset-x-0 mx-auto max-w-screen-2xl w-[calc(100%-40px)] sm:w-full bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-2xl"
      >
        <div className="size-full relative overflow-visible inline-flex items-center justify-between gap-x-5 px-3 md:px-12">
          <div className="inline-flex flex-[0_0_auto] justify-start">
            <Link href="/">
              <LogoFull className="h-6 md:h-8 w-auto text-white &>path:text-white" />
            </Link>
          </div>
          <nav className="hidden md:inline-flex flex-[0_0_auto] justify-end items-center text-right w-auto pointer-events-auto bg-white rounded-md backdrop-blur-md p-1 pl-3 border-[.25px] border-accent  gap-x-3 h-13.5">
            <ul className="inline-flex gap-x-px list-none">
              {menuItems.map((item, i) => {
                return (
                  <li key={i}>
  {item.link.startsWith('#') ? (
    <a
      href={item.link}
      className="px-4.25 py-2 rounded-lg bg-transparent hover:bg-background font-[calc(max(.75rem,min(calc(.75rem+.002*(100vw-27.5rem)),.875rem)))] inline-flex items-center transition-all duration-500 ease-in-out uppercase text-sm tracking-tight"
      aria-label={item.title}
      data-label={item.title}
      target="_self"
      onClick={e => {
        e.preventDefault();
        const target = document.querySelector(item.link);
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY,
            behavior: 'smooth',
          });
        }
      }}
    >
      <span>{item.title}</span>
    </a>
  ) : (
    <Link
      href={item.link}
      className="px-4.25 py-2 rounded-lg bg-transparent hover:bg-background font-[calc(max(.75rem,min(calc(.75rem+.002*(100vw-27.5rem)),.875rem)))] inline-flex items-center transition-all duration-500 ease-in-out uppercase text-sm tracking-tight"
      aria-label={item.title}
      data-label={item.title}
      target="_self"
    >
      <span>{item.title}</span>
    </Link>
  )}
</li>
                );
              })}
            </ul>
            <Button className="h-full rounded-l-full rounded-tr-full rounded-br-md bg-black">
              Work with Us
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
