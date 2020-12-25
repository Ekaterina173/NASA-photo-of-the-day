import React from "react";
import Header from "./components/Header";
import ImageSection from "./components/ImageSection";
import DatePicker from "./components/DatePicker";
import "./App.css";

function getCurrentDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();

  return yyyy + "-" + mm + "-" + dd;
}

function App() {
  const [data, setData] = React.useState({});
  const [query, setQuery] = React.useState(() => getCurrentDate());

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${query}`
      );
      const obj = await res.json();
      setData(obj);
    };
    fetchData();
  }, [query]);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  if (Object.keys(data).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      <DatePicker date={query} setDate={onChange} />
      <ImageSection data={data} />
    </div>
  );
}

export default App;
