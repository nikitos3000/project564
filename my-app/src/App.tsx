import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import BackgroundComponent from "./components/Background";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BackgroundComponent />
      <Slider />
    </div>
  );
}

export default App;
