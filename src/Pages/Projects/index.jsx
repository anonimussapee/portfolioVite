import { ProjectCard } from '../../Components/ProjectCard'

const Projects = () => {
  return (
    <section className=' w-[90%] max-w-[600px] h-auto text-[2.3rem] flex flex-col justify-end items-center gap-4 pb-16 '>
      <h1>
       Estos son mis Proyectos
      </h1>
      <ProjectCard link='https://prlov.netlify.app/'/>

      <ProjectCard link='https://storemlo.netlify.app/'/>

      <ProjectCard link='https://punlla.netlify.app/'/>

      <ProjectCard link='https://viteplatzi.netlify.app/'/>
     
    </section>
  )
}

export {Projects}