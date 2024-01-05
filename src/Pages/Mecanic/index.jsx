import { Layout } from '../../Components/Layout';
import moxalLogo from '../../assets/logo-moxal.webp';
import shimanoLogo from '../../assets/Shimano-Logo-1990.png';
import kenchLogo from '../../assets/kenchlogo.png'
import './mecanic.css';


const Mecanic = () => {

  return (
    (
      <Layout>
        <h1 className='text-[3rem] font-bold text-center -mt-36 ' style={{
          lineHeight:"35px",
        }}>Mecánica y repuestos online para motos y bicicletas</h1>
        <div
        style={{
          height:"300px",
          width:"100%",
          backgroundSize:"cover",
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat",
          backgroundImage:"url(https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          margin : "10px 0",
          
        }}
        >

        </div>
        <article>
          <h2 className='text-[1.8rem]'>
            Cuentame el repuesto que necesitas para tu motocicleta o bicicleta y yo te la enviare por servientrega o Laarcorrier el mismo día.
          </h2>
          <div className='caja-de-marcas flex justify-between gap-20' >
          <figure>
              <img src={kenchLogo} alt="logo kench freestyle"  className='w-[100px] h-[100px] object-cover'/>
          </figure>
          <figure>
              <img src={shimanoLogo} alt="logo shimano"  className='w-[200px] h-[120px] object-cover'/>
          </figure>
          <figure>
              <img src={moxalLogo} alt="logo moxal"  className='w-[200px] h-[120px] object-cover'/>
          </figure>
          </div>
        </article>
      </Layout>
    )
  );
}

export {Mecanic};