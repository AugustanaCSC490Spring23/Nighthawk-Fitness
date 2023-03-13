import React from "react";

function ActivityLevel({ formData, setFormData }) {

  return (
    <div className="other-info-container">
      <h4>Tell us how you usually spend a day </h4>
      
      <label>
        <input value={formData.goal.weight_goal}
        onChange={(e) =>{
          setFormData({...formData, activity_level: 'Not Active'})
        }}
        name="active" type="radio" />
        <span>Not very active</span> 
      </label>

      <label>
        <input value={formData.goal.weight_goal}
        onChange={(e) =>{
          setFormData({...formData, activity_level: 'Light Active'})
        }}
        name="active" type="radio" />
        <span>Lightly active</span> 
      </label>

      <label>
        <input value={formData.goal.weight_goal}
        onChange={(e) =>{
          setFormData({...formData, activity_level: 'Active'})
        }}
        name="active" type="radio" />
        <span>Active</span> 
      </label>

      <label>
        <input value={formData.goal.weight_goal}
        onChange={(e) =>{
          setFormData({...formData, activity_level: 'Very Active'})
        }}
        name="active" type="radio" />
        <span>Very active</span> 
      </label>
      
    </div>
  );
}

export default ActivityLevel;