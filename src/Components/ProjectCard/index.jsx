import { CursorArrowRaysIcon } from '@heroicons/react/24/solid'
import './card.css'

const ProjectCard = (props) =>{
  return (
    <div className=' flex flex-col justify-center items-center gap-10'>
      <img src={props.img} alt={props.title} className='card-project w-[100%] min-w-[288px] max-w-[450px]  rounded-xl '/>
      <div className='w-[100%] flex flex-col gap-5'>
        <h2 className='font-bold text-center'>{props.title}</h2>
        <p className='text-[2rem]'>{props.description}</p>
        <details className='text-[2rem]'>
          <summary>Desarrollado con:<CursorArrowRaysIcon className='w-10 h-10 inline'/></summary>
          {props.detail}

        </details>
      </div>
      <a href={props.link} target='_blank'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-3xl py-2 px-3 text-[2.2rem]'>Visitar WebSite</button></a>
      
    </div>
  )
}
export {ProjectCard}