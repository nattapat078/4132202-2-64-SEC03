import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Car from "./components/car";
import People from "./components/People";
import Table from "./components/Table";

ReactDOM.render(
<>
  <Car brand="Toyota" />
  <People/>
</>,
document.getElementById("root")

);
