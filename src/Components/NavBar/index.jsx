import {  NavLink } from 'react-router-dom'
import './NavBar.css'
import {MoonIcon, SunIcon} from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ContextTheme } from '../Context/themes'

const NavBar = () => {

  let contextTheme = useContext(ContextTheme);

  let themeIconRender

  if(contextTheme.themeState=== true){
    document.documentElement.classList.add('dark')
    themeIconRender = <SunIcon className='w-10 h-10'></SunIcon>;
  }else{
    document.documentElement.classList.remove('dark')
    themeIconRender = <MoonIcon className='w-10 h-10'></MoonIcon>;
  }
  

  const activeClass = 'underline underline-offset-8';

  return (
    <nav className='dark:bg-blue-950 bg-white dark:text-white ss:text-[1.3rem] sm:text-[1.8rem] font-bold z-20'>
      <ul>
        <NavLink to='/' className={({isActive}) => isActive ? activeClass : undefined}>
        <li className='nav-main--logo'><span className='main-logo img'></span><span className='inline-block'>Inicio</span></li>
        </NavLink>
      </ul>
      <ul className='flex flex-row items-center sm:gap-6'>
      <NavLink to='/blog' className={({isActive}) => isActive ? activeClass : undefined}>
        <li>Blog</li>
        </NavLink>
        <NavLink to='/proyectos' className={({isActive}) => isActive ? activeClass : undefined}>
        <li>Proyectos</li>
        </NavLink>
        <NavLink to='/contact' className={({isActive}) => isActive ? activeClass : undefined}>
        <li>Contactame</li>
        </NavLink>
        <li onClick={()=>{
          
          contextTheme.setThemeState(!contextTheme.themeState)

          contextTheme.darkTheme.save(!contextTheme.themeState)
        }}> {themeIconRender}</li>
      </ul>
    </nav>
  );

}

export {NavBar};