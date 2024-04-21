import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div style={{
            background: `linear-gradient(to bottom, rgba(0, 2, 25, .185), rgba(0, 2, 25, .185)), url(https://i.ibb.co/6YySnr0/Modern-Digital-Marketing-Blog-Banner-3.png)`,
            backgroundSize: "cover"
        }} className="h-[800px] max-w-screen-2xl mx-auto flex items-center justify-center flex-col">
            <div className="w-[50%] space-y-5 mx-auto text-center">
            <h1 className="text-6xl font-semibold">Start up your virtual group with network</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore velit tenetur eaque minima sint ad animi voluptate omnis, harum, dolorem vero corrupti quo dignissimos nulla repudiandae enim saepe dolore voluptas!
            </p>
            <Link to={"/register"} className="btn">Get start</Link>
            </div>
        </div>
    );
};

export default Banner;