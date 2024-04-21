import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/MainLayout/Mainlayout";
import Landingpage from "../Layout/Otherslayout/Pages/Landingpage/Landingpage";
import Groups from "../Layout/MainLayout/Pages/Groups/Groups";
import Creategroup from "../Layout/MainLayout/Pages/Creategroup/Creategroup";
import Profile from "../Layout/MainLayout/Pages/Profile/Profile";
import Groupdetails from "../Layout/MainLayout/Pages/GroupDetails/Groupdetails";
import Login from "../Layout/Auth/Login";
import Register from "../Layout/Auth/Register";
import Editprofile from "../Layout/MainLayout/Pages/Profile/Editprofile";
import Privatreroute from "./Privatreroute";
import Mygroupsprofile from "../Layout/MainLayout/Pages/Profile/pages/Mygroupsprofile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage></Landingpage>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/main",
    element: <Privatreroute><Mainlayout></Mainlayout></Privatreroute>,
    children:[
      {
        index: true,
        element: <Privatreroute><Groups></Groups></Privatreroute>
      },
      {
        path: "/main/creategroup",
        element: <Privatreroute><Creategroup></Creategroup></Privatreroute>
      },
      {
        path: "/main/profile",
        element: <Privatreroute><Profile></Profile></Privatreroute>,
        children:[
          {
            path: "/main/profile/groups",
            element: <Privatreroute><Mygroupsprofile></Mygroupsprofile></Privatreroute>
          }
        ] 
      },
      {
        path: "/main/editprofile",
        element: <Privatreroute><Editprofile></Editprofile></Privatreroute>
      },
      {
        path: "/main/group/:id",
        element: <Privatreroute><Groupdetails ></Groupdetails></Privatreroute>,
        loader: ({params}) => params.id
      },
      
    ]
  }
]);
