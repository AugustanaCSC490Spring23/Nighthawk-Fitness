import React,{useEffect, useState} from 'react'
import './bmical.css'
import {IoMdRefreshCircle}  from 'react-icons/io'

export default function BmiCal() {

    const [height,setHeight]=useState(0)
    const [weight,setWeight]=useState(0)
    const [bmi, setBMI]=useState(0)
    const [calculated, setCalculated] = useState(false)
    const [message, setMessage] = useState('')

    function setWeightFun(val){
        setWeight(val.target.value)
    }

    function setHeightFun(val){
        setHeight(val.target.value)
    }

    async function calcBMI() {
        try {
            await setBMI((weight / (height*height) * 703))
            setCalculated(true)
            
            
            
        }catch {
            console.log('cant calculate bmi');
        }
        
    }
   
    useEffect(() =>{
        if (bmi < 18.5) {
            setMessage('Underweight (BMI < 18.5): Your BMI score is lower than the healthy range. You may have a higher risk of malnutrition and other health problems.')
        }else if (bmi >= 18.5 && bmi <= 24.9) {
            setMessage('Normal weight (BMI 18.5 - 24.9): Your BMI score is within the healthy range. You have a lower risk of chronic diseases, such as cardiovascular disease, type 2 diabetes, and certain cancers.')
        }else if(bmi >= 25 && bmi <= 29.9) {
            setMessage('Overweight (BMI 25 - 29.9): Your BMI score is higher than the healthy range. You may have an increased risk of developing health problems, such as cardiovascular disease, type 2 diabetes, and other conditions.')
        }else if(bmi >= 30 && bmi <= 34.9) {
            setMessage('Obesity class I (BMI 30 - 34.9): Your BMI score is in the obese range. You have a higher risk of developing health problems, such as cardiovascular disease, type 2 diabetes, and other conditions.')
        }else if(bmi >= 35 && bmi <= 39.9) {
            setMessage('Obesity class II (BMI 35 - 39.9): Your BMI score is in the severely obese range. You have a significantly higher risk of developing serious health problems, such as cardiovascular disease, type 2 diabetes, and certain cancers.')
        }else if(bmi >= 40){
            setMessage('Obesity class III (BMI > 40): Your BMI score is in the morbidly obese range. You have the highest risk of developing serious health problems, such as cardiovascular disease, type 2 diabetes, and certain cancers. It is important to take action to improve your health.')
        }else {
            setMessage('Please enter a valid value')
        }
        
    },[bmi])

    function refresh() {
        setCalculated(false)
    }

  return (
    <div>
        <div className="cal" style={calculated ? {display: 'none'} : {display: 'block'}}>
            <h3>BMI Calculator</h3>
            <div className="height">
                <h4 htmlFor="">Height</h4>
                <h5>{Math.floor(height/12)}'{height%12}''</h5>
                <input type="range" step={1} min={48} max={84} value={height} placeholder="Enter your height" onChange={setHeightFun}></input>
            </div>
            <div className="weight">
                <h4 htmlFor="">Weight</h4>
                <h5>{weight} lbs</h5>
                <input type="range" step={1} min={50} max={500} value={weight} placeholder="Enter your weight" onChange={setWeightFun}></input>
            </div>
            
            <button onClick={calcBMI}>Calculate</button>
        </div>
        <div className="result" style={calculated ? {display: 'block'} : {display: 'none'}}>
            <h3>Your BMI Score</h3>
            <h2>{Math.round(bmi*100)/100}</h2>
            <p>{message}</p>
            <IoMdRefreshCircle className='refresh' onClick={refresh}/>
        </div>
    </div>
  )
}
