import React, { useState, useEffect } from "react";
import Explanation from "./Components/Explanation";
import Image from "./Components/Image";
import Title from "./Components/Title";
import DateSelector from "./Components/DateSelector";
import axios from "axios";
import GlobalStyle from "./GlobalStyle";
import "./App.css";

function App(props) {
  const currentDate = new Date(); // Javascript date object.

  const [photoData, setPhotoData] = useState([]);
  const [date, setDate] = useState(
    `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`
  );
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then((res) => {
        setPhotoData(res.data);
      })
      .catch((err) => {
        debugger;
      });
  }, [date]);

  return (
    <div className="App">
      <GlobalStyle />
      <DateSelector date={date} setDate={setDate} />
      <Title title={photoData.title} />
      <Image img={photoData.url} mediaType={photoData.media_type} />
      <Explanation explanation={photoData.explanation} />
    </div>
  );
}

export default App;
