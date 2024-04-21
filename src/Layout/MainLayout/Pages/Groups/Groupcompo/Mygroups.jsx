import { Link } from "react-router-dom";
import useMygroups from "../../../../../Hooks/useMygroups";

const Mygroups = () => {
  const mygroups = useMygroups();
  return (
    <div className="min-h-10 col-span-3 grid">
      <h1 className="text-center">My Groups</h1>
      <div className="overflow-y-scroll">
        {mygroups.map((item) => (
          <div
            className="flex gap-5 p-5 my-3 border justify-between items-start overflow-hidden"
            key={item._id}
          >
            <img className="w-14" src={item.groupPic} alt="Group pic" />
            <div className="w-full">
              <h1 className="text-xl font-semibold">{item.groupName}</h1>
              <p> Members: {item.members?.length}</p>
            </div>
            <Link className="" to={`/main/group/${item._id}`}>Visit</Link>
          </div>
        ))}
      </div>
      <Link
        to={"/main/creategroup"}
        className="border mt-5 text-center btn bg-slate-400 py-2 rounded-md"
      >
        Create a new group
      </Link>
    </div>
  );
};

export default Mygroups;
