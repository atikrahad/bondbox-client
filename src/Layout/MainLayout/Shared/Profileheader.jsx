/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Profileheader = ({ data }) => {

    return (
        <div className='relative'>
            <div className='pb-5 relative'>
                <img className="h-[400px] border w-full" src={data?.groupCover || data?.coverPic} alt='cover image'></img>

                <div className='md:absolute  relative inline-block md:right-[42%] bottom-10 md:-bottom-16'>
                    <img width={100} height={20} className='w-40 rounded-full border-3 h-40' src={data?.groupPic || data?.profilePic} alt='profile pic'></img>
                    <h1 className='text-center text-2xl font-semibold'>{data?.groupName || data?.name}</h1>
                    <div>
                        {
                            data?.groupName ? <h1 className='text-center'>Group Member {data?.members.length}</h1> : <h1 className='text-center'>Friends {10}</h1>
                        }
                    </div>
                </div>
            </div>
            <div >
                <div className='sticky flex gap-5 flex-wrap md:flex-nowrap  py-5 items-center justify-evenly'>
                    <NavLink className="md:w-full" to={"/timeline"}>Time Line</NavLink>
                    <NavLink className="md:w-full" to={"/about"}>About</NavLink>
                    <NavLink className="md:w-full md:pr-20"  to={"/photos"}>Photos</NavLink>

                    {
                        data?.groupName ? <NavLink className="md:w-full md:pl-20" to={"/photos"}>Group Members</NavLink> : <NavLink className='md:w-full md:pl-20' to={"/photos"}>Friends</NavLink>
                    }
                    {
                        data?.groupName ? <button className=" btn">Join group</button> : <NavLink className='md:w-full' to={"/photos"}>Groups</NavLink>
                    }
                    {
                        data?.groupName ? <button className="btn">Invite friends</button> : <NavLink className='md:w-[60%]' to={"/editprofile"}>Edit Profile</NavLink>
                    }

                </div>
            </div>
        </div>
    );
};

export default Profileheader;