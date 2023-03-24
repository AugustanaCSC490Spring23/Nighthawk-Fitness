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
      <div className="height-label">Height</div>
      <div className="height-selection">
        <select >
          <option value="">ft</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
        </select>
        <select>
          <option value="">inches</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
          <option value="">11</option>
        </select>
      </div>
      <select onChange={(e) => {
          setFormData({ ...formData, gender: e.target.value });
        }} placeholder="Gender">
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}

export default PersonalInfo;