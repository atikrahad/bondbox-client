/* eslint-disable react/prop-types */

import { Link, NavLink } from "react-router-dom";
import useProfile from "../../../Hooks/useProfile";
import { MdOutlineLogout } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";

const Profileheader = ({ data }) => {
  const userinfo = useProfile();
  const addminid = userinfo?._id;
  const groupAdmins = data?.groupAdmin;
  console.log(addminid);
  console.log(groupAdmins);

  const findAdmin = groupAdmins?.find((item) => item._id === addminid);

  return (
    <div className="relative">
      <div className="pb-5 relative">
        <img
          className="h-[400px] border w-full"
          src={data?.groupCover || data?.coverPic}
          alt="cover image"
        ></img>

        <div className="md:absolute  relative inline-block md:right-[42%] bottom-10 md:-bottom-16">
          <img
            width={100}
            height={20}
            className="w-40 rounded-full border-3 h-40"
            src={data?.groupPic || data?.profilePic}
            alt="profile pic"
          ></img>
          <h1 className="text-center text-2xl font-semibold">
            {data?.groupName || data?.name}
          </h1>
          <div>
            {data?.groupName ? (
              <h1 className="text-center">
                Group Member {data?.members.length}
              </h1>
            ) : (
              <h1 className="text-center">Friends {10}</h1>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="sticky flex gap-5 flex-wrap md:flex-nowrap  py-5 items-center justify-evenly">
          <NavLink className="md:w-full" to={"/main/profile"}>
            Time Line
          </NavLink>
          <NavLink className="md:w-full" to={"/main/profile/about"}>
            About
          </NavLink>
          {findAdmin && (
            <Link className="w-full" to={"/main/group/editgroup"}>
              Edit group
            </Link>
          )}
          <NavLink className="md:w-full md:pr-20" to={"/main/profile/photos"}>
            Photos
          </NavLink>

          {data?.groupName ? (
            <NavLink className="md:w-full md:pl-20" to={"/photos"}>
              Members
            </NavLink>
          ) : (
            <NavLink className="md:w-full md:pl-20" to={"/main/profile/friends"}>
              Friends
            </NavLink>
          )}

          {findAdmin && <button className=" btn">Member Request</button>}
          {data?.groupName && !findAdmin && (
            <button className=" btn">Join group</button>
          )}
          {data?.name && (
            <NavLink className="md:w-full" to={"/main/profile/groups"}>
              Groups
            </NavLink>
          )}
          {data?.name && (
            <NavLink className="md:w-[60%]" to={"/main/editprofile"}>
              Edit Profile
            </NavLink>
          )}

          {
            data?.groupName && <div className="dropdown w-full text-right dropdown-end">
            <div tabIndex={0} role="button" className="flex justify-end m-1">
              <CiMenuKebab className="text-right"/>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
            >
              <li>
                <NavLink className={"btn"}  to={"/main/profile"}>
                  Invite
                </NavLink>
              </li>
              {
                !findAdmin && <li>
                <button  className="btn text-red-500">
                  <MdOutlineLogout/> Leave
                </button>
              </li>
              }
            </ul>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Profileheader;
