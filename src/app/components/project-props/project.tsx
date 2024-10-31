
import Image from "next/image";
import { projectDetail } from "../project-data/project-data";
import { log } from "console";
import Link from "next/link";
import { LinkArrow, Whatsapp } from "../svgs";

interface ProjectType {
  imageUrl: string;
  projectNum: string;
  projectName: string;
  description: string;
  tecnologies:string[];
  color: string; 
  vercelUrl:string;
}

const Project = ({ project , index }: { project: ProjectType; index: number  }) => {

  const textColor:string[] = ['text-green-500', 'text-blue-800', 'text-green-400', 'text-blue-200','text-green-300'];
  const bgColor:string[]=['bg-green-500', 'bg-blue-800', 'bg-green-400', 'bg-blue-200','bg-green-300'];
  const hoverColor:string[]=['text-white','text-white','text-black','text-black','text-black'];
  const borderColor:string[]=['border-green-500', 'border-blue-800', 'border-green-400', 'border-blue-200','border-green-300']

  return (
    
    <div className="flex flex-col sm:flex-row gap-24 mt-24 sm:mt-28 w-full lg:w-[85%] h-full m-auto relative">
      {/* Left Side */}
      <div className="w-full sm:w-[50%]">
         {/* Connecting Line */}
         <div className="sm:h-[1px] left-1/4 right-1/2  bg-[#1788ae] absolute top-1/2"></div>
         {/* Round Circle */}
         <div className={`sm:w-4 h-4 rounded-full sm:border-[3px] ${borderColor[index]} absolute left-1/2  top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100`}></div>
         <Link href={project.vercelUrl} target="blank" className="flex justify-center w-full relative">
        <div className="relative group hover:scale-105 sm:hover:scale-110 ease-in-out duration-100">
       <span className={`flex ${bgColor[index]} ${hoverColor[index]} font-extrabold p-2 absolute -bottom-14 sm:relative sm:top-10 left-1/2 -translate-x-1/2 sm:bottom-auto translate-y-0 rounded w-max items-center gap-1 after:content-[' '] sm:after:w-5 after:h-5 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2  sm:group-hover:-top-5 ease-jump duration-200`}>
       {project.projectName}<LinkArrow />
       </span>
        <Image src={project.imageUrl} width={400} height={400} alt="project-image" className="relative drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"></Image>
        </div>
       </Link>
         </div>
        
      
      {/* Right Side */}
      <div className="w-full px-8 md:px-0 mt-8 sm:w-[50%] ">
        {/* Conditional text-color */}
        <h1 className={`text-3xl font-bold ${textColor[index]}`}>
        {project.projectNum}
        </h1>

        {/* Array text-color */}
        <h2 className={`${textColor[index]} text-2xl font-bold`}>{project.projectName}</h2>

        {/* description */}
        <p>{project.description}</p>
         
        {/* Technologies */}
        <div className="flex flex-wrap mt-2 gap-2">
        {project.tecnologies.map((technology) => (
          <span key={technology} className={`border-2 rounded ${borderColor[index]} w-fit px-4 py-2`}>
            {technology}
          </span>
        ))}
      </div>
 </div>
      </div>


    
    
  );
};

export default Project;
