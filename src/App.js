import React, { useState, useEffect } from "react";
import Explanation from "./Components/Explanation";
import Image from "./Components/Image";
import Title from "./Components/Title";
import axios from "axios";
import "./App.css";

function App() {
  const [photoData, setPhotoData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        setPhotoData(res.data);
      })
      .catch((err) => {
        debugger;
      });
  }, []);

  return (
    <div className="App">
      <Title title={photoData.title} />
      <Image img={photoData.url} />
      <Explanation explanation={photoData.explanation} />
    </div>
  );
}

export default App;
