import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./PlayersList";

const App = () => {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "2rem" }}>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
};

export default App;
