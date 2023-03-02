import React from 'react';
import imgSpinner from '../../assets/images/loader.png'

function Spinner() {
  return (
    <img src={imgSpinner} alt='Loading...' className='w-32 mx-48 animate-spin'  />
  )
}

export default Spinner