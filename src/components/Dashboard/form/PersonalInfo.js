import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <h4>We're happy you're here. Let's get to know a little about you.</h4>
      <div className="age-selection">
        <div className="age-label">Age</div>
        <input
          type="text"
          placeholder="Age"
          value={formData.firstName}
          onChange={(e) => {
            setFormData({ ...formData, age: e.target.value });
          }}
        />
      </div>
      
      <div className="weight-selection">
        <div className="weight-label">Weight</div>
        <input
        type="text"
        placeholder="Weight (lbs)"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, weight: e.target.value });
        }}
        />
      </div>
      
      
      <div className="height-selection">
      <div className="height-label">Height</div>
        <div className="height-group">
          <select onChange={(e) => {
            setFormData({ ...formData, height: {
              ...formData.height,
              ft:e.target.value, 
            }});
          }}>
            <option value="">ft</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <select onChange={(e) => {
            setFormData({ ...formData, height: {
              ...formData.height,
              inch:e.target.value
              
            }});
          }}>
            <option value="">inch</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
          </select>
        </div>
        
      </div>

      <div className="gender-selection">
        <div className="gender-label">Gender</div>
        <select onChange={(e) => {
          setFormData({ ...formData, gender: e.target.value });
        }} placeholder="Gender">
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      </div>
      
    </div>
  );
}

export default PersonalInfo;