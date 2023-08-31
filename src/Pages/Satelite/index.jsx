import { ImageDiv } from '../../Components/ImageDiv'
import sat from './antain2.jpeg'
import earth from './earth.png'
import long_pack_dt from './long-pack-dt.png'
import ptio from './ptio-1.svg'
import fb from '../../assets/FbLogo.png'
import ing from '../../assets/insta.webp'
import ttk from '../../assets/tiktok.png'
import browser from '../../assets/browser.png'
import { CursorArrowRaysIcon } from '@heroicons/react/24/solid'


const Satelite = () => {
  return (
    <section className=' w-[90%] min-w-[280px] max-w-[900px] flex flex-col gap-5 justify-center items-center mb-10 '>
      

      <ImageDiv image={sat} height={'300px'} width={'100%'} key={'satOne'}/>
      <h1 className='text-[2.3rem] font-bold'>Desafío Espacial: Construyendo una Estación Terrestre</h1>
      <p className='text-[1.6rem]'>
        Construir una estación terrestre es un auténtico desafío que captura mi profundo interés, pues se abre ante mí un amplio horizonte de inmensas posibilidades.
      </p>
      <p className='text-[1.6rem]'>
        Al embarcarme en esta travesía, mi objetivo trasciende lo individual: anhelo inspirar a la generación actual a emprender proyectos similares, encendiendo en ellos la llama del progreso tecnológico.
      </p>
      <p className='text-[1.6rem] self-start'>
        Ambiciono que nuestra nación sea reconocida internacionalmente como un país líder en la vanguardia tecnológica.
      </p>
      <p className='text-[1.6rem] self-start'>
        La estación terrestre no será solo una estructura en el paisaje, sino un faro de esperanza y colaboración donde las mentes más brillantes se unan para abordar desafíos globales
      </p>
      <h2 className='text-[2rem] font-bold pt-10 pb-7'>Proyecto y su desarrollo</h2>
      <div className='flex smMax:flex-col  w-full h-auto gap-7'>
        <ImageDiv image={earth} height={'300px'} width={''} key={'earth'} classAlternative={'max-w-[500px] smMax:w-[100%] smMax:max-w-[600px] sm:w-[50%]'} />
        <div className='flex flex-col gap-5 sm:w-[50%] smMax:w-full'>
          <p className='text-[1.6rem]'>
            Esta estación terrestre es una de <strong>las primeras en Ecuador</strong>, recibe datos telemétricos de los diferentes satélites disponibles en la órbita terrestre baja, que se encuentra entre 150 km y 2.000 km al nivel del mar.
          </p>
          <p className='text-[1.6rem]'>
            La antena <strong>Ground Plane</strong> que construí emite una frecuencia de 433 MHz y tiene un rango de 5.000 km a la redonda, conectando <strong>Estados Unidos</strong> hasta <strong>Chile</strong>. Si bien las frecuencias disponibles para estos experimentos en Latinoamérica son de 433 MHz, en otros países llegan a más de 915 MHz.
          </p>

        </div>

      </div>
      <h2 className='text-[2rem] font-bold pt-10 pb-7'>¿Que datos recibe la estacion terrestre?</h2>
      <ol className='list-disc '>
        <li className='text-[1.8rem]'><span className="font-bold">Identificación y Metadatos</span>: <p className="text-[1.6rem]"> Se refiere al nombre o identificación del satélite o dispositivo, cuándo se recibieron, configuración de la comunicación LoRa utilizada,  la velocidad de propagación, el factor de corrección  y el ancho de banda </p></li>
        <li className='text-[1.8rem]'><span className="font-bold">Posicionamiento y Eclipses</span>: <p className="text-[1.6rem]">Indica que el satélite se encuentra en la parte iluminada del sol (no en un eclipse) y proporciona la profundidad del eclipse en grados </p></li>
        <li className='text-[1.8rem]'><span className="font-bold">Cobertura Teórica</span>: <p className="text-[1.6rem]">Indica la cobertura teórica de la comunicación, es decir, la distancia máxima aproximada a la que se espera que el satélite pueda comunicarse.</p></li>
        <li className='text-[1.8rem]'><span className="font-bold">Potencia de Transmisión y Temperatura</span>: <p className="text-[1.6rem]">Muestra la potencia de transmisión en milivatios, la temperatura del dispositivo,  Esto es crucial para monitorear las condiciones operativas y puede indicar posibles problemas de temperatura.</p></li>
        <li className='text-[1.8rem]'><span className="font-bold">Sensores de Giroscopio</span>: <p className="text-[1.6rem]">Representa los valores de los ejes del giroscopio (X, Y y Z).</p></li>
      </ol>
      <h2 className='text-[2rem] font-bold pt-10 pb-7'>¿Cual es el récord de distacia hasta el momento?</h2>
      <ImageDiv image={long_pack_dt} height={''} width={'100%'} key={'earth'} classAlternative={'h-[60px] sm:h-[80px] max-w-[600px]'} />
      <a href="https://tinygs.com/station/Jdxstati0n@5235674776" target='_blank'>
        <button className='text-[1.8rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[250px] rounded-xl focus:outline-none focus:shadow-outline relative'>Observar plataforma web<CursorArrowRaysIcon className='dark:text-white text-black inline clickme'/> </button>
      </a>
          
      <h2 className='text-[2rem] font-bold pt-10'>Auspiciador:</h2>
      <div className='flex flex-row smMax:flex-col justify-center items-center gap-3'>
        <a href="https://www.pilahuintio.ec/" target='_blank'>
          <img src={ptio} alt="Logo pilahuin Tio" className='smMax:w-[100%] min-w-[180px] w-[30%] object-fill bg-black dark:bg-transparent rounded-3xl'/>
        </a>
        <p className='text-[1.6rem]'>
        Este proyecto se desarrollo con la valiosa colaboración y apoyo incondicional de la <strong><a href="https://www.pilahuintio.ec/" target='_blank'>Cooperativa Pilahuin Tio Ltda.</a> </strong> Su compromiso y respaldo han sido fundamentales para hacer realidad esta ambiciosa iniciativa. Agradezco profundamente su visión compartida y su dedicación a la promoción del progreso tecnológico y la exploración espacial.
        </p>
      </div>
      <h2 className='text-[2rem] font-bold pt-10'>Te invito a seguirlos en sus redes sociales y conocer que tienen preparado para tí en su página web:</h2>
      <div className='flex flex-wrap justify-evenly items-center gap-10 pt-10'>
        <a href="https://www.facebook.com/PilahuinTio/" target='_blank' className='hover:border-gray-400 hover:scale-[1.1] hover:border-[2px] rounded-2xl border-[2px] p-2 border-transparent flex flex-col items-center' >
          <img src={fb} alt="Logo pilahuin Tio" className='w-[120px] object-fill  rounded-3xl'/>
          <p className='text-[1.5rem]'>facebook.com/PilahuinTio</p>
        </a>
        <a href="https://instagram.com/pilahuintio" target='_blank' className='hover:border-gray-400 hover:scale-[1.1] hover:border-[2px] rounded-2xl border-[2px] p-2 border-transparent flex flex-col items-center' >
          <img src={ing} alt="Logo pilahuin Tio" className='w-[120px] object-fill  rounded-3xl'/>
          <p className='text-[1.5rem]'>instagram.com/pilahuintio</p>
        </a>
        <a href="https://www.tiktok.com/@pilahuintio" target='_blank' className='hover:border-gray-400 hover:scale-[1.1] hover:border-[2px] rounded-2xl border-[2px] p-2 border-transparent flex flex-col items-center' >
          <img src={ttk} alt="Logo pilahuin Tio" className='w-[120px] object-fill  rounded-3xl'/>
          <p className='text-[1.5rem]'>tiktok.com/@pilahuintio</p>
        </a>
        <a href="https://www.pilahuintio.ec/" target='_blank' className='hover:border-gray-400 hover:scale-[1.1] hover:border-[2px] rounded-2xl border-[2px] p-2 border-transparent flex flex-col items-center' >
          <img src={browser} alt="Logo pilahuin Tio" className='w-[120px] object-fill  rounded-3xl'/>
          <p className='text-[2rem]'>www.pilahuintio.ec</p>
        </a>
      </div>
    </section>
  )
}
export {Satelite}