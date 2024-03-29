import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, GoogleAuthProvider, updateProfile } from 'firebase/auth';
import { updateDoc,doc, setDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { auth, db, addDoc, collection, signInWithPopup, where, query, getDocs } from '../Firebase/firebase';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const  [currentUser, setCurrentUser] = useState();
    const  [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            const docRef = doc(collection(db, 'users'));
            const docData = {
                uid: user.uid,
                name: user.displayName,
                authProvider: 'google',
                email: user.email,
                docID: docRef.id,
                isFilled: false,
                isCreated: false,
                photoURL: user.photoURL
            };

            await setDoc(docRef, docData);
        }
    } catch(err) {
        console.log(err);
        alert(err.message);
    
  }
}

    async function signup(name, email, password) {
        try  {
            
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const user = res.user;
            await updateProfile(user, {displayName: name})
            const docRef = doc(collection(db, 'users'));
            const docData = {
                uid: user.uid,
                name,
                authProvider: 'local',
                email,
                docID: docRef.id,
                isFilled: false,
                isCreated: false
            };

            await setDoc(docRef, docData);

            
        }catch (err) {
            console.error(err);
            alert(err.message);
            
        } 
    }

    function login(email, password) {    
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    function logout() {
        return signOut(auth)
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()  =>  {
        const unsub  = auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
        })

        return unsub
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        signInWithGoogle,
        logout,
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
