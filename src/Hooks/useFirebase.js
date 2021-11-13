import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword,  updateProfile, signOut } from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';
import axios from 'axios';

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signUpUsingEmail = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;

                axios.post('https://desolate-island-53501.herokuapp.com/users', {
                        displayName: name,
                        email: email
                    })
                    .then((response) => {
                        if(response.statusText === 'OK' ) {
                            alert('Account Created Successfully');
                        }
                    });

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    console.log('profile Updated');
                })
            })
    }


    const signInUsingEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Observe User
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

                axios.get(`https://desolate-island-53501.herokuapp.com/users?email=${user.email}`).then((response) => {
                    if(response?.data[0]?.role === 'Admin') {
                        setIsAdmin(true);
                    }
                    setLoading(false)
                });

            } else {

            };
            // setLoading(false);
        });
    }, [auth]);


    const logOut = () => {
        signOut(auth).then(() => {
                setUser({});
            })
            .finally(() => {
                setIsAdmin(false);
                setLoading(false);
            })
    }


    return { user, signInUsingGoogle, signUpUsingEmail, signInUsingEmail, logOut, loading, isAdmin }


};

export default useFirebase;