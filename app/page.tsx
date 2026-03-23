import Hero from "@/components/pages/landing/hero";
import OurProducts from "@/components/pages/landing/our-products";

export default function Home() {
  return (
    <div className="-mb-10  bg-background overflow-hidden relative z-2">
      <Hero />
      <OurProducts />
    </div>
  );
}
