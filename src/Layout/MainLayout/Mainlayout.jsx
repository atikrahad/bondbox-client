import { Outlet } from "react-router-dom";
import Mainnavber from "./Shared/Mainnavber";

const Mainlayout = () => {
  return (
    <div>
      <Mainnavber></Mainnavber>
      <Outlet></Outlet>
    </div>
  );
};

export default Mainlayout;
