import { NavLink, useNavigate } from "react-router-dom";
import useProfile from "../../../../Hooks/useProfile";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import Updateprofile from "./Updateprofile";
import { useState } from "react";
import Axiospublic from "../../../../Apis/Axiospublic";
import useAuth from "../../../../Hooks/useAuth";

const Editprofile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const userInfo = useProfile();
  const {user} = useAuth()
  
const navigate = useNavigate()
  const imageServer = import.meta.env.VITE_imageserver;

  const UpdateProfilepic = () => {
    const updateValue = {
      profilePic: profileImage,
    };

    Axiospublic.put(`/user?email=${user?.email}`, updateValue)
    .then(res=> console.log(res.data))
    navigate('/main/profile')
  };

  const UpdateCoverpic = () => {
    const updateValue = {
      coverPic : coverImage
    }
    Axiospublic.put(`/user?email=${user?.email}`, updateValue)
    .then(res => res)
    navigate('/main/profile')
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <NavLink to={"/main/profile"}>
        <IoIosArrowRoundBack className="text-3xl" />
      </NavLink>
      <div className="relative">
        <img
          className="h-[400px] w-full"
          src={coverImage === null ? userInfo?.coverPic : coverImage}
          alt="cover image"
        />
        {coverImage === null ? (
          <button
            className="absolute right-2 bottom-2"
            onClick={() => document.querySelector(".cover").click()}
          >
            <MdOutlineFileUpload className="text-4xl" />
          </button>
        ) : (
          <button
            onClick={UpdateCoverpic}
            className="absolute py-2 px-3 bg-[#00000048] right-2 bottom-2 rounded-sm text-white "
          >
            Save
          </button>
        )}

        <input
          onChange={(e) => {
            console.log(e.target.files[0]);
            const img = e.target.files[0];
            const data = new FormData();
            data.append("image", img);
            fetch(`${imageServer}`, {
              method: "POST",
              body: data,
            })
              .then((res) => res.json())
              .then((data) => setCoverImage(data.data.url));
          }}
          hidden
          type="file"
          className="cover"
        />

        <div
          className=" absolute overflow-hidden w-48 rounded-full -bottom-20"
          
        >
          <img onClick={() => document.querySelector(".profile").click()}
            className=" relative"
            src={profileImage === null ? userInfo?.profilePic : profileImage}
            alt="profile image"
          />
          {profileImage !== null && (
            <button
              onClick={UpdateProfilepic}
              className="absolute z-10 py-2 px-3 text-white font-semibold bg-[#0000007a] w-full bottom-0 rounded-2xl "
            >
              Save
            </button>
          )}
          <input
            onChange={(e) => {
              console.log(e.target.files[0]);
              const img = e.target.files[0];
              const data = new FormData();
              data.append("image", img);
              fetch(`${imageServer}`, {
                method: "POST",
                body: data,
              })
                .then((res) => res.json())
                .then((data) => setProfileImage(data.data.url));
            }}
            type="file"
            hidden
            className="profile"
          />
        </div>
      </div>
      <Updateprofile />
    </div>
  );
};

export default Editprofile;
