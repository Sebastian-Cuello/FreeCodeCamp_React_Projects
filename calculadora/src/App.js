import React, {useState} from 'react';
import './App.css';
import { Boton, Pantalla, Bclear } from './components';
/* import { evaluate } from 'mathjs'; For calculate string into numbers */

function App() {
  const [input, setInput] = useState('');

  const agregarInput = val =>{
    setInput(input + val);
  };

  const borrarInput = () => {
    setInput('');
  };

  return (
    <div className="App">
      <div className="contenedor-titulo">
        <h1>Calculadora</h1>
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Bclear borrarInput={borrarInput}>Clear</Bclear>
        </div>
      </div>
    </div>
  );
}

export default App;
