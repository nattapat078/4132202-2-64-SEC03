import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Car from "./components/car";

const numbers = [10 , 20, 30];
const text = (
  <>
    <div>hello Workd !!! React {numbers[0] + numbers[2]}</div>
    <h3 className="seagreen">My name is Nattapat</h3>
  </>
);


ReactDOM.render(<Car brand="Toyota" />, document.getElementById("root"));
