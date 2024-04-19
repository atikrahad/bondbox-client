import useProfile from "../../../../Hooks/useProfile"
import Profileheader from "../../Shared/Profileheader"


const Profile = () => {
  const userInfo = useProfile()
  return (
    <div className="max-w-screen-lg mx-auto">
        <Profileheader data={userInfo}></Profileheader>
    </div>
  )
}

export default Profile