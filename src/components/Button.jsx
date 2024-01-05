import React from 'react'

function Button({label , iconUrl , fullWidth}) {
  return (
    <button 
      className={`flex justify-center items-center gap-2 px-7 py-7 border font-montserrat text-lg  leading-none bg-coral-red rounded-full text-white border-coral-red 
      ${fullWidth && 'w-full' }
      `}
    >
        {label}

        {iconUrl && < img src={iconUrl} alt="right arrow" 
            className='ml-2 rounded-full w-5 h-5'
        />}
    </button>
  )
}

export default Button