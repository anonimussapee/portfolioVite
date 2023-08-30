import { ImageDiv } from '../../Components/ImageDiv'
import sat from './antain2.jpeg'
import hand1 from './hand3.jpeg'
import ptio from './ptio-1.svg'
import fb from '../../assets/FbLogo.png'
import ing from '../../assets/insta.webp'
import ttk from '../../assets/tiktok.png'
import browser from '../../assets/browser.png'


const Satelite = () => {
  return (
    <section className=' w-[90%] min-w-[280px] max-w-[800px] flex flex-col gap-5 justify-center items-center mb-10'>
      
      <ImageDiv image={sat} height={'300px'} width={'100%'} key={'satOne'}/>
      <h1 className='text-[2.3rem] font-bold'>Desafío Espacial: Construyendo una Estación Terrestre</h1>
      <p className='text-[1.8rem]'>
        Construir una estación terrestre es un auténtico desafío que captura mi profundo interés, pues se abre ante mí un amplio horizonte de inmensas posibilidades. Este proyecto es más que una mera ambición personal, es una pasión que me impulsa con entusiasmo inigualable.
      </p>
      <p className='text-[1.8rem]'>
        Al embarcarme en esta travesía, mi objetivo trasciende lo individual: anhelo inspirar a la generación actual a emprender proyectos similares, encendiendo en ellos la llama del progreso tecnológico. Ambiciono que nuestra nación sea reconocida internacionalmente como un país líder en la vanguardia tecnológica y un destacado protagonista en el desarrollo de estaciones terrestres.
      </p>
      <ImageDiv image={hand1} height={'300px'} width={'100%'} key={'handOne'} />
      <p className='text-[1.8rem]'>
        La estación terrestre no será solo una estructura en el paisaje, sino un faro de esperanza y colaboración. Es mi sueño verla como una plataforma para el desarrollo científico y tecnológico, donde las mentes más brillantes se unan para abordar desafíos globales y contribuir al avance de la humanidad.
      </p>
      <h2 className='text-[2rem] font-bold pt-10'>Colaboradores:</h2>
      <div className='flex flex-row smMax:flex-col justify-center items-center gap-3'>
        <a href="https://www.pilahuintio.ec/" target='_blank'>
          <img src={ptio} alt="Logo pilahuin Tio" className='smMax:w-[100%] min-w-[180px] w-[30%] object-fill bg-black dark:bg-transparent rounded-3xl'/>
        </a>
        <p className='text-[1.8rem]'>
        Este proyecto se construirá con la valiosa colaboración y apoyo incondicional de la <strong><a href="https://www.pilahuintio.ec/" target='_blank'>Cooperativa Pilahuin Tio Ltda.</a> </strong> Su compromiso y respaldo han sido fundamentales para hacer realidad esta ambiciosa iniciativa. Agradezco profundamente su visión compartida y su dedicación a la promoción del progreso tecnológico y la exploración espacial.
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