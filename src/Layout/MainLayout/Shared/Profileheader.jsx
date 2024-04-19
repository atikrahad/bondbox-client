/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Profileheader = ({ data }) => {

    return (
        <div className='relative'>
            <div className='pb-5 relative'>
                <img className="w-full" src={data?.groupCover} alt='cover image'></img>

                <div className='md:absolute  relative inline-block md:right-[45%] bottom-10 md:-bottom-16'>
                    <img width={100} height={20} className='w-40 rounded-full border-3 h-40' src={data?.groupPic} alt='profile pic'></img>
                    <h1 className='text-center text-2xl font-semibold'>{data?.groupName}</h1>
                    <div>
                        {
                            data?.groupName ? <h1 className='text-center'>Group Member {data?.members.length}</h1> : <h1 className='text-center'>Friends 100</h1>
                        }
                    </div>
                </div>
            </div>
            <div >
                <div className='sticky flex  py-5 items-center justify-evenly'>
                    <NavLink to={"/timeline"}>Time Line</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink className='md:pr-16' to={"/photos"}>Photos</NavLink>

                    {
                        data?.groupName ? <NavLink className='md:pl-32' to={"/photos"}>Group Members</NavLink> : <NavLink className='md:pl-32' to={"/photos"}>Friends</NavLink>
                    }
                    {
                        data?.groupName ? <button>Join group</button> : <NavLink className='md:pl-32' to={"/photos"}>Groups</NavLink>
                    }
                    {
                        data?.groupName ? <button>Invite friends</button> : <NavLink className='md:pl-32' to={"/photos"}>Friends</NavLink>
                    }

                </div>
            </div>
        </div>
    );
};

export default Profileheader;