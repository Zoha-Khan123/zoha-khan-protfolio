import React from 'react'
import { projectDetail } from '../components/project-data/project-data';
import Project from '../components/project-props/project';

const LatestWork = () => {
  return (
    <section id="latest-work" className='mt-2 relative overflow-hidden'>

    {/* Heading */}
    <div className="flex flex-col justify-center items-center relative">
    <h1 className='text-4xl text-[#1788ae] font-bold bg-[#111] relative z-10'>Latest Works</h1>
    <hr className='w-64 border-t-2 border-[#1788ae]'/>
    </div>

    
   
   {/* Projects */}
   <div className='mt-10'>

     {
      projectDetail.map((projects , index)=>{
        return(
          <Project key={projects.projectNum} project={projects} index={index}/>
        )
      })
     }
    </div>
    
    {/* Vertical Line */}
    <div className="sm:w-[2px] bg-[#1788ae] mx-auto absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
  </section>
  
  
  )
}

export default LatestWork;
