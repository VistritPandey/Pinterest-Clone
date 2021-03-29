import "./App.css";
import Header from "./Header";
import Mainboard from "./Mainboard";
import api from "./api"
import { useState } from "react";

function App() {
  const [pins, setNewPins] = useState([])

  const getImages = (term) => {
    return api.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      }
    })
  }

  const onSearchSubmit = (term) => {
    console.log("ok boomer" , term)
      getImages(term).then((res) => {
        let results = res.data.results;
        let newPins = [
          ...results,
          ...pins,
        ]

        newPins.sort(function(a,b) {
          return 0.5 - Math.random();
        });
        setNewPins(newPins)
      })
  }


  return (
    <div className="App">
      <Header onSubmit={onSearchSubmit}/>
      <Mainboard pins={pins} />
    </div>
  );
}

export default App;
