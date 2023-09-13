import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";

import './App.css';


function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="weather-app-wraper">
        <div className="weather-app">
          <Search />
          <Weather />
          <Forecast />
        
        </div>
        <p>
          <a href="https://github.com/Another1a/weather-project" target="_blank" rel="noreferrer">Open-source code</a>, by Alla 
          </p>
      </div>
      
    </div>
  </div>
  );
}

export default App;
