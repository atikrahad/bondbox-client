import { useEffect, useState } from "react";
import Axiospublic from "../../../../../Apis/Axiospublic";
import { Link } from "react-router-dom";

const Allgroups = () => {
  const [inputValue, setInputValue] = useState("");
  const [groups, setGroups] = useState([]);
  const handleChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
  };
  useEffect(() => {
    Axiospublic.get(`/group/?search=${inputValue}`).then((res) =>
      setGroups(res.data)
    );
  }, [inputValue]);
  console.log(groups);
  return (
    <div className="grid groupsClass grid-cols-1 max-h-[80vh] overflow-y-scroll gap-4 col-span-6">
      <div className="pr-5 border">
        <form>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search groups"
            className="py-2 px-3 rounded-full w-full outline-none my-3 border"
          />
        </form>
      </div>
      <div className='space-y-5'>
                {
                    groups.map((item ) => (
                        <div key={item._id} className='border w-full gap-5 justify-between flex  p-3'>
                            <img className='rounded-md' width={100} height={100} src={item?.groupPic} alt="GroupPIc" />
                            <div className='h-32 w-full whitespace-pre-wrap text-ellipsis overflow-hidden'>
                                <h1 className='text-3xl font-medium'>{item?.groupName}</h1>
                                <div className='flex items-center gap-5'>
                                    <h1 className='font-medium'>Education</h1>
                                    <h3>Members: {item?.members?.length}</h3>
                                    <p>Created At: {item?.createAt.slice(0, 10)}</p>
                                </div>
                                <p className=''>{item?.description}</p>
                                
                            </div>
                            <Link to={`/main/group/${item?._id}`}>View Group</Link>
                        </div>
                    ))
                }
            </div>  
    </div>
  );
};

export default Allgroups;
