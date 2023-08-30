import { useState } from 'react'
import { Navigate } from 'react-router-dom';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [sendOk, setSendOk] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://formsubmit.co/ajax/bcd6653f8366231ebfd976a66791aefe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'customer-name': name,
          'customer-email': email,
          'customer-description': description
        })
      });

      if (response.ok) {
        setName('');
        setEmail('');
        setDescription('');
        setSendOk(true);
      } else {
        alert('Error al enviar el correo');
      }
    } catch (error) {
      alert('Error al enviar el correo');
    }
  };

  return (
    <div className="min-w-[320px] max-w-[450px]">
      {sendOk && <Navigate to='/thanks' replace={true}/>}
      <h2 className="block font-bold mb-2 text-[2.2rem]">
        Dejame tus datos y me pondré en contacto contigo
      </h2>
      <form
        onSubmit={handleSubmit}
        className="px-8 pt-6 pb-8 mb-8 dark:text-white text-[1.8rem]"
      >
        <div className="mb-8">
          <label className="block font-bold mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            className="text-black shadow appearance-none border rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            name="customer-name"
            placeholder="Nombre"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://jdx.netlify.app/thanks" />
        </div>
        <div className="mb-8">
          <label className="block font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="text-black shadow appearance-none border rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            placeholder="Correo electrónico"
            value={email}
            name="customer-email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-8">
          <label className="block font-bold mb-2" htmlFor="description">
            Descripción del proyecto
          </label>
          <textarea
            className="text-black shadow appearance-none border rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Descripción"
            name="customer-description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[250px] rounded-xl focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>

    </div>

  );
};

export {ContactForm}
