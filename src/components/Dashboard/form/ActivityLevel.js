import React from "react";

function ActivityLevel({ formData, setFormData }) {

  return (
    <div className="other-info-container">
      <h4>Tell us how you usually spend a day </h4>
      
      <label>
        <input value={formData.goal.weight_goal}
        onChange={(e) =>{
          setFormData({...formData, activity_level: 'level_1'})
        }}
        name="active" type="radio" />
        <span>Sedentary: little or no exercise</span> 
      </label>

      <label>
        <input value={formData.goal.weight_goal}
        onChange={(e) =>{
          setFormData({...formData, activity_level: 'level_2'})
        }}
        name="active" type="radio" />
        <span>Exercise 1-3 times/week</span> 
      </label>

      <label>
        <input value={formData.goal.weight_goal}
        onChange={(e) =>{
          setFormData({...formData, activity_level: 'level_3'})
        }}
        name="active" type="radio" />
        <span>Exercise 4-5 times/week</span> 
      </label>

      <label>
        <input value={formData.goal.weight_goal}
        onChange={(e) =>{
          setFormData({...formData, activity_level: 'level_4'})
        }}
        name="active" type="radio" />
        <span>Daily exercise or intense exercise 3-4 times/week</span> 
      </label>

      <label>
        <input value={formData.goal.weight_goal}
        onChange={(e) =>{
          setFormData({...formData, activity_level: 'level_5'})
        }}
        name="active" type="radio" />
        <span>Intense exercise 6-7 times/week</span> 
      </label>

      <label>
        <input value={formData.goal.weight_goal}
        onChange={(e) =>{
          setFormData({...formData, activity_level: 'level_6'})
        }}
        name="active" type="radio" />
        <span>Very intense exercise daily, or physical job</span> 
      </label>
      
    </div>
  );
}

export default ActivityLevel;