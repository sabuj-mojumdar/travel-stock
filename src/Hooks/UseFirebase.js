import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitialize from "../Firebase/Firebase.init";

FirebaseInitialize();

const UseFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleNameChange = e => {
        setUserName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const updateProfileName = () => {
        updateProfile(auth.currentUser, { displayName: userName })
            .then(result => {

            })
    }
    const handleRegistration = () => {
        if (password.length < 6) {
            setPasswordError("password must be greater thna 6 charecter");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const info = { ...result.user, displayName: userName };
                setUser(info);
                updateProfileName();
            })
    }

    const handleLogin = e => {
        e.preventDefault();
        return signInWithEmailAndPassword(auth, email, password)
    }



    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])



    return {
        signInWithGoogle,
        handleNameChange,
        handlePasswordChange,
        handleEmailChange,
        handleRegistration,
        handleLogin,
        passwordError,
        logOut,
        user,
        isLoading
    }
}


export default UseFirebase;