import { Link } from "react-router-dom";
import useMygroups from "../../../../../Hooks/useMygroups";

const Mygroupsprofile = () => {
  const myGroups = useMygroups();
  return (
    <div>
      {myGroups.map((item) => (
        <div
          key={item._id}
          className="border my-5 w-full gap-5 justify-between flex  p-3"
        >
          <img
            className="rounded-md"
            width={150}
            height={100}
            src={item?.groupPic}
            alt="GroupPIc"
          />
          <div className="h-32 w-full whitespace-pre-wrap text-ellipsis overflow-hidden">
            <h1 className="text-3xl font-medium">{item?.groupName}</h1>
            <div className="flex items-center gap-5">
              <h1 className="font-medium">Education</h1>
              <h3>Members: {item?.members?.length}</h3>
              <p>Created At: {item?.createAt.slice(0, 10)}</p>
            </div>
            <p className="">{item?.description}</p>
          </div>
          <Link className=" text-end btn" to={`/main/group/${item?._id}`}>
            View Group
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Mygroupsprofile;
