import React, { useState } from "react";
import './nutrition.css'
import RequestForm from "../Calories/calories-content/requestForm";

import NutritionDisplay from "./nutritionDisplay/NutritionDisplay";
import LogItem from "./LogItem";

function Nutrition({userData}) {
  const [protein, setProtein] = useState(0)
  const [carb, setCarb] = useState(0)
  const [fat, setFat] = useState(0)
  const [query, setQuery] = useState("");
  const [common, setCommon] = useState([]);
  const [branded, setBranded] = useState([]);
  // const [userData, setUserData] = useState(() => {
  //   const savedUserData = localStorage.getItem('userData');
  //   return savedUserData ? JSON.parse(savedUserData) : null
  // });
  const [nutrition,  setNutrition] = useState ({})

  const [remain, setRemain] = useState(Math.round(userData.dailyCal.maintain_cal * 100 / 100));
  const [consumed, setConsumed] = useState(0);

  const [section, setSection] = useState('')
  const [bf, setBf]  = useState([])
  const [lunch, setLunch]  = useState([])
  const [dinner, setDinner]  = useState([])
  const [snack, setSnack]  = useState([])

  async function fetchResults(query) {
    const url = `https://trackapi.nutritionix.com/v2/search/instant?query=${query}`;
    const headers = {
      "x-app-id": "4288aa9b",
      "x-app-key": "0ce4b0ca6ed3c4894aa01d67bb1e85fd",
    };
    const response = await fetch(url, { headers });
    const data = await response.json();
    
    setCommon(data.common);
    setBranded(data.branded);
  }

  async function fetchNutrients(query) {
    const url = "https://trackapi.nutritionix.com/v2/natural/nutrients";
    const headers = {
      "Content-Type": "application/json",
      "x-app-id": "4288aa9b",
      "x-app-key": "0ce4b0ca6ed3c4894aa01d67bb1e85fd",
    };
    const body = {
      query,
    };
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  
}

  function closeAddFood() {
    document.getElementById('addFood').classList.remove('openAddFood');
  }

  function openAddFood(event,  sectionID) {
    document.getElementById('addFood').classList.add('openAddFood');
    setSection(sectionID);
  }

  function handleInputChange(event) {
    setQuery(event.target.value);
    if (event.target.value) {
      fetchResults(event.target.value);
    } else {
      setCommon([]);
      setBranded([]);
    }
  }

  async function handleClick(event) {

    try {
      const query = '1' + event.target.textContent;
    
      await fetchNutrients(query).then((data) => {
        setConsumed(Math.round(consumed + Math.round(data.foods[0].nf_calories)) * 100 / 100);
        setRemain(Math.round(remain-data.foods[0].nf_calories) * 100 / 100);
        setProtein(Math.round(protein  + data.foods[0].nf_protein) * 100/100)
        setCarb(Math.round(carb  + data.foods[0].nf_total_carbohydrate) *  100/100)
        setFat(Math.round(fat  + data.foods[0].nf_total_fat) * 100/100)
        if (section ===  'breakfast'){
          setBf(prev => {
            return [...prev, data.foods[0]]
          })

        }else if (section === 'lunch') {
          setLunch(prev => {
            return [...prev, data.foods[0]]
          })

        }else if  (section === 'dinner') {
          setDinner(prev => {
            return [...prev, data.foods[0]]
          })

        }else {
          setSnack(prev => {
            return [...prev, data.foods[0]]
          })

        }
        
        setNutrition(data.foods[0])
        // console.log(data.foods[0]);
      })
      
    }catch(e) {
      console.log(e);
    }
    
  }

  function deleteItem(id, sectionID) {
    if (sectionID ===  'breakfast'){
      setBf(prev => {
        return prev.filter((item, index) => {
          if (index === id) {
            const del = item;
            
            setConsumed(Math.round(consumed - Math.round(del.nf_calories)) * 100 / 100)
            setRemain(Math.round(remain + del.nf_calories) * 100 / 100)
            setProtein(Math.round(protein  - del.nf_protein)*100/100)
            setCarb(Math.round(carb  - del.nf_total_carbohydrate) * 100/100)
            setFat(Math.round(fat  - del.nf_total_fat) * 100 / 100)
          }
  
          return index !== id;
        })
      })

    }else if (sectionID === 'lunch') {
      setLunch(prev => {
        return prev.filter((item, index) => {
          if (index === id) {
            const del = item;
            
            setConsumed(Math.round(consumed - Math.round(del.nf_calories)) * 100 / 100)
            setRemain(Math.round(remain + del.nf_calories) * 100 / 100)
            setProtein(Math.round(protein  - del.nf_protein)*100/100)
            setCarb(Math.round(carb  - del.nf_total_carbohydrate) * 100/100)
            setFat(Math.round(fat  - del.nf_total_fat) * 100 / 100)
          }
  
          return index !== id;
        })
      })

    }else if  (sectionID === 'dinner') {
      setDinner(prev => {
        return prev.filter((item, index) => {
          if (index === id) {
            const del = item;
            
            setConsumed(Math.round(consumed - Math.round(del.nf_calories)) * 100 / 100)
            setRemain(Math.round(remain + del.nf_calories) * 100 / 100)
            setProtein(Math.round(protein  - del.nf_protein)*100/100)
            setCarb(Math.round(carb  - del.nf_total_carbohydrate) * 100/100)
            setFat(Math.round(fat  - del.nf_total_fat) * 100 / 100)
          }
  
          return index !== id;
        })
      })

    }else {
      setSnack(prev => {
        return prev.filter((item, index) => {
          if (index === id) {
            const del = item;
            
            setConsumed(Math.round(consumed - Math.round(del.nf_calories)) * 100 / 100)
            setRemain(Math.round(remain + del.nf_calories) * 100 / 100)
            setProtein(Math.round(protein  - del.nf_protein)*100/100)
            setCarb(Math.round(carb  - del.nf_total_carbohydrate) * 100/100)
            setFat(Math.round(fat  - del.nf_total_fat) * 100 / 100)
          }
  
          return index !== id;
        })
      })

    }
  }
  
  return (
    <div className="container nutrition">
      <div className="nutrition-container">
        <h1>daily nutrition</h1>
        {!userData.isFilled ? <RequestForm /> : ''}
        <div className="nutrition-content"  style={userData.isFilled ? {display: 'block'}:{display:'none'}} >
          <NutritionDisplay userData={userData} consumed={consumed} remain={remain} protein={protein} carb={carb} fat={fat}/>
          <div className="nutrition-log">

            <LogItem title='Breakfast'  onDelete={(id) => deleteItem(id, 'breakfast')} onPress={(event) => openAddFood(event, 'breakfast')} array={bf}/>
            <LogItem title='Lunch'  onDelete={(id) => deleteItem(id, 'lunch')} onPress={(event) => openAddFood(event, 'lunch')} array={lunch}/>
            <LogItem title='Dinner'  onDelete={(id) => deleteItem(id, 'dinner')} onPress={(event) => openAddFood(event, 'dinner')} array={dinner}/>
            <LogItem title='Snack'  onDelete={(id) => deleteItem(id, 'snack')} onPress={(event) => openAddFood(event, 'snack')} array={snack}/>
           
            
          </div>
        </div>

        <div id="addFood" className="add-food">
          <div className="close" onClick={closeAddFood}>
            <div></div>
            <div></div>
          </div>
          <h2> add food to {section}</h2>
          <input type="text" value={query} onChange={handleInputChange} />
          <ul>
            <li className="common">Common</li>
            {common.map((item,i) => (
            <li key={i} onClick={handleClick}> <img src={item.photo.thumb} alt="" /> {item.food_name}</li>
            ))}
            <li  className="branded">Branded</li>
            {branded.map((item,i) => (
            <li key={i} onClick={handleClick}><img src={item.photo.thumb} alt="" /> {item.food_name}</li>
            ))}
            <button>Add</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;