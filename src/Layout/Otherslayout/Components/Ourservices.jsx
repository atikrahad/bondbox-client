import { FaPeopleArrows, FaWpforms} from "react-icons/fa6";
import { FaRegObjectGroup } from "react-icons/fa";
import { MdForum } from "react-icons/md";

const Ourservises = () => {
    return (
        <div className='py-40 '>
            <h1 className='text-center pb-20 text-3xl'>Which featurse do you access in this site</h1>
            <div className='grid grid-cols-1 md:gap-12  max-w-screen-lg mx-auto md:grid-cols-2 lg:grid-cols-4'>
                <div className='flex text-center gap-5 items-center flex-col justify-center'>
                    <div className=' bg-green-700 rounded-full inline-block p-5'><FaRegObjectGroup className='text-6xl text-white' /></div>
                    <h1 className='text-2xl font-medium'>Learning Groups</h1>
                    <p className='text-justify'>For learning you can create or join proffessinal group community. There every one can share valuable content</p>
                </div>
                <div className='flex text-center gap-5 items-center flex-col justify-center'>
                    <div className=' bg-green-700 rounded-full inline-block p-5'><FaWpforms className='text-6xl text-white' /></div>
                    <h1 className='text-2xl font-medium'>Share Openion</h1>
                    <p className='text-justify'>For learning you can create or join proffessinal group community. There every one can share valuable content</p>
                </div>
                <div className='flex text-center gap-5 items-center flex-col justify-center'>
                    <div className=' bg-green-700 rounded-full inline-block p-5'><FaPeopleArrows className='text-6xl text-white' /></div>
                    <h1 className='text-2xl font-medium'>Connect People</h1>
                    <p className='text-justify'>For learning you can create or join proffessinal group community. There every one can share valuable content</p>
                </div>
                <div className='flex text-center gap-5 items-center flex-col justify-center'>
                    <div className=' bg-green-700 rounded-full inline-block p-5'><MdForum className='text-6xl text-white' /></div>
                    <h1 className='text-2xl font-medium'>Real time chating</h1>
                    <p className='text-justify'>For learning you can create or join proffessinal group community. There every one can share valuable content</p>
                </div>
            </div>
        </div>
    );
};

export default Ourservises;