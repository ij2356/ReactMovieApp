import "./App.css";
import { useEffect, useState } from "react";
 import $ from "jquery";

function Array() {
  const [textValue, setTextValue] = useState("");
  const [textArray, setTextArray] = useState([]);
  const textType = (e) => {
    setTextValue(e.target.value);  
  }
  const arraySetting = (e) => {
    setTextArray([textValue, ...textArray]);
  };
 
  const a = e => {
     let z = textArray;   
    z= z.splice(1,z.length-1)
    setTextArray(z);
  }
  const z = (e) => {
   
    let a = document.querySelector('.test');
    console.log(a);
  }
  useEffect(() => console.log(textArray), [textArray]);
  return (
    <>
      <input className="" value={textValue} onChange={textType} />
      <button onClick={arraySetting}>배열넣기</button>
      <button>배열 앞 삭제</button>
      <div className="textbox">
        <div className="test" onClick={z}>
          부모
        </div>
        <ul>
          {textArray.map((item, key) => {
            return (
              <li key={key} className={"i" + key}>
                {item}
                <button onClick={a}>이것도</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}


export default Array;