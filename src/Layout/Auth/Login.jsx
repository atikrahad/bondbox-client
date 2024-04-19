import avater from "../../assets/Auth/auth.gif"
import Logo from "../MainLayout/Shared/Logo";
import Loginform from "./components/Loginform";
const Login = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className='max-w-screen-lg flex mx-auto shadow-lg'>
                <div className="w-[65%] select-none">
                    <img src={avater} alt="authentication"/>
                </div>
                <div className="flex w-[35%] space-y-5 flex-col justify-center items-center">
                    <Logo/>
                    <Loginform></Loginform>
                </div>
            </div>
        </div>
    );
};

export default Login;