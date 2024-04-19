import { Outlet } from "react-router-dom";
import Mainnavber from "./Shared/Mainnavber";

const Mainlayout = () => {
  return (
    <div className="">
      <Mainnavber></Mainnavber>
      <div className="pt-36">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Mainlayout;
