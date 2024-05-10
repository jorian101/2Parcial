import React from 'react'

const Image = () => {
  return (
    <div className='img-container'>
        <img className='exercise' src={"./gym.png"} alt={"Un ejercicio"} />
        <div className='play'> <img src={"./icono.png" }alt={"play!!!!"} /> </div>
    </div>
  )
}

export default Image