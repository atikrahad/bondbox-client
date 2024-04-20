import useProfile from "../../../../Hooks/useProfile";
import { FaRegUser, FaAddressCard, FaPhoneVolume } from "react-icons/fa";
import { MdOutlineCastForEducation } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import Axiospublic from "../../../../Apis/Axiospublic";
import useAuth from "../../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Updateprofile = () => {
  const userInfo = useProfile();
  const { user } = useAuth();
  const Navigate = useNavigate();

  const handleUpdateprofile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const education = form.education.value;
    const social = form.social.value;

    const updateValue = {
      name: name,
      address: address,
      phone: phone,
      education: education,
      socialmedia: social,
    };

    Axiospublic.put(`/user?email=${user?.email}`, updateValue).then(
      (res) => res
    );
    Navigate("/main/profile");
  };
  return (
    <div className="pt-20 pb-32 max-w-screen-lg mx-auto relative">
      <h1 className="text-3xl uppercase py-10 font-semibold">Update Profile</h1>
      <form onSubmit={handleUpdateprofile} className="space-y-3">
        <div className="grid grid-cols-12">
          <div className="col-span-4 flex gap-5 items-center">
            <FaRegUser className="font-medium text-xl" />
            <p className=" text-2xl ">Name</p>
          </div>
          <input
            type="text"
            defaultValue={userInfo?.name}
            name="name"
            className="grid col-span-8 outline-none border-b px-5 rounded-full"
          />
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-4 flex gap-5 items-center">
            <FaAddressCard className="font-medium text-xl" />
            <p className=" text-2xl ">Address</p>
          </div>
          <input
            type="text"
            defaultValue={userInfo?.address}
            name="address"
            className="grid col-span-8 outline-none border-b px-5 rounded-full"
          />
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4 flex gap-5 items-center">
            <FaPhoneVolume className="font-medium text-xl" />
            <p className=" text-2xl ">Phone</p>
          </div>
          <input
            type="number"
            defaultValue={userInfo?.phone}
            name="phone"
            className="grid col-span-8 outline-none border-b px-5 rounded-full"
          />
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4 flex gap-5 items-center">
            <MdOutlineCastForEducation className="font-medium text-xl" />
            <p className=" text-2xl ">Education</p>
          </div>
          <input
            type="text"
            defaultValue={userInfo?.education}
            name="education"
            className="grid col-span-8 outline-none border-b px-5 rounded-full"
          />
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4  flex gap-5 items-center">
            <TbSocial className="font-medium text-xl" />
            <p className=" text-2xl ">Social Media</p>
          </div>
          <input
            type="text"
            defaultValue={userInfo?.socialmedia}
            name="social"
            className="grid col-span-8 outline-none border-b px-5 rounded-full"
          />
        </div>
        <input
          type="submit"
          value={"Update"}
          className="absolute right-0 bottom-5 btn"
        />
      </form>
    </div>
  );
};

export default Updateprofile;
