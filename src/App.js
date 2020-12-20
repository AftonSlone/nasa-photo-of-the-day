import React, { useState } from "react";
import Explanation from "./Components/Explanation";
import Image from "./Components/Image";
import Title from "./Components/Title";
import axios from "axios";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
    </div>
  );
}

export default App;
