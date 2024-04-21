/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import useProfile from "../../../Hooks/useProfile";
import { MdOutlineLogout } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";

const Groupheader = ({ data }) => {
  const userinfo = useProfile();
  const addminid = userinfo?._id;
  const groupAdmins = data?.groupAdmin;
  const groupmembers = data?.members;
  console.log(addminid);

  const findAdmin = groupAdmins?.find((item) => item._id === addminid);
  const findMember = groupmembers?.find((item) => item._id === addminid);

  return (
    <div className="relative">
      <div className="pb-5 relative">
        <img
          className="h-[400px] border w-full"
          src={data?.groupCover}
          alt="cover image"
        ></img>

        <div className="md:absolute  relative inline-block md:right-[42%] bottom-10 md:-bottom-16">
          <img
            width={100}
            height={20}
            className="w-40 rounded-full border-3 h-40"
            src={data?.groupPic}
            alt="profile pic"
          ></img>
          <h1 className="text-center text-2xl font-semibold">
            {data?.groupName}
          </h1>
          <div>
            <h1 className="text-center">
              Group Member {data?.members?.length}
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className="sticky flex gap-5 flex-wrap md:flex-nowrap  py-5 items-center justify-evenly">
          <NavLink className="md:w-full" to={`/main/group/${data?._id}`}>
            Time Line
          </NavLink>
          <NavLink className="md:w-full" to={`/main/group/${data?._id}/about`}>
            About
          </NavLink>

          <NavLink className="md:w-full md:pr-20" to={`/main/group/${data?._id}/photos`}>
            Photos
          </NavLink>

          <NavLink className="md:w-full md:pl-20" to={`/main/group/${data?._id}/members`}>
            Members
          </NavLink>

          {findAdmin && <button className=" btn">Member Request</button>}
          {!findMember && (
            <button className=" btn">Join group</button>
          ) }
          
          

          {data?.groupName && (
            <div className="dropdown w-[50%] text-right dropdown-end">
              <div tabIndex={0} role="button" className="flex justify-end m-1">
                <CiMenuKebab className="text-right" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
              >
                <li>
                  {
                    findMember && <NavLink className={"btn"} to={`/main/group/${data?._id}/invite`}>
                    Invite
                  </NavLink>
                  }
                </li>
                {!findAdmin && (
                  <li>
                    <button className="btn text-red-500">
                      <MdOutlineLogout /> Leave
                    </button>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Groupheader;
