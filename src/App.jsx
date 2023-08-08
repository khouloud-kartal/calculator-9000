import React, { useState } from 'react';
import BeautifulScreen from './BeautifulScreen.jsx'
import NumberButton from './NumberButton.jsx'
import EqualButton from './EqualButton.jsx';
import OperatorButton from './OperatorButton.jsx'
import ItSOverNineThousand from './ItSOverNineThousand.jsx';
import './CSS/App.css'

function App() {

  const [result, setResult] = useState('0');

  const [history, setHistory] = useState('0');

  const NumberButtonClick = (number) => {
    const newValue = number.target.value;
    if (result === '0') {
      setResult(newValue);
      setHistory(newValue);
    } else {
      setResult(result + newValue);
      setHistory(result + newValue);
    }
  };

  const OperatorButtonClick = (operator) => {
      const newValue = operator.target.value;
      if (result === '0') {
        setResult('0');
        setHistory('0');
      } else {
        setResult(result + newValue);
        setHistory(result + newValue);
      }
    };

  const FinalResult = () =>{
      setResult(eval(result));
      setHistory([history , eval(result)]);
  }

  console.log(result);
  console.log(history);

  return (
    <div>
      <h1>Calculator9000</h1>
      <BeautifulScreen result={result}/>
      <div className="ButtonsDiv">
        <div className='Buttons'>
          <NumberButton onClickedNumber={NumberButtonClick}/>
          <EqualButton finalResult={FinalResult}/>  
        </div>
        <OperatorButton operationOnclick={OperatorButtonClick}/>
      </div>
      {result > 9000 && <ItSOverNineThousand />}
    </div>
    
  )
}

export default App
