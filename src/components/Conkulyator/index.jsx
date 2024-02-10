
import React, { useState } from 'react';


function index() {

  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const calculateResult = () => {
    const number = parseFloat(inputValue);
    if (!isNaN(number)) {
      const square = number * number;
      setResult(`Kiritilgan sonning kvadrati: ${square}`);
    } else {
      setResult("Noto'g'ri son kiritildi. Iltimos, faqat raqam kiriting.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Sonni kiriting"
      />
      <button onClick={calculateResult}>Hisoblash</button>
      {result && <p>{result}</p>}
    </div>
  )

}
export default index