import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import Axiospublic from "../Apis/Axiospublic";

const useProfile = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState(null)
  useEffect(() => {
    Axiospublic.get(`/user?email=${user?.email}`)
    .then(res => setUserInfo(res.data))
  }, [user]);

  return userInfo
};

export default useProfile;
