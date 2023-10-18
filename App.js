



// src/Calculator.js
import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [display, setDisplay] = useState('0');

  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) => {
      if (prevDisplay === '0' || prevDisplay === 'Error') {
        return value;
      } else {
        return prevDisplay + value;
      }
    });
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('0');
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

// import React from 'react'

// function App() {
//   const names = ['SAI','VARMA','MALLIK','CARRER','VIJAY','VISHNU','ANAND'];
//   const filtered = names.filter(names => names.includes('A','M'))

//   return (
//     <div>
//       {
//         filtered.map(names => 
//           <li>{names}</li>
//           ) 
//       }
//     </div>
//   )
// }


// export default App

