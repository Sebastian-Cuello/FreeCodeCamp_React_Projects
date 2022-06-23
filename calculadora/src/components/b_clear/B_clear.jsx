import React from 'react'
import './b_clear.css';

function B_clear(props) {
  return (
    <div className='boton-clear' onClick={() => props.borrarInput()}>
      {props.children}
    </div>
  )
}

export default B_clear