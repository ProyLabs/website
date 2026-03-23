import Image from "next/image";
import React from "react";

export default function OurProducts() {
  const products = [
    {
      id: "01",
      title: "Numeri",
      description:
        "A fast-paced higher-or-lower game inspired by Bible knowledge and storytelling.",
      backgroundColor: "#7063ED",
      color: "#FFFFFF",
      image: "/numeri.svg",
      url: "https://numeri.proylabs.com",
    },
    {
      id: "02",
      title: "Numeri: The Card Game",
      description:
        "A strategic card game adaptation of our original game, Numeri, designed for tabletop play.",
      backgroundColor: "#FC7F3F",
      color: "#FFFFFF",
      image: "/numeri-card.svg",
    },
    {
      id: "03",
      title: "Umati",
      description:
        "A real-time multiplayer party game platform where players join shared lobbies and experience a variety of social mini-games together.",
      backgroundColor: "#0B0A0E",
      color: "#FFFFFF",
      image: "/umati.svg",
      url: "https://umati.proylabs.com",
    },
  ];

  return (
    <section
      className="bg-white w-full h-auto relative z-1 block"
      id="our-products"
    >
      <div className="p-12">
        <div className="flex flex-col justify-between pt-12 pb-11 w-full mx-auto max-w-screen-2xl">
          <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-start gap-8">
            <div className="uppercase font-semibold text-sm px-4 py-2 rounded bg-primary/10 text-primary w-fit backdrop-blur-2xl">
              Our Projects
            </div>
            <div className="border-t border-secondary-foreground/20 pt-12">
              <h3 className="text-balance text-5xl md:text-6xl leading-none text-primary mb-6">
                Combining play, technology, creativity, and community into{" "}
                <span className="text-secondary-foreground">
                  engines of connection.
                </span>
              </h3>
              <div className="text-base sm:text-lg space-y-4 text-secondary-foreground max-w-3xl">
                <p className="">
                  We build original game experiences designed to bring people
                  closer, spark meaningful interaction, and make play more
                  engaging in everyday life.
                </p>
                <p className="">
                  Our projects explore the intersection of technology,
                  community, and creativity, delivering games that are easy to
                  start, fun to share, and built to grow with their audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-12 border-t border-secondary-foreground/20"
            style={{
              backgroundColor: product.backgroundColor,
              color: product.color,
            }}
          >
            <div className="mb-8 justify-between items-stretch flex">
              <Image
                width={114}
                height={114}
                src={product.image}
                alt={product.title}
                className="size-14 md:size-28.5 mb-4"
              />
              <p className="font-mono">{product.id}.</p>
            </div>
            <h4 className="text-2xl mb-2">{product.title}</h4>
            <p className="text-sm mb-4">{product.description}</p>
            {product.url && (
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:underline group transition-all ease-in-out duration-300"
              >
                Explore{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform  ease-in-out duration-300"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
