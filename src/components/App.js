
import React from "react";
import './../styles/App.css';
import fruits from "../data/fruitsData";
import { useState,useEffect} from "react";

const App = () => {

  const [search,setSearch] = useState("")
  const [filteredFruits,setFilteredFruits] = useState(fruits)

  function filterTheFruits() {
     setFilteredFruits(fruits.filter((fruit) => (
      fruit.toLowerCase().includes(search.toLowerCase())
     )))
  }

  useEffect(() => {
    filterTheFruits()
  },[search])

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search item</h1>
        <input type="text" onChange={(e) =>  setSearch(e.target.value)}/>
        <ul>
          {
            filteredFruits.map((fruit) => {
              return <li>{fruit}</li>
            })
          }
        </ul>
    </div>
  )
}

export default App
