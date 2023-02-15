import "./App.css";
import { useEffect, useState } from "react";

function Array() {
  const [textValue, setTextValue] = useState("");
  const [textArray, setTextArray] = useState([]);
  const textType = (e) => {
    setTextValue(e.target.value);  
  }
  const arraySetting = (e) => {
    setTextArray([textValue, ...textArray]);
  };

  const arrayDelete = (e) => {
    const li = e.target.parentElement;
    li.remove(); 
  }


  useEffect(() => console.log(textArray), [textArray]);
  return (
    <>
      <input className="" value={textValue} onChange={textType} />
      <button onClick={arraySetting}>배열넣기</button>
      <button>배열 앞 삭제</button>
      <div className="textbox">
        <ul>
          {
            textArray.map((item, key) => {
              return (
                <li key={key} className={"i" + key}>
                  {item}
                  <button onClick={arrayDelete}>❌</button>
                </li>
              );
            })
          }
        </ul>
      </div>
    </>
  );
}

export default Array;