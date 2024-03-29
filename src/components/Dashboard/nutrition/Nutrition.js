import React, { useEffect, useState } from "react";
import './nutrition.css'
import RequestForm from "../Calories/calories-content/requestForm";
import Unit from "./Unit";
import NutritionDisplay from "./nutritionDisplay/NutritionDisplay";
import LogItem from "./LogItem";
import { db } from '../../Firebase/firebase';
import { updateDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Nutrition({onSave}) {
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem('userData');
    return savedUserData ? JSON.parse(savedUserData) : null
  });

  const navigate = useNavigate()

  const [query, setQuery] = useState("");

  const [food, setFood] = useState('')
  const [qty, setQty] = useState('')
  const [unit, setUnit] = useState('')
  const [common, setCommon] = useState([]);
  const [branded, setBranded] = useState([]);

  const [selectedItem,  setSelectedItem] = useState(null)

  const [section, setSection] = useState('')

  const [caloriesGoal, setCaloriesGoal]  = useState(0)

  async function fetchResults(query) {
    const url = `https://trackapi.nutritionix.com/v2/search/instant?query=${query}`;
    const headers = {
      "x-app-id": process.env.REACT_APP_RAPID_ID,
      "x-app-key": process.env.REACT_APP_RAPID_KEY,
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
      "x-app-id": process.env.REACT_APP_RAPID_ID,
      "x-app-key": process.env.REACT_APP_RAPID_KEY,
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

  async function handleClick(item) {
    try {
      setSelectedItem(item)
      
    }catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (selectedItem) {
      setFood(qty + ' ' + unit + ' ' + selectedItem.food_name)
      
    }
    
  },[qty, unit, selectedItem, setFood, setUnit, setQty])

  function updateNutrition(remainingCal, consumingCal, data, protein, carb, fat, sectionID) {
    const currentDoc = doc(db, 'users', userData.docID);
    updateDoc(currentDoc, {
      nutrition: {
          ...userData.nutrition,
          food_array: {
            ...userData.nutrition.food_array,
            [sectionID]: [...userData.nutrition.food_array[sectionID], data]
          },
          cal: {
            remaining: remainingCal,
            consuming: consumingCal
          },
          food_nutrition: {
            p: protein,
            c: carb,
            f: fat
          }
      }
    })
    
    const updateData = {
      ...userData,
      nutrition: {
        ...userData.nutrition,
        food_array: {
          ...userData.nutrition.food_array,
          [sectionID]: [...userData.nutrition.food_array[sectionID], data]
        },
        cal: {
          remaining: remainingCal,
          consuming: consumingCal
        },
        food_nutrition: {
          p: protein,
          c: carb,
          f: fat
        }
      }
    };
    

    setUserData(updateData);
    localStorage.setItem('userData', JSON.stringify(updateData))
  }

  function handleDeletion(remainingCal, consumingCal, protein, carb, fat, sectionID, updateArray) {
    const currentDoc = doc(db, 'users', userData.docID);
    updateDoc(currentDoc, {
      nutrition: {
          ...userData.nutrition,
          food_array: {
            ...userData.nutrition.food_array,
            [sectionID]: updateArray
          },
          cal: {
            remaining: remainingCal,
            consuming: consumingCal
          },
          food_nutrition: {
            p: protein,
            c: carb,
            f: fat
          }
      }
    })
    
    const updateData = {
      ...userData,
      nutrition: {
        ...userData.nutrition,
        food_array: {
          ...userData.nutrition.food_array,
          [sectionID]: updateArray
        },
        cal: {
          remaining: remainingCal,
          consuming: consumingCal
        },
        food_nutrition: {
          p: protein,
          c: carb,
          f: fat
        }
      }
    };

    setUserData(updateData);
    localStorage.setItem('userData', JSON.stringify(updateData))
  }

  async function logItem() {
    try {

      setUnit('')
      setQty('')
      
      await fetchNutrients(food).then((data) => {

        const remainingCal = Math.round(userData.nutrition.cal.remaining - Math.round(data.foods[0].nf_calories)) * 100 / 100;
        const consumingCal = Math.round(userData.nutrition.cal.consuming + Math.round(data.foods[0].nf_calories)) * 100 / 100;
        const protein = Math.round(userData.nutrition.food_nutrition.p  + data.foods[0].nf_protein) * 100/100;
        const carb = Math.round(userData.nutrition.food_nutrition.c  + data.foods[0].nf_total_carbohydrate) *  100/100;
        const fat = Math.round(userData.nutrition.food_nutrition.f  + data.foods[0].nf_total_fat) * 100/100;  
        
        if (section ===  'breakfast'){
          updateNutrition(remainingCal, consumingCal, data.foods[0], protein, carb, fat, section)

        }else if (section === 'lunch') {
          updateNutrition(remainingCal, consumingCal, data.foods[0], protein, carb, fat, section)

        }else if  (section === 'dinner') {
          updateNutrition(remainingCal, consumingCal, data.foods[0], protein, carb, fat, section)

        }else {
          updateNutrition(remainingCal, consumingCal, data.foods[0], protein, carb, fat, section)

        }
        
      })
      
    }catch(e) {
      console.log(e);
    }
  }

  async function deleteItem(id, sectionID) {
    let remainingCal = 0;
    let consumingCal = 0;
    let protein = 0;
    let carb = 0;
    let fat = 0;
    try {
      const updateArray = await userData.nutrition.food_array[sectionID].filter((item, index) => {
        
        if (index === id) {
          const del = item;
  
          remainingCal = Math.round(userData.nutrition.cal.remaining + Math.round(del.nf_calories)) * 100 / 100;
          consumingCal = Math.round(userData.nutrition.cal.consuming - Math.round(del.nf_calories)) * 100 / 100;
          protein = Math.round(userData.nutrition.food_nutrition.p  - Math.round(del.nf_protein)*100/100)*100/100;
          carb = Math.round(userData.nutrition.food_nutrition.c  - Math.round(del.nf_total_carbohydrate)*100/100) * 100/100;
          fat = Math.round(userData.nutrition.food_nutrition.f  - Math.round(del.nf_total_fat)*100/100) * 100 / 100
          
        }
        return index !== id
      })

      if (sectionID === 'breakfast') {
        handleDeletion(remainingCal, consumingCal, protein, carb, fat, sectionID, updateArray)
      }else if (sectionID === 'lunch') {
        handleDeletion(remainingCal, consumingCal, protein, carb, fat, sectionID, updateArray)
      }else if (sectionID === 'dinner') {
        handleDeletion(remainingCal, consumingCal, protein, carb, fat, sectionID, updateArray)
      }else {
        handleDeletion(remainingCal, consumingCal, protein, carb, fat, sectionID, updateArray)
      }

    }catch(e) {
      console.log(e);
    }
    
  }


  function reset() {
    const currentDoc = doc(db, 'users', userData.docID);
    updateDoc(currentDoc, {
      calories_goal_filled: false,
      nutrition: {
        cal: {
          remaining: 0,
          consuming: 0
        },
        food_nutrition: {
          p: 0,
          c: 0,
          f: 0
        },
        food_array: {
          breakfast: [],
          lunch: [],
          dinner: [],
          snack: []
        }
    },
      goal_calories: 0
    })
    
    const updateData = {
      ...userData,
      calories_goal_filled: false,
      nutrition: {
        cal: {
          remaining: 0,
          consuming: 0
        },
        food_nutrition: {
          p: 0,
          c: 0,
          f: 0
        },
        food_array: {
          breakfast: [],
          lunch: [],
          dinner: [],
          snack: []
        }
    },
      goal_calories: 0
    };

    onSave(updateData)
  }

  async function save() {
    const currentDoc = doc(db, 'users', userData.docID);
    try {
      const day = new Date().toDateString()
      updateDoc(currentDoc, {
        calories_goal_filled: false,
        nutrition_history: [...userData.nutrition_history, userData.nutrition],
        nutrition: {
          cal: {
            remaining: 0,
            consuming: 0
          },
          food_nutrition: {
            p: 0,
            c: 0,
            f: 0
          },
          food_array: {
            breakfast: [],
            lunch: [],
            dinner: [],
            snack: []
          },
          date: day
      },
        goal_calories: 0
      })

      const updateData = {
        ...userData,
        calories_goal_filled: false,
        nutrition_history: [...userData.nutrition_history, userData.nutrition],
        nutrition: {
          cal: {
            remaining: 0,
            consuming: 0
          },
          food_nutrition: {
            p: 0,
            c: 0,
            f: 0
          },
          food_array: {
            breakfast: [],
            lunch: [],
            dinner: [],
            snack: []
          },
          date: day
      },
        goal_calories: 0
      };
  
      onSave(updateData)
    }catch(e) {
      console.log(e);
    }
    
    
    
  }

  function openConfirm() {
    document.getElementById('confirm').classList.add('openConfirm')
  }

  function closeConfirm() {
    document.getElementById('confirm').classList.remove('openConfirm')
  }


  return (
    <div className="container nutrition">
      <div className="nutrition-container">
        <div className="manage-option">
          
          <button onClick={openConfirm}>Manage</button>
        </div>
        <div className="confirm-tab" id="confirm">
          <div className="close" onClick={closeConfirm}>
            <div></div>
            <div></div>
          </div>
          <h3>Do you want to save this history before resetting</h3>
          <div className="confirm-btn">
            <button onClick={save}>Save & Reset</button>
            <button className="reset" onClick={reset}>Reset</button>
          </div>

        </div>
        <h1>daily nutrition</h1>
        {!userData.isFilled ? <RequestForm /> : ''}
        <div className="nutrition-content"  style={userData.isFilled ? {display: 'block'}:{display:'none'}} >
          <NutritionDisplay userData={userData} consumed={userData.nutrition.cal.consuming} remain={userData.nutrition.cal.remaining} protein={userData.nutrition.food_nutrition.p} carb={userData.nutrition.food_nutrition.c} fat={userData.nutrition.food_nutrition.f}/>
          <div className="nutrition-log">

            <LogItem title='Breakfast' onDelete={(id) => deleteItem(id, 'breakfast')} onPress={(event) => openAddFood(event, 'breakfast')} array={userData.nutrition.food_array.breakfast}/>
            <LogItem title='Lunch'  onDelete={(id) => deleteItem(id, 'lunch')} onPress={(event) => openAddFood(event, 'lunch')} array={userData.nutrition.food_array.lunch}/>
            <LogItem title='Dinner'  onDelete={(id) => deleteItem(id, 'dinner')} onPress={(event) => openAddFood(event, 'dinner')} array={userData.nutrition.food_array.dinner}/>
            <LogItem title='Snack'  onDelete={(id) => deleteItem(id, 'snack')} onPress={(event) => openAddFood(event, 'snack')} array={userData.nutrition.food_array.snack}/>
           
            
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
            <li id={i} key={i} onClick={() => handleClick(item)}> <span className="item"><img src={item.photo.thumb} alt="" /> {item.food_name}</span> 
            {selectedItem === item && (<span className="item-input"><input className="quantity" value={qty} onChange={(e) => setQty(e.target.value)} placeholder={item.serving_qty} type="text" /> 
             
            <Unit item={item} unit={unit} setUnit={setUnit}/>
            <button onClick={logItem}>Add</button></span> )} </li>
            ))}
            <li  className="branded">Branded</li>
            {branded.map((item,i) => (
            <li id={i} key={i} onClick={() => handleClick(item)}> <span className="item"><img src={item.photo.thumb} alt="" /> {item.food_name}</span> 
            {selectedItem === item && (<span className="item-input"><input className="quantity" value={qty} onChange={(e) => setQty(e.target.value)} placeholder={item.serving_qty} type="text" /> 
            <input value={unit} onChange={(e) => setUnit(e.target.value)} className="unit" type="text" placeholder={item.serving_unit} />
            <Unit item={item} setUnit={setUnit}/> 
            <button onClick={logItem}>Add</button></span> )} </li>
            ))}
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;