import React, { useState } from "react";
import './nutrition.css'

function Nutrition() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

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

  function handleInputChange(event) {
    setQuery(event.target.value);
    if (event.target.value) {
      fetchResults(event.target.value);
    } else {
      setResults([]);
    }
  }

  function handleClick(event) {
    console.log(event.target.textContent);
  }

  return (
    <div className="nutrition">
      <input type="text" value={query} onChange={handleInputChange} />
      <ul>
        {results.map((item) => (
          <li key={item.food_name} onClick={handleClick}>{item.food_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Nutrition;