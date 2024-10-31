import Link from "next/link";
import { Logo, Moon, Phone, Sun, Whatsapp, White } from "../components/svgs";

export default function Navbar() {
  return (
    <nav className="pointer-events-none fixed top-0 left-0 right-0 flex justify-between items-center my-2 px-5 max-w-screen-xl mx-auto w-full bg-transparent z-50 mb-10">
      <Link className="pointer-events-auto" href="#navbar-logo">
      <White/>
      </Link>
      <div className="pointer-events-auto flex justify-between gap-4">
        <Sun />
        <Moon />
        <Phone />
        <Whatsapp />
      </div>
    </nav>
  );
}
