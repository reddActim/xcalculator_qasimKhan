import './App.css';
import React , {useState} from 'react';
const buttonLabels = [
  "7", "8", "9",  "+",
  "4", "5", "6",  "-",
  "1", "2", "3", "*",
  "c", "0", "=", "/"
];
function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState();
  const handleButtonClick = (value) =>{
    if(value === "c"){
      setExpression("");
      setResult(null);
      return};
    if(value === "="){
      try{
        if(expression === '') setResult("Error");
        
      setResult(eval(expression).toString())
      return;
      } catch
      {
        setResult("Error")
        return;
      }
      };

    setExpression((prev) => (prev + value));

  };
  return (
    <>
      <div className='container'>
        <h1 className='main-heading'>React Calculator</h1>
        <input value={expression}/>
        {result && <div>{result}</div>}
        <div className='buttons'>
        {buttonLabels.map((label, index)=> (<button type="button" key={index} onClick={() => handleButtonClick(label)}>{label}</button>))}
        </div>
      </div>
    </>
  );
}

export default App;
