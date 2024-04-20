import useProfile from "../../../../Hooks/useProfile";
import { FaRegUser, FaAddressCard, FaPhoneVolume } from "react-icons/fa";
import { MdOutlineCastForEducation } from "react-icons/md"
import { TbSocial } from "react-icons/tb";


const Updateprofile = () => {
  const userInfo = useProfile();
  return (
    <div className="pt-20 pb-32 max-w-screen-lg mx-auto relative">
      <h1 className="text-3xl uppercase py-10 font-semibold">Update Profile</h1>
      <form className="space-y-3" >
        <div className="grid grid-cols-12">
          <div className="col-span-4 flex gap-5 items-center">
            <FaRegUser className="font-medium text-xl"/>
          <p className=" text-2xl ">Name</p>
          </div>
          <input type="text" defaultValue={userInfo?.name} className="grid col-span-8 outline-none border-b px-5 rounded-full" />
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-4 flex gap-5 items-center">
            <FaAddressCard  className="font-medium text-xl"/>
          <p className=" text-2xl ">Address</p>
          </div>
          <input type="text" defaultValue={userInfo?.address} className="grid col-span-8 outline-none border-b px-5 rounded-full" />
        </div>
        <div className="grid grid-cols-12">
        <div className="col-span-4 flex gap-5 items-center">
            <FaPhoneVolume className="font-medium text-xl"/>
          <p className=" text-2xl ">Phone</p>
          </div>
          <input type="text" defaultValue={userInfo?.phone} className="grid col-span-8 outline-none border-b px-5 rounded-full" />
        </div>
        <div className="grid grid-cols-12">
        <div className="col-span-4 flex gap-5 items-center">
            <MdOutlineCastForEducation className="font-medium text-xl"/>
          <p className=" text-2xl ">Education</p>
          </div>
          <input type="text" defaultValue={userInfo?.education} className="grid col-span-8 outline-none border-b px-5 rounded-full" />
        </div>
        <div className="grid grid-cols-12">

        <div className="col-span-4  flex gap-5 items-center">
            <TbSocial className="font-medium text-xl"/>
          <p className=" text-2xl ">Social Media</p>
          </div>
          <input type="text" defaultValue={userInfo?.socialmedia} className="grid col-span-8 outline-none border-b px-5 rounded-full" />
        </div>
        <input type="submit" value={"Update"} className="absolute right-0 bottom-5 btn" />
      </form>
    </div>
  );
};

export default Updateprofile;
