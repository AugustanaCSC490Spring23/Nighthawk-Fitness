import React,{useEffect, useState} from 'react'
import './bmical.css'


export default function BmiCal({userData}) {

    const [height,setHeight]=useState(0)
    const [weight,setWeight]=useState(0)
    const [bmi, setBMI]=useState(()  => {
        return userData.bmi ? userData.bmi[userData.bmi.length-1].score : 0
    })
    
    const [message, setMessage] = useState('')
    const [detail, setDetail] = useState('')

    function setWeightFun(val){
        setWeight(val.target.value)
    }

    function setHeightFun(val){
        setHeight(val.target.value)
    }

    console.log();
    
   
    useEffect(() =>{
        if (bmi < 18.5) {
            setMessage('Underweight (BMI < 18.5)')
            setDetail('Your BMI score is lower than the healthy range. You may have a higher risk of malnutrition and other health problems.')
        }else if (bmi >= 18.5 && bmi <= 24.9) {
            setMessage('Normal Weight (BMI 18.5 - 24.9)')
            setDetail('Your BMI score is within the healthy range. You have a lower risk of chronic diseases, such as cardiovascular disease, type 2 diabetes, and certain cancers.')
        }else if(bmi >= 25 && bmi <= 29.9) {
            setMessage('Overweight (BMI 25 - 29.9)')
            setDetail('Your BMI score is higher than the healthy range. You may have an increased risk of developing health problems, such as cardiovascular disease, type 2 diabetes, and other conditions.')
        }else if(bmi >= 30 && bmi <= 34.9) {
            setMessage('Obesity Class I (BMI 30 - 34.9)')
            setDetail('Your BMI score is in the obese range. You have a higher risk of developing health problems, such as cardiovascular disease, type 2 diabetes, and other conditions.')
        }else if(bmi >= 35 && bmi <= 39.9) {
            setMessage('Obesity Class II (BMI 35 - 39.9)')
            setDetail('Your BMI score is in the severely obese range. You have a significantly higher risk of developing serious health problems, such as cardiovascular disease, type 2 diabetes, and certain cancers.')
        }else if(bmi >= 40){
            setMessage('Obesity Class III (BMI > 40)')
            setDetail('Your BMI score is in the morbidly obese range. You have the highest risk of developing serious health problems, such as cardiovascular disease, type 2 diabetes, and certain cancers. It is important to take action to improve your health.')
        }else {
            setMessage('Please enter a valid value')
        }
        
    },[bmi])


  return (
    <div className='bmi-container'>
        
            {/* <h3>BMI Calculator</h3> */}
            {/* <div className="height">
                <h4 htmlFor="">Height</h4>
                <h5>{Math.floor(height/12)}'{height%12}''</h5>
                <input type="range" step={1} min={48} max={84} value={height} placeholder="Enter your height" onChange={setHeightFun}></input>
            </div>
            <div className="weight">
                <h4 htmlFor="">Weight</h4>
                <h5>{weight} lbs</h5>
                <input type="range" step={1} min={50} max={500} value={weight} placeholder="Enter your weight" onChange={setWeightFun}></input>
            </div>
            
            <button onClick={calcBMI}>Calculate</button> */}
        
        <div className="result" >
            <div className="result-score tabs">
                <h3>Your BMI Score</h3>
                <h2>{bmi ? Math.round(bmi*100)/100 : 0}</h2>
            </div>
            <div className="result-message tabs">
                <h4>{bmi === 0 ? 'Empty': message}</h4>
                <p>{bmi === 0 ? '' : detail}</p>
            </div>
        </div>
    </div>
  )
}
