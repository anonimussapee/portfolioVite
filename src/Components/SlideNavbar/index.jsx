import {  NavLink } from 'react-router-dom'


const SlideNabvar = () => {
  const activeClass = 'underline underline-offset-8';

  return (
    <div className='w-[250px] fixed top-[60px] right-0 bottom-0 dark:bg-blue-950 bg-white dark:text-white  text-[1.8rem] font-bold z-20  sm:hidden s:mw-0'>
      <ul className='p-10 flex flex-col gap-5'>

        <NavLink to='/blog' className={({isActive}) => isActive ? activeClass : undefined}>
        <li>Cursos</li>
        </NavLink>
        <NavLink to='/proyectos' className={({isActive}) => isActive ? activeClass : undefined}>
        <li>Proyectos</li>
        </NavLink>
        <NavLink to='/contact' className={({isActive}) => isActive ? activeClass : undefined}>
        <li>Contactame</li>
        </NavLink>
      </ul>
    </div>
  )
}
export {SlideNabvar}