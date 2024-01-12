import './App.css';
import calculadoraLogo from './imagenes/calculadora.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const ingresarInput = valor => {
    setInput(input + valor);
  };

  const limpiarPantalla = () => {
    setInput('');
  };

  const calcularResultado = () => {
    (input) ? setInput(evaluate(input)) : alert("Por favor ingrese valores");
  };

  return (
    <div className='App'>
      <div className='calculadora-logo-contenedor'>
        <img
          src={calculadoraLogo}
          className='calculadora-logo'
          alt='Logo Calculadora' />
          <h1 className='titulo-calculadora'>
            Calculadora
          </h1>
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={ingresarInput}>1</Boton>
          <Boton manejarClick={ingresarInput}>2</Boton>
          <Boton manejarClick={ingresarInput}>3</Boton>
          <Boton manejarClick={ingresarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={ingresarInput}>4</Boton>
          <Boton manejarClick={ingresarInput}>5</Boton>
          <Boton manejarClick={ingresarInput}>6</Boton>
          <Boton manejarClick={ingresarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={ingresarInput}>7</Boton>
          <Boton manejarClick={ingresarInput}>8</Boton>
          <Boton manejarClick={ingresarInput}>9</Boton>
          <Boton manejarClick={ingresarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={ingresarInput}>0</Boton>
          <Boton manejarClick={ingresarInput}>.</Boton>
          <Boton manejarClick={ingresarInput}>/</Boton>
        </div>

        <div className='fila'>
          <BotonClear manejarClear={limpiarPantalla}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
