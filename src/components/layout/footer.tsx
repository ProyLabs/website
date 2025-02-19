import Link from "next/link";
import { LogoFull } from "../shared/logo";

export const Footer = () => {
  return (
    <div className="py-12 px-10 sm:px-28 lg:px-10 xl:px-28  lg:pt-36 pb-24 bg-dark-2 mt-5 rounded-t-[20px]">
      <div className="flex flex-col lg:flex-row pb-28 justify-between items-start xl:w-9/12">
        <LogoFull className="h-[40px] text-white" />

        <div className="flex text-base sm:text-xl justify-between w-full mt-14 lg:mt-0 lg:w-7/12">
          <div className="text-white inline-flex flex-col space-y-5">
            <Link target="_blank" href={"/blog"}>
              Blog
            </Link>
            {/* {brands.map((brand) => (
              <Link key={brand.id} to={`/brand/${brand?.slug}`}>
                {brand.name}
              </Link>
            ))} */}
          </div>
          <div className="text-white inline-flex flex-col space-y-5">
            <p className="font-semibold">Contact us</p>
            <a href="mailto:hello@chowcentral.com">hello@proylabs.co </a>
            <a href="tel:2340000000000">+234 000 000 0000</a>
          </div>
        </div>
      </div>

      <div className="pt-10 flex flex-col lg:flex-row text-white border-t border-white border-opacity-50 text-xs sm:text-base justify-between">
        <p className="lg:mr-60">
          ©{new Date().getFullYear()} Proy Interactive Labs All rights reserved.
        </p>
        <div className="flex items-center space-x-5">
          <Link href="/privacy-policy">
            <p className="mt-3.5 lg:mt-0">Privacy</p>
          </Link>
          <Link href="/terms-and-conditions">
            <p className="mt-3.5 lg:mt-0">Terms & Conditions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
