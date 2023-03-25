import React from "react";

function ProfilePreview({ formData }) {

  return (
    <div className="other-info-container">
      <h4>This is the preview of your profile.</h4>
      <div className="info-container">
        <div className="info">
            <h5>Age</h5>
            <div className="info-data">{formData.age}</div>
        </div>
        <div className="info">
            <h5>Weight</h5>
            <div className="info-data">{formData.weight} lbs</div>
        </div>
        <div className="info">
            <h5>Height</h5>
            <div className="info-data">{formData.height.ft}'{formData.height.inch}''</div>
        </div>
        <div className="info">
            <h5>Gender</h5>
            <div className="info-data">{formData.gender}</div>
        </div>
      </div>
      
    
    </div>
  );
}

export default ProfilePreview;