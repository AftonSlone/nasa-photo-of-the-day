import React, { useState } from "react";
import Explanation from "./Components/Explanation";
import Image from "./Components/Image";
import Title from "./Components/Title";
import axios from "axios";
import "./App.css";

function App() {
  axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((res) => {})
    .catch((err) => {
      debugger;
    });

  return (
    <div className="App">
      <Title title={} />
      <Image img={} />
      <Explanation explanation={} />
    </div>
  );
}

export default App;
