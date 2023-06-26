import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado');
    // También puedes reiniciar los campos del formulario
    setName('');
    setEmail('');
    setDescription('');
  };

  return (
    <div className="min-w-[320px] max-w-[450px]">
      <h2 className=' block font-bold mb-2 text-[2.5rem]'>Dejame tus datos y me pondré en contacto contigo</h2>
      <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-8 dark:text-white text-[1.8rem]">
        
        <div className="mb-8">
          <label className="block font-bold mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            className=" text-black shadow appearance-none border rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            placeholder="Nombre"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="mb-8">
          <label className="block font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className=" text-black shadow appearance-none border rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-8">
          <label className="block font-bold mb-2" htmlFor="description">
            Descripción del proyecto
          </label>
          <textarea
            className=" text-black shadow appearance-none border rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Descripción"
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
}

export {ContactForm};
