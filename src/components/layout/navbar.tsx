"use client";
import Link from "next/link";
import { Logo, LogoFull } from "../shared/logo";
import React from "react";
import { cn } from "@/lib/utils";

const navlinks = [
  { name: "Company", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact us", href: "/contact-us" },
  { name: "FAQs", href: "/faqs" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = React.useState(false);

  React.useEffect(() => {
    if (navOpen && window.innerWidth < 1024) {
      document.body.classList.add("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [navOpen]);

  return (
    <>
      <div
        className={cn(
          `inset-0 bg-white lg:hidden fixed z-50 transition-element2`,
          navOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="m-2.5 sm:m-5 bg-[#F5F6FC] rounded-[10px] sm:rounded-[20px] h-[calc(100%-20px)] sm:h-[calc(100%-40px)] overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between py-4 px-4 sm:px-12">
              <Link href="/">
                <Logo className="lg:h-[40px] h-[40px]" />
              </Link>

              <button
                className="lg:hidden rounded-full text-white bg-black p-3 aspect-square"
                onClick={() => setNavOpen((prev) => !prev)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="7.5"
                    width="14"
                    height="1"
                    rx="0.5"
                    style={{
                      transformOrigin: "center",
                      transition: "160ms var(--ease-out-quad)",
                      transform: "rotate(45deg)!important",
                    }}
                  ></rect>
                  <rect
                    x="1"
                    y="7.5"
                    width="14"
                    height="1"
                    rx="0.5"
                    style={{
                      transformOrigin: "center",
                      transition: "160ms var(--ease-out-quad)",
                      transform: "rotate(-45deg)!important",
                    }}
                  ></rect>
                </svg>
              </button>
            </div>
            <div className="mt-10 lg:hidden px-6">
              <div className="py-6 border-t border-b border-black border-opacity-25">
                <Link href={"/"} onClick={() => setNavOpen((prev) => !prev)}>
                  Company
                </Link>
              </div>
              <div className="border-b border-black border-opacity-25 py-6">
                <p className="text-xs text-[#7064ed] font-semibold">Projects</p>
                <Link
                  href={"/projects/numeri"}
                  className="mt-4 block"
                  onClick={() => setNavOpen((prev) => !prev)}
                >
                  Numeri
                </Link>
                <Link
                  href={"/projects/numeri-cards"}
                  className="mt-4 block"
                  onClick={() => setNavOpen((prev) => !prev)}
                >
                  Numeri Cards
                </Link>
              </div>
              <div className="border-b border-black border-opacity-25 py-6">
                <Link
                  href={"/faqs"}
                  onClick={() => setNavOpen((prev) => !prev)}
                >
                  FAQs
                </Link>
              </div>
              <div className="border-b border-black border-opacity-25 py-6">
                <Link
                  href={"/blog"}
                  onClick={() => setNavOpen((prev) => !prev)}
                >
                  Blog
                </Link>
              </div>
              <div className="border-b border-black border-opacity-25 py-6">
                <p className="text-xs text-[#7064ed] font-semibold">
                  Contact us
                </p>
                <Link
                  href={"tel:+23400000000000"}
                  className="mt-4 block"
                  onClick={() => setNavOpen((prev) => !prev)}
                >
                  +234 805 000 0000
                </Link>
                <Link
                  href={"mailto:hello@proylabs.co"}
                  className="mt-4 block"
                  onClick={() => setNavOpen((prev) => !prev)}
                >
                  hello@proylabs.co
                </Link>
              </div>
            </div>
            <div className="w-full flex justify-center mt-5">
              <div className="object-contain object-center">
                <svg
                  width="320"
                  height="95"
                  viewBox="0 0 320 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M170 30H235V87C235 91.4183 231.418 95 227 95H178C173.582 95 170 91.4183 170 87V30Z"
                    fill="#D5CEFE"
                  />
                  <path
                    d="M0 26C0 17.1634 7.16344 10 16 10H49C57.8366 10 65 17.1634 65 26V75H0V26Z"
                    fill="#7063ED"
                  />
                  <rect
                    x="85"
                    width="65"
                    height="65"
                    rx="32.5"
                    fill="#FC7F3F"
                  />
                  <rect
                    x="255"
                    y="10"
                    width="65"
                    height="65"
                    rx="8"
                    fill="#FCCCB3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="absolute lg:fixed lg:flex items-center justify-between py-4 px-4 sm:px-12 lg:bg-dark-2 rounded-[10px] sm:rounded-2xl z-40 right-2.5 left-2.5 sm:right-5 sm:left-5 top-2.5 sm:top-5">
        <div className="flex items-center justify-between">
          <Link href="/">
            <LogoFull className="lg:h-6 h-8 w-auto [&>path]:!fill-white " />
          </Link>

          <button
            className="lg:hidden rounded-lg bg-white p-3 aspect-square"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="7.5"
                width="14"
                height="1"
                rx="0.5"
                style={{
                  transformOrigin: "center",
                  transition: "160ms var(--ease-out-quad)",
                  transform: "translateY(-3.5px)",
                }}
              ></rect>
              <rect
                x="1"
                y="7.5"
                width="14"
                height="1"
                rx="0.5"
                style={{
                  transformOrigin: "center",
                  transition: "160ms var(--ease-out-quad)",
                  transform: "translateY(3.5px)",
                }}
              ></rect>
            </svg>
          </button>
        </div>
        <div className="text-white space-x-[75px] hidden lg:flex items-center">
          {navlinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
