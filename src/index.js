import React from "react";
import ReactDOM from "react-dom";

const name = "John Doe";
ReactDOM.render(
  <h1>Vanessa, world! {name}</h1>,
  document.getElementById("app")
);

console.log(`Hello, ${name}!`);
console.log("Funcionou tudo junto");
