import React from "react";
import { createRoot } from "react-dom/client";
import Car from "./components/Car";

const App = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl py-5 font-bold tracking-tight text-gray-900 sm:text-4xl">
          Velocity Vault
        </h2>
        <Car brand="Ford" model="Mustang" price="1000 EUR" color="Red" />
        <Car brand="Ford" model="Fiesta" price="3000 EUR" color="Blue" />
        <Car brand="Ford" model="Focus" price="2000 EUR" color="Black" />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
