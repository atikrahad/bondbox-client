import { Outlet } from "react-router-dom"
import useProfile from "../../../../Hooks/useProfile"
import Profileheader from "../../Shared/Profileheader"
import { Helmet } from "react-helmet"


const Profile = () => {
  const userInfo = useProfile()
  return (
    <div className="max-w-screen-lg space-y-10 mx-auto">
      <Helmet title="BondBox | Profile"></Helmet>
        <Profileheader data={userInfo}></Profileheader>
        <Outlet></Outlet>
    </div>
  )
}

export default Profile