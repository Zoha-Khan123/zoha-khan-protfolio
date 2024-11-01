import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Arrow } from "../components/svgs";
import Image from "next/image";
import { TooltipDemo } from "../components/tooltip/tooltip";

export default function AlertDialogDemo() {
  const tags = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Tailwind",
    "Next.js",
    "Firebase",
    "Git",
    "Node.js",
  ];
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#4595eb] py-2 px-6 rounded font-extrabold text-base bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative border-none hover:scale-110 ease-in-out duration-100 group"
        >
          About Me
          <Arrow className="absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-8 ease-in-out duration-100" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-[#111111] w-[90%] h-auto sm:w-[80%] p-4 md:p-8 rounded-lg border-[#4595eb] border-4">
        <div className="flex justify-end">
          <AlertDialogCancel className="bg-[#111111] border-2 border-[#4595eb] w-12 h-12 rounded-full">
            <X className="w-4 h-4" />
          </AlertDialogCancel>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6 px-2 sm:px-4">
          {/* Left */}
          <div className="left w-full md:w-[50%] space-y-4">
            <h1 className="text-2xl md:text-3xl text-[#4595eb] font-bold">
              About Me
            </h1>
            <p className="text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              tenetur ad qui debitis ut sunt voluptates sit soluta eaque? Harum
              non, est accusantium quis cumque sit quam tempora voluptate vitae.
            </p>
            <ul className="flex flex-wrap mt-2 gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="border-2 rounded-full w-fit px-2 text-xs md:text-sm"
                >
                  #{tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="flex justify-center items-center w-full md:w-[50%]">
            <Image
              src="/coder.svg"
              width={300}
              height={300}
              alt="aboutImage"
              className="w-full max-w-[250px] md:max-w-[400px]"
            />
          </div>
        </div>

        {/* Skills */}
        <div className="px-2 sm:px-4 sm:mt-6">
          <h1 className="text-2xl md:text-3xl text-[#4595eb] font-bold">
            Skills
          </h1>
          <TooltipDemo />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}