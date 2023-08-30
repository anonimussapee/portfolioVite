import {  NavLink } from 'react-router-dom'
import './NavBar.css'
import {Bars3Icon, MoonIcon, SunIcon} from '@heroicons/react/24/solid'
import { useContext, useState } from 'react'
import { ContextTheme } from '../Context/themes'
import { SlideNabvar } from '../SlideNavbar'
import { scrollToIndex } from '../ScrollToIndex'

const NavBar = () => {

  let contextTheme = useContext(ContextTheme);
  const [slidebar, setSlidebar] = useState(false)

  let themeIconRender

  if(contextTheme.themeState=== true){
    document.documentElement.classList.add('dark')
    themeIconRender = <SunIcon className='w-14 h-14'></SunIcon>;
  }else{
    document.documentElement.classList.remove('dark')
    themeIconRender = <MoonIcon className='w-12 h-12'></MoonIcon>;
  }
  

  const activeClass = 'underline underline-offset-8';

  return (
    <>
    <nav className='dark:bg-blue-950 bg-white dark:text-white  text-[1.7rem] font-bold z-20 '>
      <ul>
        <NavLink onClick={scrollToIndex} to='/' className={({isActive}) => isActive ? activeClass : undefined}>
        <li className='nav-main--logo '><span className='main-logo img'></span><span className='inline-block'>Inicio</span></li>
        </NavLink>
      </ul>
      <ul className='flex flex-row items-center sm:gap-6'>
      <NavLink onClick={scrollToIndex} to='/satelite' className={({isActive}) => isActive ? activeClass : undefined}>
        <li className='smMax:hidden smMax:w-0 smMax:h-0'>Satélite</li>
        </NavLink>
      <NavLink onClick={scrollToIndex} to='/blog' className={({isActive}) => isActive ? activeClass : undefined}>
        <li className='smMax:hidden smMax:w-0 smMax:h-0'>Cursos</li>
      </NavLink>
      <NavLink onClick={scrollToIndex} to='/proyectos' className={({isActive}) => isActive ? activeClass : undefined}>
       <li className='smMax:hidden smMax:w-0 smMax:h-0'>Proyectos</li>
      </NavLink>
      <NavLink onClick={scrollToIndex} to='/contact' className={({isActive}) => isActive ? activeClass : undefined}>
       <li className='smMax:hidden smMax:w-0 smMax:h-0'>Contactame</li>
      </NavLink>
      <li onClick={()=>{
        
        contextTheme.setThemeState(!contextTheme.themeState)

        contextTheme.darkTheme.save(!contextTheme.themeState)
      }}> {themeIconRender}</li>
      <li className='sm:hidden sm:w-0 sm:h-0'>
        <Bars3Icon className='w-14 h-14' onClick={()=>{
          setSlidebar(!slidebar)
        }}/>
        </li>
      </ul>
    </nav>
    {
      slidebar &&
      <SlideNabvar/>
    }
    </>
  );
 

}

export {NavBar};