
import logo1 from "../../../assets/logo/logo1.png"
import logo2 from "../../../assets/logo/logo2.png"


const Logo = () => {
    return (
        <div className="flex select-none items-baseline">
            <h1 className="text-5xl font-semibold text-[#FF914D]" >Bon</h1>
            <img className="w-9" src={logo1} alt="" />
            <img className="w-9" src={logo2} alt="" />
            <h1 className="text-5xl font-semibold text-[#0197B2]">ox</h1>
        </div>
    );
};

export default Logo;