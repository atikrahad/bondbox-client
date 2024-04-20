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
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        index: true,
        element: <Groups></Groups>
      },
      {
        path: "/main/creategroup",
        element: <Creategroup></Creategroup>
      },
      {
        path: "/main/profile",
        element: <Profile></Profile>
      },
      {
        path: "/main/editprofile",
        element: <Editprofile></Editprofile>
      },
      {
        path: "/main/group/:id",
        element: <Groupdetails ></Groupdetails>,
        loader: ({params}) => params.id
      },
      
    ]
  }
]);
