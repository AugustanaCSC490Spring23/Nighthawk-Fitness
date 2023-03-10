import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate} from "react-router-dom";
import './profile.css'
import { auth, db } from "../Firebase/firebase";
import { query, collection, getDocs, updateDoc, where, doc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";
import { logDOM } from "@testing-library/react";
import { updateProfile } from "firebase/auth";

function Profile() {


    const {currentUser} = useAuth();

    const [user, loading, error] = useAuthState(auth);
    const [id, setID] = useState('');
    const [finished, setFinished] = useState(false);
    const navigate = useNavigate();

    async function handleClick() {
        try {
            const currentDoc = doc(db, 'users', id);
            await updateDoc(currentDoc, {
                isFilled: true
            })
        }catch(e) {
            console.log(e);
        }
    }

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setID(data.docID);
            setFinished(data.isFilled)
            console.log(data.isFilled);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    }
    useEffect(() => {
        fetchUserName()
    })

    console.log(user.providerData);

    return (
        <div className="profile">
        <div className="profile__container">
            <h1 style={finished ? {color: 'red'}:{color: 'black'}}>Profile</h1>
            <div className="name">
                <h3>Name</h3>
                {currentUser.displayName}
            </div>
            <div className="email">
                <h3>Email</h3>
                {currentUser.email}
            </div>
            <button onClick={handleClick}>click</button>
            
        </div>
        </div>
    );
}
export default Profile;