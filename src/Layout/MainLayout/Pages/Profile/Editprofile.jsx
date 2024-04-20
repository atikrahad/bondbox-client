import { NavLink } from "react-router-dom";
import useProfile from "../../../../Hooks/useProfile";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import Updateprofile from "./Updateprofile";

const Editprofile = () => {
  const userInfo = useProfile();

  return (
    <div className="max-w-screen-lg mx-auto">
      <NavLink to={"/main/profile"}>
        <IoIosArrowRoundBack className="text-3xl"/>
      </NavLink>
      <div className="relative">
        <img
          className="h-[400px] w-full"
          src={userInfo?.coverPic}
          alt="cover image"
        />
        <button
          className="absolute right-2 bottom-2"
          onClick={() => document.querySelector(".cover").click()}
        >
          <MdOutlineFileUpload className="text-4xl" />
        </button>
        <input hidden type="file" className="cover" />

        <div onClick={() => document.querySelector(".profile").click()}>
          <img
            className="absolute -bottom-20 w-48 rounded-full"
            src={userInfo?.profilePic}
            alt="profile image"
          />
          <input type="file" hidden className="profile" />
        </div>
      </div>
      <Updateprofile/>
    </div>
  );
};

export default Editprofile;
