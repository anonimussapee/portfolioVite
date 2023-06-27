import { useState } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'

const Popup = ({ message}) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50 '>
          <div className='bg-white border-[3px] border-cyan-500 rounded-lg p-8 shadow-md relative'>
           
              <XCircleIcon  className='h-20 w-20 absolute top-[-30px] text-red-500  right-[-30px] active:text-red-950 '
              onClick={handleClose}/>
         
            <p className='text-[2.5rem] text-black font-extrabold'>{message}</p>
          </div>
        </div>
      )}
    </>
  )
}

export {Popup}
