import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';

const Footer = () => {

  return (
    <footer className='flex flex-col gap-6 w-[100%] h-[30rem] bg-blue-950 p-20 text-[1.7rem] text-white '>
      <p>&#169; JDX DEVS</p>
      <address>🇪🇨 Otavalo - Ecuador </address>
      <p><PhoneIcon className='w-10 h-10 inline'/>+593 93 934 9490</p>
      <p><EnvelopeIcon className='w-10 h-10 inline'/> jdxevs@gmail.com  </p>
    </footer>
  )
}

export {Footer};
