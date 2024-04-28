import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./components/SearchParams";

const App = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="mx-auto max-w-3xl">
        <h2 className="py-5 text-3xl font-bold tracking-tight text-gray-900">
          Velocity Vault
        </h2>
        <SearchParams />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
