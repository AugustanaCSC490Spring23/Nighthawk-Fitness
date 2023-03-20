import React, { useState } from "react";
import './nutrition.css'

import {MdAddCircle} from 'react-icons/md'
import NutritionDisplay from "./nutritionDisplay/NutritionDisplay";

function Nutrition() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem('userData');
    return savedUserData ? JSON.parse(savedUserData) : null
  });



  async function fetchResults(query) {
    const url = `https://trackapi.nutritionix.com/v2/search/instant?query=${query}`;
    const headers = {
      "x-app-id": "4288aa9b",
      "x-app-key": "0ce4b0ca6ed3c4894aa01d67bb1e85fd",
    };
    const response = await fetch(url, { headers });
    const data = await response.json();
    setResults(data.common);
  }

  function closeAddFood() {
    document.getElementById('addFood').classList.remove('openAddFood');
  }

  function openAddFood() {
    document.getElementById('addFood').classList.add('openAddFood');
  }

  // function handleInputChange(event) {
  //   setQuery(event.target.value);
  //   if (event.target.value) {
  //     fetchResults(event.target.value);
  //   } else {
  //     setResults([]);
  //   }
  // }

  // function handleClick(event) {
  //   console.log(event.target.textContent);
  // }

  return (
    <div className="container nutrition">
      {/* <input type="text" value={query} onChange={handleInputChange} />
      <ul>
        {results.map((item) => (
          <li key={item.food_name} onClick={handleClick}>{item.food_name}</li>
        ))}
      </ul> */}
      <div className="nutrition-container">
        <h1>Your food log</h1>
        <div className="nutrition-content">
          <NutritionDisplay userData={userData}/>
          <div className="nutrition-log">
            <div className="breakfast"><h3>Breakfast</h3> <MdAddCircle className="log-food-icon" onClick={openAddFood}/></div>
            <div className="lunch"><h3>Lunch</h3> <MdAddCircle className="log-food-icon"/></div>
            <div className="dinner"><h3>Dinner</h3> <MdAddCircle className="log-food-icon"/></div>
            <div className="snack"><h3>Snack</h3> <MdAddCircle className="log-food-icon"/></div> 
          </div>
        </div>

        <div id="addFood" className="add-food">
          <div className="close" onClick={closeAddFood}>
            <div></div>
            <div></div>
          </div>
          <h2> add food</h2>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;