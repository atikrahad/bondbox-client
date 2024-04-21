/* eslint-disable no-unused-vars */

import pageScroll from 'page-scroll';
import Logo from "../../../Layout/MainLayout/Shared/Logo";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Landingpagenavber = () => {
    return (
        <div className="absolute w-full">
            <div className="max-w-screen-xl py-3 flex items-center justify-between mx-auto">
                <div>
                    <Logo></Logo>
                </div>

                <div className="flex items-center gap-5">

                    <div className="flex navs gap-6 items-center text-xl">
                        <button className="nav" onClick={(event) => pageScroll(500)}>Services</button>
                        <button className="nav" onClick={(event) => pageScroll(1000)}>How to start</button>
                        <button className="nav" onClick={(event) => pageScroll(1500)}>About us</button>
                        <button className="nav" onClick={(event) => pageScroll(200)}>Contact</button>
                    </div>
                    <Link to={"/login"}><button className="btn badge-ghost">Login</button></Link>
                    
                </div>
            </div>

            <button className="fixed bottom-2 btn text-2xl  right-2" onClick={(event) => pageScroll(0)}>
                <div><FaArrowUp /></div>
            </button>


        </div>
    );
};

export default Landingpagenavber;