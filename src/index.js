import React from 'react';
import ReactDOM from 'react-dom';

import summ from "./modules/summ";
import "./styles/index.css";
import CardHolder from "./Components/CardHolder/CardHolder";

ReactDOM.render(<CardHolder />, document.getElementById("root"));

console.log("Hello World!", summ(14, 24));