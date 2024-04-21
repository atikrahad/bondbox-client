import { useEffect, useState } from "react";
import Axiospublic from "../Apis/Axiospublic";
import useAuth from "./useAuth";

const useMygroups = () => {
  const {userId} = useAuth()
  console.log(userId)
  const [mygroup, setMygroup] = useState([]);
  useEffect(() => {
    if(userId!== null){

        Axiospublic.get(`/group/mygroup/${userId}`).then((res) =>
          setMygroup(res.data)
        );
    }
  }, [userId]);
  return mygroup
};

export default useMygroups;
