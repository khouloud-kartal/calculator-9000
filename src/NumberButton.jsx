
import './CSS/App.css';

function NumberButton({onClickedNumber}) {
  
    const tab = [9, 8 , 7 , 6 , 5 , 4 , 3 , 2 , 1 , 0];

    return (   
      <>
        {tab.map((number, index) => (
          <button key={index} value={number} onClick={onClickedNumber}>{number}</button>
        ))}
    </>
    )
}

  
export default NumberButton