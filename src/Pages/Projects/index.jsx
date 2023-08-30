import { ProjectCard } from '../../Components/ProjectCard'
import todos from '../../assets/projTodo.png'
import storemlo from '../../assets/projAcademlo.png'
import appWeather from '../../assets/projWeather.png'
import viteEc from '../../assets/viteEcommerce.png'
import shopiLab from '../../assets/projShopilab.png'
import projmp3 from '../../assets/projmp3.png'
import projEstado from '../../assets/projEstado.png'
import fmentorCards from '../../assets/fmentorCard.png'
import newsletter from '../../assets/nlet.png'
import multistep from '../../assets/multistep.png'




const Projects = () => {
  return (
    <section className=' w-[90%] max-w-[600px] h-auto text-[2rem] flex flex-col justify-end items-center gap-20 pb-16 '>
      <h1 className='font-extrabold text-[2.3rem]' >
       Estos son mis Proyectos
      </h1>
      <ProjectCard img={todos}
       title='App Todos'
       description='Esta app te servira para tener tu lista de cosas por hacer en un solo lugar, solo ingresa a la app  creas un "Todo" y asi manten el orden en tu agenda. primer proyecto con React y react-beautiful-dnd.'
       detail={<ul>
        <li>Librería React.Js</li>
        <li>JavaScript 88.8%</li>
        <li>Html 1.7%</li>
        <li>Css 16.5%</li>
        <li><a href="https://github.com/anonimussapee/fdo" target='_blank' className='text-blue-500 dark:text-[#1cff1c] underline underline-offset-8'>Ver en github</a></li>
       </ul>}
        link='https://dnd-todo-app.netlify.app/'
        />
      <ProjectCard img={multistep}
        title='multistep Challenge'
        description='Esta es una solución al desafío del formulario de varios pasos en Frontend Mentor.'
        detail={<ul>
        <li>Vite.Js</li>
        <li>TailwindCss</li>
        <li>Librería React.Js</li>
        <li>JavaScript 87.6%</li>
        <li>Html 1.5%</li>
        <li>Css 10.9%</li>
        <li><a href="https://github.com/anonimussapee/multistep" target='_blank' className='text-blue-500 dark:text-[#1cff1c] underline underline-offset-8'>Ver en github</a></li>
        </ul>}
        link='https://mstep.netlify.app/'
      />
      <ProjectCard img={newsletter}
        title='NewsLetter Challenge'
        description='Esta app es un desafio de frontend mentor un boletín informativo responsivo.'
        detail={<ul>
        <li>Vite.Js</li>
        <li>TailwindCss</li>
        <li>Librería React.Js</li>
        <li>JavaScript 77.8%</li>
        <li>Html 6.3%</li>
        <li>Css 15.9%</li>
        <li><a href="https://github.com/anonimussapee/newslet" target='_blank' className='text-blue-500 dark:text-[#1cff1c] underline underline-offset-8'>Ver en github</a></li>
        </ul>}
        link='https://nlet.netlify.app/'
      />
      <ProjectCard img={fmentorCards}
        title='Bank card challenge'
        description='Esta app es un desafio de frontend mentor una tarjeta de credito virtual y responsivo.'
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
        description='Esta app te permite descargar música totalmente gratis te invito a pobrarla!, la construi consumiendo una API ademas use la libreria de React. contiene loadings creados con css.  '
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

    </section>
  )
}

export {Projects}