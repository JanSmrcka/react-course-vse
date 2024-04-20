import React from "react";
import { createRoot } from "react-dom/client";
import Car from "./components/Car";

/* const App = () => {
  return React.createElement("div", null, [
    React.createElement("h1", null, "Velocity Vault"),
    React.createElement(Car, {
      brand: "Ford",
      model: "Mustang",
      price: "1000 EUR",
      color: "Red",
    }),
    React.createElement(Car, {
      brand: "Ford",
      model: "Fiesta",
      price: "3000 EUR",
      color: "Blue",
    }),
    React.createElement(Car, {
      brand: "Ford",
      model: "Focus",
      price: "2000 EUR",
      color: "Black",
    }),
  ]);
}; */

const App = () => {
  return (
    <div>
      <h1>Velocity Vault</h1>
      <Car brand="Ford" model="Mustang" price="1000 EUR" color="Red" />
      <Car brand="Ford" model="Fiesta" price="3000 EUR" color="Blue" />
      <Car brand="Ford" model="Focus" price="2000 EUR" color="Black" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
