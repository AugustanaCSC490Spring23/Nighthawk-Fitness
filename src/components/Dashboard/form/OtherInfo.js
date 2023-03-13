import React from "react";

function OtherInfo({ formData, setFormData }) {

  return (
    <div className="other-info-container">
      <h4>You can choose up to 2 goals that match
      your needs, including one weight goal</h4>
      
      <label>
        <input value={formData.goal.weight_goal}
        onChange={(e) =>{
          setFormData({...formData, goal: {
            ...formData.goal,
            weight_goal: 'Lose'
          }})
        }}
        name="weight-goal" type="radio" />
        <span>Lose Weight</span> 
      </label>
      
      <label>
        <input value={formData.goal.weight_goal}
        onChange={(e) =>{
          setFormData({...formData, goal: {
            ...formData.goal,
            weight_goal: 'Maintain'
          }})
        }}
        name="weight-goal" type="radio" />
        <span>Maintain Weight</span> 
      </label>

      <label>
        <input value={formData.goal.weight_goal}
        onChange={(e) =>{
          setFormData({...formData, goal: {
            ...formData.goal,
            weight_goal: 'Gain'
          }})
        }}
        name="weight-goal" type="radio" />
        <span>Gain Weight</span> 
      </label>

      <label>
        <input value={formData.goal.muscle_goal}
        onChange={(e) =>{
          setFormData({...formData, goal: {
            ...formData.goal,
            muscle_goal: 'Muscle'
          }})
        }}
        name="muscle-goal" type="radio" />
        <span>Gain Muscle</span> 
      </label>
    </div>
  );
}

export default OtherInfo;