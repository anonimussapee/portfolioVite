import { ImageCircle } from '../../Components/ImageCircle'
import foto from '../../assets/mifoto2.jpg'
import {CursorArrowRaysIcon} from '@heroicons/react/24/solid'
import './home.css'
import { SmsTyping } from '../../Components/Typing'
import { ContactForm } from '../../Components/ContactForm'
import { Link } from 'react-router-dom'
import { scrollToIndex } from '../../Components/ScrollToIndex'

const Home = () => {
 
// typing
const smss = ['  Como ya viste he aprendido varios lenguajes de programación y voy en camino a ser FULL STACK CON JAVASCRIPT ', '  Contactame para realizar proyectos que tengas en mente ']
// end typing

return (
  <>
    
    <section className='w-[100%] max-w-[900px] pb-20 lg:py-20 my-auto flex gap-8 items-center ss:flex-col lg:flex-row lg:gap-10'>
      <div className='flex flex-col  gap-6 items-center ss:w-[255px] lg:w-[330px] '>
        <div className='w-auto h-auto dark:border-white border-cyan-500  border-[3px] rounded-full '  ><ImageCircle image={foto} alt={'my photo'} size={''} key={'myfoto'} classes={'mifoto'}/></div>
      
      <h1 className='w-[320px] text-[2.5rem] font-semibold text-center'>Hola soy John Córdova Frontend Developer</h1> 
      </div>
      <div className='w-[90%] text-[1.8rem]  text-center flex flex-col gap-2'>
        <p >
          Estudio Desarrollo Web<strong> full stack con JavaScript</strong>  en la Escuela de <strong>Platzi. </strong> 
        </p>
        <p>
          Ademas adquirí mucho conocimiento en diferentes areas de programación desde el día que conocí la plataforma.
        </p>
        <p>Hoy en día me encuentro en el <strong>desarrollo de un proyecto personal</strong> para conectarme a un satélite que se encuentra en órbita en este momento el <strong className='relative'><Link to='/satelite' onClick={scrollToIndex}>PlatziSat-1 </Link></strong></p>
        <Link to='/satelite' onClick={scrollToIndex}>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[250px] rounded-xl focus:outline-none focus:shadow-outline relative'>Mirar elaboracion de la estación terrestre<CursorArrowRaysIcon className='dark:text-white text-black inline clickme'/> </button>
        </Link>
      </div>
    </section>
   
    <section className=' my-auto flex flex-col gap-10 w-[100%] h-auto text-center py-20 dark:bg-gray-800 text-[1.8rem] items-center'>
      <div className='flex flex-row items-center ss:w-auto lg:w-[50%] justify-between'>
      <div className='container-cubes'>
          <div className='cube '>
            <div className='cube-face front border-[3px]  border-gray-400 bg-white'></div>
            <div className='cube-face back border-[3px]  border-gray-400 bg-white'></div>
            <div className='cube-face right border-[3px]  border-gray-400 bg-white'></div>
            <div className='cube-face left border-[3px]  border-gray-400 bg-white'></div>
            <div className='cube-face top border-[3px]  border-gray-400 bg-white'></div>
            <div className='cube-face bottom border-[3px]  border-gray-400 bg-white'></div>
          </div>
        </div>
        <div className='container-cubes cube2 lgmax:hidden '>
          <div className='cube cube2_1'>
            <div className='cube-face front border-[3px]  border-gray-400 bg-white'></div>
            <div className='cube-face back border-[3px]  border-gray-400 bg-white'></div>
            <div className='cube-face right border-[3px]  border-gray-400 bg-white'></div>
            <div className='cube-face left border-[3px]  border-gray-400 bg-white'></div>
            <div className='cube-face top border-[3px]  border-gray-400 bg-white'></div>
            <div className='cube-face bottom border-[3px]  border-gray-400 bg-white'></div>
          </div>
        </div>
      </div>
       
      <div className='w-[100%] flex flex-col items-center gap-10 relative '>
        <h2 className='text-[2.3rem] font-extrabold'>Tengo conocimientos en:</h2>
        <ul className='flex flex-col lg:flex-wrap gap-4 list-disc text-start w-[80%] h-auto lg:w-[920px] lg:h-[300px] '>
          <li>Html.</li>
          <li>Css.</li>
          <li >JavaScript.</li>
          <li >React.js.</li>
          <li>Vite.js.</li>
          <li>NPM manejo de dependencias.</li>
          <li >Webpack.</li>
          <li>Maquetación web con Responsive Desing(Mobile first).</li>
          <li>GitHub.</li>
          <li>MySql.</li>
          <li>Tiendas online con Wordpress y pagos online con Woocommerce.</li>
          <li>Google Analitics.</li>
          <li>Php(Basico).</li>
          <li>Java.</li>
          <li>C.</li>
        </ul>
        <Link to='/projects' onClick={scrollToIndex}>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[250px] rounded-xl focus:outline-none focus:shadow-outline'>Mirar proyectos</button>
        </Link>
      </div>
     
    

    </section>
  
    <section className='sms-bg flex flex-col w-[100%] h-[460px] text-center p-[20px] text-[2.5rem] text-white font-extrabold justify-center items-center' >
      <SmsTyping mensajes={smss}/>
    </section>

    <section className=' my-auto flex flex-col gap-10 w-[100%] h-auto text-center py-20  dark:bg-gray-800 font-extrabold justify-center items-center' >
      <ContactForm/>
    </section>
  </>
  
)
}

export {Home}