import React from "react";
import Header from "./components/Header";
import ImageSection from "./components/ImageSection";
import DatePicker from "./components/DatePicker";
import "./App.css";

function App() {
  const [nasaImg, setNasaImg] = React.useState("");
  const [imgTitle, setImgTitle] = React.useState("");
  const [imgDate, setImgDate] = React.useState("");
  const [query, setQuery] = React.useState("2020-12-24");

  React.useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + query)
      .then((res) => res.json())
      .then((result) => {
        console.log("result = ", result);
        setNasaImg(result.url);
        setImgTitle(result.title);
        setImgDate(result.date);
      });
  }, [query]);

  if (!nasaImg) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      <DatePicker onChange={(date) => setQuery(date).toString()} date={query} />
      <ImageSection image={nasaImg} title={imgTitle} date={imgDate} />
    </div>
  );
}

export default App;
