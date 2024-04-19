import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Config/firebase";

export const Authcontext = createContext();
const Authprovider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [user, setUser] = useState(null);

  const registerHandle = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginHandle = (email, password) =>{
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = ()=>{
    setloading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setloading(false)
    });
    return unsubscribe
  }, []);

  const info = {
    registerHandle,
    loginHandle,
    user,
    loading,
    logout
  };
  return <Authcontext.Provider value={info}>{children}</Authcontext.Provider>;
};

export default Authprovider;
