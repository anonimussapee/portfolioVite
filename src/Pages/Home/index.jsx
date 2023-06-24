import { ImageBox } from '../../Components/ImageBox '
import { ImageCircle } from '../../Components/ImageCircle'
import { Layout } from '../../Components/Layout'
import foto from '../../assets/mifoto2.jpg'
import skills from '../../assets/skills.png'
import {CursorArrowRaysIcon} from '@heroicons/react/24/solid'
import './home.css'

const Home = () => {
return (
  <Layout >
    <section className='max-w-[900px] lg:py-20 my-auto flex gap-8 items-center ss:flex-col lg:flex-row lg:gap-10'>
      <div className='flex flex-col  gap-6 items-center ss:w-[255px] lg:w-[330px] '>
        <div className='w-auto h-auto dark:border-white border-cyan-500  border-[3px] rounded-full '  ><ImageCircle image={foto} alt={"my photo"} size={''} key={'myfoto'} classes={'mifoto'}/></div>
      
      <h1 className='text-[2.3rem] font-semibold text-center'>Hola soy John Córdova Frontend Developer</h1> 
      </div>
      <div className='w-[90%] text-[1.7rem]  text-center flex flex-col gap-2'>
        <p >
          Estudio Desarrollo Web<strong> full stack con JavaScript</strong>  en la Escuela de <strong>Platzi. </strong> 
        </p>
        <p>
          Ademas adquirí mucho conocimiento en diferentes areas de programación desde el día que conocí la plataforma.
        </p>
        <p>Hoy en día me encuentro en el <strong>desarrollo de un proyecto personal</strong> para conectarme a un satélite que se encuentra en órbita en este momento el <strong><a href="#platzisat">PlatziSat-1 </a></strong><CursorArrowRaysIcon className='w-10 h-10 inline'/></p>
      </div>

    </section>
   
    <section className=' my-auto flex flex-col gap-10 w-[100%] h-auto text-center py-20 dark:bg-gray-800 text-[1.7rem] items-center'>
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
        <div className='container-cubes ss:w-0 ss:h-0 ss:hidden  lg:w-auto lg:h-auto lg:visible'>
          <div className='cube '>
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
        <h2 className='text-[2.2rem] font-extrabold'>Tengo conocimientos en:</h2>
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
        
      </div>
     
    

    </section>
    
  </Layout>
)
}

export {Home}