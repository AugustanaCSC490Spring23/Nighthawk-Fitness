import React from "react";

function PersonalInfo({ formData, setFormData }) {
  
  return (
    <div className="personal-info-container">
      <h4>We're happy you're here. Let's get to know a little about you.</h4>
      <input
        type="text"
        placeholder="Age"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, age: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Weight (lbs)"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, weight: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Height (ft)"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, height: e.target.value });
        }}
      />
      <select onChange={(e) => {
          setFormData({ ...formData, gender: e.target.value });
        }} placeholder="Gender">
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
}

export default PersonalInfo;