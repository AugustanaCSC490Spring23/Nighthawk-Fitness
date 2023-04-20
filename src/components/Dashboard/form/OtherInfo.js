import React from "react";

function OtherInfo({ formData, setFormData }) {
  
  return (
    <div className="other-info-container">
      <h4>You can choose up to 2 goals that match
      your needs, including one weight goal</h4>
      
      <label>
        <input value={formData.goal.weight_goal}
        onChange={(e) =>{
          setFormData({...formData, goal: 'weight_loss'})
        }}
        name="goal" type="radio" />
        <span>Lose Weight</span> 
      </label>
      
      <label>
        <input value={formData.goal.weight_goal}
        onChange={(e) =>{
          setFormData({...formData, goal: 'muscle_gain'})
        }}
        name="goal" type="radio" />
        <span>Gain Muscle</span> 
      </label>

      <label>
        <input value={formData.goal.weight_goal}
        onChange={(e) =>{
          setFormData({...formData, goal: 'strength'})
        }}
        name="goal" type="radio" />
        <span>Strength</span> 
      </label>

      <label>
        <input value={formData.goal.muscle_goal}
        onChange={(e) =>{
          setFormData({...formData, goal: 'overall_fitness'})
        }}
        name="goal" type="radio" />
        <span>Overall Fitness</span> 
      </label>
    </div>
  );
}

export default OtherInfo;