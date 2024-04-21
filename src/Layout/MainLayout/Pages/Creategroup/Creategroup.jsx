import { useState } from "react";
import image from "../../../../assets/creategroup/image.jpg";
import Axiospublic from "../../../../Apis/Axiospublic";
import useProfile from "../../../../Hooks/useProfile";
import { useNavigate } from "react-router-dom";

const Creategroup = () => {
  const userInfo = useProfile();
  console.log(userInfo);
  const navigate = useNavigate();
  const [grouPic, setGroupPic] = useState();
  const [grouCover, setGroupCover] = useState();

  const imageServer = import.meta.env.VITE_imageserver;

  const handleCreateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const groupname = form.groupName.value;
    const description = form.description.value;
    // const addmember = form.addmember.value;
    const group = {
      groupName: groupname,
      description: description,
      member: [],
      groupPic: grouPic,
      groupCover: grouCover,
    };

    Axiospublic.post(`/group/?id=${userInfo?._id}`, group).then((res) =>
      navigate(`/main/group/${res.data?._id}`)
    );
  };
  return (
    <div className="max-w-screen-lg  mx-auto">
      <form onSubmit={handleCreateGroup}>
        <div className=" grid gap-5 grid-cols-1 md:grid-cols-9">
          <div className="grid grid-cols-1 gap-5   col-span-3">
            <input
              className="border outline-none px-5 rounded-md"
              type="text"
              name="groupName"
              placeholder="Group name"
            />
            <input
              className="border outline-none px-5 rounded-md"
              type="text"
              name="description"
              placeholder="Group Description"
            />
            <input
              className="border outline-none px-5 rounded-md"
              type="text"
              name="addmember"
              placeholder="Add Member (optional)"
            />
          </div>
          <div className="grid gap-5 col-span-6 ">
            <div
              onClick={() => document.querySelector(".cover").click()}
              className="w-full overflow-hidden border h-[350px]"
            >
              <img
                className="w-[65%] mx-auto"
                src={grouCover || image}
                alt="Upload cover"
              ></img>
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
                    .then((data) => setGroupCover(data.data.url));
                }}
                className="cover"
                hidden
                type="file"
              />
            </div>
            <div
              onClick={() => document.querySelector(".grouppic").click()}
              className="rounded-full overflow-hidden border w-40"
            >
              <img className="" src={grouPic || image} alt="Upload cover"></img>
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
                    .then((data) => setGroupPic(data.data.url));
                }}
                hidden
                className="grouppic"
                type="file"
              />
            </div>
          </div>
        </div>
        <input type="submit" className="btn my-5" value={"Create a Group"} />
      </form>
    </div>
  );
};

export default Creategroup;
