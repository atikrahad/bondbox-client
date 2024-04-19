import avater from "../../assets/Auth/auth.gif"
import Logo from "../MainLayout/Shared/Logo";
import Registerform from "./components/Registerform";

const Register = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className='max-w-screen-lg justify-between gap-4 flex mx-auto shadow-lg'>
                <div className="h-full hidden md:contents select-none">
                    <img className="h-[%] w-[60%] lg:w-[70%] " src={avater} alt="authentication"/>
                </div>
                <div className="flex py-5 lg:w-[30%] space-y-5 flex-col justify-center items-center">
                    <Logo/>
                    <Registerform/>
                </div>
            </div>
        </div>
    );
};

export default Register;