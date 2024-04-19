import { Link } from "react-router-dom";

const Mygroups = () => {
    return (
        <div className='min-h-10 col-span-3 grid'>
            <h1 className='text-center'>My Groups</h1>
            <Link to={"/main/creategroup"} className='border mt-5 text-center btn bg-slate-400 py-2 rounded-md'>Create a new group</Link>
        </div>
    );
};

export default Mygroups;