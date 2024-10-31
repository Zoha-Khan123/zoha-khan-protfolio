import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

// Define tooltip items with image paths and tooltip text
const tooltipItems = [
  { Icon: "/html.png", tooltipText: "HTML" },
  { Icon: "/css.png", tooltipText: "CSS" },
  { Icon: "/javascript.png", tooltipText: "Javascript" },
  { Icon: "/typescript.png", tooltipText: "Typescript" },
  { Icon: "/tailwind-1.png", tooltipText: "Tailwind" },
  { Icon: "/next-js.png", tooltipText: "Next.JS" },
  { Icon: "/firebase.png", tooltipText: "Firebase" },
  { Icon: "/git.png", tooltipText: "Git" },
  { Icon: "/node-js.png", tooltipText: "Node.JS" },
];

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-2">
        {tooltipItems.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <div className="flex cursor-pointer">
                <Image
                  src={item.Icon}
                  width={300}
                  height={300}
                  alt={item.tooltipText}
                  className="w-8 h-8"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.tooltipText}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
