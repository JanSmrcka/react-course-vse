import React from "react";
import { createRoot } from "react-dom/client";

const Car = (props) => {
  return React.createElement("div", null, [
    React.createElement("h2", {}, props.brand),
    React.createElement("h3", {}, props.model),
    React.createElement("h3", {}, props.year),
    React.createElement("h3", {}, props.price),
  ]);
};

const App = () => {
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
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(React.createElement(App));
