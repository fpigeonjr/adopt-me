import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Gorgo",
      animal: "Dog",
      breed: "Pekenese"
    }),
    React.createElement(Pet, { name: "Jade", animal: "Dog", breed: "Terrier" }),
    React.createElement(Pet, { name: "Skip", animal: "Cat", breed: "Mixed" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
