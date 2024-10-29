import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"

// Define tooltip items with image paths and tooltip text
const tooltipItems = [
  { imgSrc: "/html.png", tooltipText: "HTML" },
  { imgSrc: "/css.jpg", tooltipText: "CSS" },
  { imgSrc: "/typescript.png", tooltipText: "TypeScript" },
  { imgSrc: "/javascript.jpg", tooltipText: "JavaScript" },
  { imgSrc: "/tailwind.png", tooltipText: "Tailwind CSS" },
  { imgSrc: "/next.js.png", tooltipText: "Next.js" },
]

export function TooltipDemo() {
  return (
    <TooltipProvider>
         <div className="flex flex-wrap gap-4">
      {tooltipItems.map((item, index) => (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            <div className="flex p-2 cursor-pointer">
              <Image src={item.imgSrc} width={200} height={200} alt={item.tooltipText} className="w-6 h-6" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{item.tooltipText}</p>
          </TooltipContent>
        </Tooltip>
      ))}
      </div>
    </TooltipProvider>
  )
}
