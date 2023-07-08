import { Link, Navigate } from 'react-router-dom'

const Thanks = () => {
  return (
    <div className='react-bg w-[90%] max-w-[500px] h-[60vh] text-[2.3rem] flex flex-col justify-end items-center gap-4 pb-16 '>
      <h1>
        Gracias por completar el formulario, me pondre en contacto contigo inmediatamente.
      </h1>
      <p className='text-[2rem]'>mientras te invito a observar mis proyectos personales</p>
      <Link to='/projects'>
        <button  className='text-[2rem] bg-gray-500 dark:bg-blue-950 py-2 px-5 rounded-lg'>Mirar Proyectos</button>
      </Link>
    </div>
  )
}

export {Thanks}