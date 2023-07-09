import { Link, Navigate } from 'react-router-dom'

const Thanks = () => {
  return (
    <div className='react-bg w-[90%] max-w-[500px] h-[60vh] text-[2.3rem] flex flex-col justify-end items-center gap-4 pb-16 '>
      <h1>
        Gracias por completar el formulario, me pondre en contacto contigo inmediatamente.
      </h1>
      <p className='text-[2rem]'>mientras te invito a observar mis proyectos personales</p>
      <Link to='/projects/#'>
        <button  className='bg-blue-500 text-[2.2rem] hover:bg-blue-700 text-white font-bold py-2 px-4 w-[250px] rounded-xl focus:outline-none focus:shadow-outline'>Mirar Proyectos</button>
      </Link>
    </div>
  )
}

export {Thanks}