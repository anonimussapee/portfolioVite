import { useEffect, useState } from 'react';
import './typing.css';

const SmsTyping = ({ mensajes }) => {
  const [currentMensajeIndex, setCurrentMensajeIndex] = useState(0);
  const [currentTexto, setCurrentTexto] = useState('');
  let line = document.querySelector('.line-typing');
  useEffect(() => {
    const mensajeActual = mensajes[currentMensajeIndex];

    let contador = 0;
    const interval = setInterval(() => {
      setCurrentTexto((prevTexto) => prevTexto + mensajeActual[contador]);
      contador++;

      if (contador === mensajeActual.length-1) {

    line.classList.add('ontrue');
       
        clearInterval(interval);
        setTimeout(() => {
          setCurrentTexto('');

          setCurrentMensajeIndex((prevIndex) => (prevIndex + 1) % mensajes.length);
          
        }, 2000); // 4 segundos de espera antes de mostrar el siguiente mensaje
      }
    }, 100); // 100 milisegundos entre cada letra

 line.classList.remove('ontrue');
    return () => clearInterval(interval);
  }, [mensajes, currentMensajeIndex]);

  return (
    <div className="mensaje-contenedor w-[90%]">
      <p className="mensaje-escritura ">{currentTexto}<span className='line-typing '>|</span></p>
    </div>
  );
};

export {SmsTyping};
