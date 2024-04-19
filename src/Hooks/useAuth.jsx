import { useContext } from "react"
import { Authcontext } from "../Apis/Context/Authprovider"


const useAuth = () => {
  const data = useContext(Authcontext)
  return data
}

export default useAuth