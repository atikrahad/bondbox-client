import { MdGroups2 } from "react-icons/md";
import { FaWpforms, FaPeopleArrows } from "react-icons/fa6";
import { CiChat2 } from "react-icons/ci";

import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import useAuth from "../../../Hooks/useAuth";
import useProfile from "../../../Hooks/useProfile";
import { GrLogout } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";

const Mainnavber = () => {
  const { logout } = useAuth();
  const userInfo = useProfile();
  console.log(userInfo);
  return (
    <div className="fixed  z-20 bg-slate-50 shadow-lg w-full p-2 md:py-5">
      <div className="max-w-screen-xl flex-col gap-3 md:flex-row mx-auto flex md:items-center justify-between ">
        <div className="flex  items-center justify-between">
          <div>
            <Logo></Logo>
          </div>
          <div className="contents w-full md:hidden">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className=" m-1">
                <img
                  className="w-12 rounded-full"
                  src={userInfo?.profilePic}
                  alt=""
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to={"/home/profile"}>
                    <button className="btn">Profile</button>
                  </NavLink>
                </li>
                <li>
                  <button onClick={() => logout()} className="btn">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-4 gap-5 text-5xl">
          <NavLink to={"/main"}>
            <div className="px-5 hover:bg-slate-100">
              <MdGroups2 className="w-[95%] mx-auto" />
            </div>
          </NavLink>
          <NavLink to={"/group"}>
            <div className="px-5 hover:bg-slate-100">
              <FaWpforms className="w-[95%] mx-auto" />
            </div>
          </NavLink>
          <NavLink to={"/group"}>
            <div className="px-5 hover:bg-slate-100">
              <FaPeopleArrows className="w-[95%] mx-auto" />
            </div>
          </NavLink>
          <NavLink to={"/chat"}>
            <div className="px-5 hover:bg-slate-100">
              <CiChat2 className="w-[95%] mx-auto" />
            </div>
          </NavLink>
        </div>
        <div className="hidden md:contents">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className=" m-1">
              <img
                className="w-12 rounded-full"
                src={userInfo?.profilePic}
                alt=""
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink className={"btn"} to={"/main/profile"}>
                  <FaRegUser /> Profile
                </NavLink>
              </li>
              <li>
                <button onClick={() => logout()} className="btn">
                  <GrLogout></GrLogout> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mainnavber;
