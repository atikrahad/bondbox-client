import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/MainLayout/Mainlayout";
import Landingpage from "../Layout/Otherslayout/Pages/Landingpage/Landingpage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage></Landingpage>,
  },
  {
    path: "/main",
    element: <Mainlayout></Mainlayout>
  }
]);
