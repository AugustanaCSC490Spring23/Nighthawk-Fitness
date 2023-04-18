import React, { useEffect, useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import ActivityLevel from "./ActivityLevel";
import ProfilePreview from './ProfilePreview'
import './form.css';
import { useAuth } from "../../contexts/AuthContext";
import { db } from '../../Firebase/firebase';
import { updateDoc, doc } from "firebase/firestore";



function Form({onSubmit}) {

  const [allfilled, setAllfilled] = useState(true);
  const [message, setMessage] = useState('')
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem('userData');
    return savedUserData ? JSON.parse(savedUserData) : null
  });
  
  const {currentUser} = useAuth();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    age: "",
    weight: [
      {
        w: '',
        date: ''
      }
    ],
    height: {
      ft: '',
      inch: ''
    },
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
            information: formData
        })

        const updateData = {
          ...userData,
          isFilled:true,
          information: formData
        };

        onSubmit(updateData)
    }catch(e) {
        console.log(e);
    }
}


useEffect(()  => {
  if (page ===  1) {
    if (formData.age === '' || formData.weight === '' || formData.gender === '' || formData.height.ft === '' ) {
      setAllfilled(false)
    }else {
      setAllfilled(true)
    }
  }else if(page === 2) {
    if (formData.goal.weight_goal === '' && formData.goal.muscle_goal  === '') {
      setAllfilled(false)
    }else  {
      setAllfilled(true)
    }
  }else if(page === 3) {
    if ( formData.activity_level === '') {
      setAllfilled(false)
    }else  {
      setAllfilled(true)
    } 
  }else {
    setAllfilled(true)
  } 
},[formData, page])

  return (
    <div className="form">
      
      <div className="form-container" >
        <div className="progressbar">
          <div
            style={{ width: page === 0 ? "0%" : page === 1 ? "25%" : page === 2 ? '50%': page === 3 ? '75%' : '100%' }}
          ></div>
        </div>
        <div className="head" style={page === 0 ? {marginTop: '130px'}:{marginTop: '40px'}}>
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        {message}
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
            disabled={!allfilled}
          >
            {page === FormTitles.length - 1 ? "Create" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;