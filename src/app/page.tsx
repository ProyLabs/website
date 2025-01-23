import HeroIllustration from "@/assets/hero-ill";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white p-4 md:p-8 flex justify-center items-center fixed">
      <main className="bg-[#F5F6FC] w-full h-full rounded-[2rem] md:rounded-[4rem] p-4 md:p-8 flex flex-col relative">
        <nav className="flex justify-between items-center">
          <div className="h-12 w-fit rounded-full bg-white p-2 flex gap-2 items-center">
            <div className="rounded-full aspect-square h-full flex items-center justify-center p-2">
              <svg height="24" viewBox="0 0 78 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_826_641" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="78" height="90">
                  <path d="M0 89.6V0H38.784C46.8053 0 53.7173 1.32267 59.52 3.968C65.3227 6.528 69.8027 10.24 72.96 15.104C76.1173 19.968 77.696 25.7707 77.696 32.512C77.696 39.168 76.1173 44.928 72.96 49.792C69.8027 54.656 65.3227 58.4107 59.52 61.056C53.7173 63.616 46.8053 64.896 38.784 64.896H20.736V55.552V89.6H0ZM20.736 57.856V48H37.632C44.032 48 48.8107 46.6347 51.968 43.904C55.1253 41.1733 56.704 37.376 56.704 32.512C56.704 27.5627 55.1253 23.7227 51.968 20.992C48.8107 18.2613 44.032 16.896 37.632 16.896H20.736V57.856Z" fill="#FCFCFC" />
                </mask>
                <g mask="url(#mask0_826_641)">
                  <rect x="-199.923" y="46.3726" width="162" height="216" rx="50.4" transform="rotate(-52.0131 -199.923 46.3726)" fill="#FC7F3F" />
                  <rect x="-101.168" y="-42.7192" width="135" height="180" rx="42" transform="rotate(-52.0131 -101.168 -42.7192)" fill="#D5CEFE" />
                  <rect x="-8.11304" y="47.7119" width="194.4" height="259.2" rx="60.48" transform="rotate(-52.0131 -8.11304 47.7119)" fill="#7063ED" />
                  <rect x="-39.9233" y="113.681" width="101.25" height="135" rx="31.5" transform="rotate(-52.0131 -39.9233 113.681)" fill="#FCCCB3" />
                </g>
              </svg>

            </div>

            <p className="pr-4 font-semibold">Proy Interactive Labs.</p>
          </div>
          <div className="flex gap-2">
            <div className="rounded-full h-12 w-12 md:w-40 bg-[#7063ED]" />
            <div className="rounded-xl md:rounded-full aspect-square h-12 w-12 bg-[#FC7F3F]" />
          </div>
        </nav>

        <div className="max-w-lg mt-12 md:mt-auto space-y-4">

          <h1 className="text-4xl md:text-7xl font-bold ">
            {/* Building Worlds That Inspire, Uplift, and Transform. */}
            Experience Entertainment with Eternal Impact.
          </h1>

          <p className="">
            Proylabs is a game development studio dedicated to creating immersive experiences that reflect the light of faith and the strength of Christian values.
          </p>
        </div>

        <div className="md:max-w-[50vw] md:absolute left-0 md:left-auto right-0 z-10 bottom-0 h-full w-full">
          <HeroIllustration />
        </div>

      </main>
    </div>
  );
}
