import avater from "../../assets/Auth/auth.gif"
import Logo from "../MainLayout/Shared/Logo";
import Loginform from "./components/Loginform";
const Login = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className='max-w-screen-lg flex mx-auto shadow-lg'>
                <div className=" hidden md:contents select-none">
                    <img className="h-[%] w-[60%] lg:w-[70%]" src={avater} alt="authentication"/>
                </div>
                <div className="flex lg:w-[35%] space-y-5 flex-col justify-center items-center">
                    <Logo/>
                    <Loginform></Loginform>
                </div>
            </div>
        </div>
    );
};

export default Login;