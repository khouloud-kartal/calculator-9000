import './CSS/App.css';

function OperatorButton({operationOnclick}) {
  
    const tab = ['+' , '-' , '*' , '/'];

    return (
        
      <div className='Operators'>
        {tab.map((operator, index) => (
          <button key={index} value={operator} onClick={operationOnclick}>{operator}</button>
        ))}
      </div>
    )
}
  
export default OperatorButton