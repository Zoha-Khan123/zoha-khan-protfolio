import Link from "next/link";
import Image from "next/image";
import {
  Arrow,
  Email,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "../components/svgs";
import MatterCanvas from "../components/matter/matters";

export default function Main() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <main className="flex justify-between items-center h-screen font-['Nunito'] relative z-10">
        <div className="hidden sm:block">
          <MatterCanvas />
        </div>
        <div className="max-w-screen-xl mx-auto w-full">
          <div className="flex justify-center items-center h-auto">
            <Image
              src="/blue-logo.png"
              width={200}
              height={200}
              alt="logo"
              className="pointer-events-none w-[250px] sm:w-[420px] h-auto absolute top-40 sm:top-10"
            />
          </div>
          <div className="relative ml-5 sm:ml-20">
            <h1 className="pointer-events-none text-3xl sm:text-5xl font-['Spartan']">
              Zoha Khan
            </h1>
            <p className="pointer-events-none font-['Merriweather'] text-lg italic my-4">
              Full Stack Developer
            </p>
            <button className="bg-[#4595eb] py-2 px-6 rounded font-extrabold text-base bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group">
              About Me
              <Arrow className="absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-8 ease-in-out duration-100" />
            </button>
          </div>
        </div>

        {/* Social Media Links List */}
        <div>
          <ul className="flex flex-col gap-5 text-[#b0b2c3] m-4">
            <li>
              <Link
                href="https://www.linkedin.com/in/zoha-khan-developer/"
                target="_blank"
              >
                <Linkedin className="w-8 hover:text-white" />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/dashboard" target="_blank">
                <Github className="w-8 hover:text-white" />
              </Link>
            </li>
            <li>
              <Link href="mailto:zohakhan11004@gmail.com" target="_blank">
                <Email className="w-8 hover:text-white" />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/" target="_blank">
                <Instagram className="w-8 hover:text-white" />
              </Link>
            </li>
            <li>
              <Link href="https://www.twitter.com/" target="_blank">
                <Twitter className="w-8 hover:text-white" />
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <footer className="z-10 relative flex justify-center -mt-28 after:content-[''] after:absolute after:w-[2px] after:h-6 after:top-[95px] after:bg-[#4444]">
        {/* Latest Button */}
        <button className="bg-[#4595eb] py-2 px-6 rounded font-extrabold text-base bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group">
          <Link href="#latest-work">
            Latest Work
            <Arrow className="absolute rotate-90 left-1/2 -translate-x-1/2 top-10 group-hover:top-11 ease-in-out duration-100" />
          </Link>
        </button>
      </footer>
    </div>
  );
}
