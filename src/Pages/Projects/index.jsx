import { ProjectCard } from '../../Components/ProjectCard'
import todos from '../../assets/projTodo.png'
import storemlo from '../../assets/projAcademlo.png'
import appWeather from '../../assets/projWeather.png'
import viteEc from '../../assets/viteEcommerce.png'
import shopiLab from '../../assets/projShopilab.png'
import projmp3 from '../../assets/projmp3.png'
import projEstado from '../../assets/projEstado.png'
import fmentorCards from '../../assets/fmentorCard.png'


const Projects = () => {
  return (
    <section className=' w-[90%] max-w-[600px] h-auto text-[2.3rem] flex flex-col justify-end items-center gap-20 pb-16 '>
      <h1 className='font-extrabold' >
       Estos son mis Proyectos
      </h1>
      <ProjectCard img={fmentorCards}
        title='Frontend Mentor Challenges'
        description='Esta app es un desafio de frontend mentor el cual tiene dos vistas una versión para Movil y otra versión para Desktop, estos retos mejoran mi manera de maquetar paginas web y tener mas experiencia en esos ambitos.'
        detail={<ul>
        <li>Vite.Js</li>
        <li>TailwindCss</li>
        <li>Librería React.Js</li>
        <li>JavaScript 74.4%</li>
        <li>Html 4.9%</li>
        <li>Css 20.7%</li>
        <li><a href="https://github.com/anonimussapee/f-mentors" target='_blank' className='text-blue-500 dark:text-[#1cff1c] underline underline-offset-8'>Ver en github</a></li>
        </ul>}
        link='https://fmentor.netlify.app/'
      />
      <ProjectCard img={projmp3}
        title='YouMp3'
        description='Esta app te permite descargar música totalmente gratis te invito a pobrarla! ,  la construi consumiendo una API ademas use la libreria de React. contiene loadings creados con css.  '
        detail={<ul>
        <li>Vite.Js</li>
        <li>TailwindCss</li>
        <li>Librería React.Js</li>
        <li>JavaScript 85.5%</li>
        <li>Html 4.4%</li>
        <li>Css 10.1%</li>
        <li><a href="https://github.com/anonimussapee/yoump3" target='_blank' className='text-blue-500 dark:text-[#1cff1c] underline underline-offset-8'>Ver en github</a></li>
        </ul>}
        link='https://ymp3.netlify.app/'
      />
      <ProjectCard img={todos}
       title='App Todos'
       description='Esta app te servira para tener tu lista de cosas por hacer en un solo lugar, solo ingresa a la app  creas un "Todo" y asi manten el orden en tu agenda. primer proyecto con React ademas hize uso de useContext, useState, useEffect, LocalStorage y realize los loading skeletons para simular el proceso de consumo de una Api.'
       detail={<ul>
        <li>Librería React.Js</li>
        <li>JavaScript 59.2%</li>
        <li>Html 4.5%</li>
        <li>Css 36.3%</li>
        <li><a href="https://github.com/anonimussapee/todos/tree/main" target='_blank' className='text-blue-500 dark:text-[#1cff1c] underline underline-offset-8'>Ver en github</a></li>
       </ul>}
        link='https://anonimussapee.github.io/todos/'
        />

      <ProjectCard img={storemlo}
       title='Storemlo'
       description='Esta app simula el proceso de compra en una tienda online, lo desarrolle mientras estudiaba en Academlo. este proyecto esta hecho 100% con Vanilla JavaScript y animaciones con Css.'
       detail={<ul>
        <li>JavaScript Vanilla 40.6%</li>
        <li>Html 23.8%</li>
        <li>Css 35.6%</li>
        <li><a href="https://github.com/anonimussapee/store/tree/main" target='_blank' className='text-blue-500 dark:text-[#1cff1c] underline underline-offset-8'>Ver en github</a></li>
       </ul>}
        link='https://storemlo.netlify.app/'
      />

      <ProjectCard img={appWeather}
        title='App Weather'
        description='Esta app te servira para saber el estado del clima en tu localidad, otros paises y alrededor de 200,000 ciudades en el mundo entero. debes permitirle el acceso a la ubicación para comenzar a usarlo.
        Fue realizado consumiendo una API.'
        detail={<ul>
         <li>Vite.Js</li>
         <li>Librería React.Js</li>
         <li>TailwindCss</li>
         <li>JavaScript 77.9%</li>
         <li>Html 3.3%</li>
         <li>Css 18.8%</li>
         <li><a href="https://github.com/anonimussapee/appweather" target='_blank' className='text-blue-500 dark:text-[#1cff1c] underline underline-offset-8'>Ver en github</a></li>
        </ul>}
         link='https://punlla.netlify.app/'
         />
      <ProjectCard img={viteEc}
        title='ViteEcommerce'
        description='Esta app simula el proceso de compra en un Ecommerce la navegacion con App Router Dom y el manejo del estado, ademas con este proyecto aprendi como puedo hacer enlaces dinámicos para mostrar productos, cosa que en ese entonces se me hacia desconocido, pero siempre buscaba en internet como conseguir ese objetivo.'
        detail={<ul>
         <li>Vite.Js</li>
         <li>TailwindCss</li>
         <li>Librería React.Js</li>
         <li>JavaScript 77.9%</li>
         <li>Html 3.3%</li>
         <li>Css 18.8%</li>
         <li><a href="https://github.com/anonimussapee/vite/tree/main" target='_blank' className='text-blue-500 dark:text-[#1cff1c] underline underline-offset-8'>Ver en github</a></li>
        </ul>}
         link='https://viteplatzi.netlify.app/'
      />

      <ProjectCard img={shopiLab}
        title='ShopiLab'
        description='Esta app es un Ecommerce que como prueba para certificación del curso tuve que realizar la protección de rutas controlando mostrar los productos si el usuario no estaba Registrado ademas manteniendo la persistencia de datos asi se recarge la página, hubo un reto adicional que tuve que resolver ya que al ingresar la url manualmente me mostraba ERROR-404, y de tanto buscar logre solucionarlo creando un archivo con las redirecciones.   tus datos de inicio de session solo se guardaran en tu dispositivo ademas podras eliminarlo.'
        detail={<ul>
         <li>Vite.Js</li>
         <li>TailwindCss</li>
         <li>Librería React.Js</li>
         <li>JavaScript 97.5%</li>
         <li>Html 0.9%</li>
         <li>Css 1.6%</li>
         <li><a href="https://github.com/anonimussapee/shopiLab/tree/main" target='_blank' className='text-blue-500 dark:text-[#1cff1c] underline underline-offset-8'>Ver en github</a></li>
        </ul>}
         link='https://shopilab.netlify.app/'
      />

      <ProjectCard img={projEstado}
        title='Manejo profesional del estado'
        description='Esta app demuestra el conocimiento adquirido en el manejo profesional del estado, lo mas interesante esta en el código te invito a visitar mi github el enlace esta aquí abajo. Los codigos de seguridad son: useState - classState - useReducer.'
        detail={<ul>
        <li>Vite.Js</li>
        <li>TailwindCss</li>
        <li>Librería React.Js</li>
        <li>JavaScript 97.1%</li>
        <li>Html 2.2%</li>
        <li>Css 0.7%</li>
        <li><a href="https://github.com/anonimussapee/manejo-estado" target='_blank' className='text-blue-500 dark:text-[#1cff1c] underline underline-offset-8'>Ver en github</a></li>
        </ul>}
        link='https://statehandling.netlify.app/'
      />
    </section>
  )
}

export {Projects}