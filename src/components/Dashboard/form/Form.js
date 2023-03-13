import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import ActivityLevel from "./ActivityLevel";
import ProfilePreview from './ProfilePreview'
import './form.css';
import { useAuth } from "../../contexts/AuthContext";
import { auth, db } from '../../Firebase/firebase';
import { updateDoc, doc } from "firebase/firestore";
import { reload } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Form() {

  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem('userData');
    return savedUserData ? JSON.parse(savedUserData) : null
  });
  const navigate = useNavigate();
  const {currentUser} = useAuth();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    gender: '',
    goal: {
      weight_goal: '',
      muscle_goal: ''
    },
    activity_level:''
    
  });

  const FormTitles = ["Welcome " + currentUser.displayName, "Tell us about you.", "Thanks! Now for your goal.", 'Your baseline activity level.', 'You did it!'];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }else if (page === 3) {
      return <ActivityLevel formData={formData} setFormData={setFormData} />;
    } else {
      return <ProfilePreview formData={formData} />
    }
  };

  async function handleClick() {
    try {
        const currentDoc = doc(db, 'users', userData.docID);
        await updateDoc(currentDoc, {
            isFilled: true,
            info: formData
        })
        const updateUserData = {
            ...userData,
            info:formData,
            isFilled:true
        };

        setUserData(updateUserData);
        localStorage.setItem('userData', JSON.stringify(updateUserData))

        window.location.reload();
    }catch(e) {
        console.log(e);
    }
}

  return (
    <div className="form">
      
      <div className="form-container" >
        <div className="progressbar">
          <div
            style={{ width: page === 0 ? "0%" : page === 1 ? "25%" : page === 2 ? '50%': page === 3 ? '75%' : '100%' }}
          ></div>
        </div>
        <div className="head" style={page === 0 ? {marginTop: '80px'}:{marginTop: '10px'}}>
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            style={page === 0 ? {display:'none'}:{display:'block'}}
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                handleClick();
  
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Create" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;