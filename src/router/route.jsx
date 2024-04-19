import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/MainLayout/Mainlayout";
import Landingpage from "../Layout/Otherslayout/Pages/Landingpage/Landingpage";
import Groups from "../Layout/MainLayout/Pages/Groups/Groups";
import Creategroup from "../Layout/MainLayout/Pages/Creategroup/Creategroup";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage></Landingpage>,
  },
  {
    path: "/main",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        index: true,
        element: <Groups></Groups>
      },
      {
        path: "/main/creategroup",
        element: <Creategroup></Creategroup>
      }
    ]
  }
]);
