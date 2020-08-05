import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1> Hey Lazy Programmer lets get the netflix clone up and running !!</h1>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
