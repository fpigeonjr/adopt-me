const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
