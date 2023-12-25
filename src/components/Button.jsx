import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-golden-gradient font-poppins rounded-full font-medium text-[18px] text-primary outline-none ${styles}`}>
      Start Now
    </button>
  )
}

export default Button