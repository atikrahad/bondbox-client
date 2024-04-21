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
import Chat from "../Layout/MainLayout/Pages/Chat/Chat";
import Forum from "../Layout/MainLayout/Pages/Forum/Forum";
import Connect from "../Layout/MainLayout/Pages/Connect/Connect";
import About from "../Layout/MainLayout/Pages/Profile/pages/About";
import Photos from "../Layout/MainLayout/Pages/Profile/pages/Photos";
import Friends from "../Layout/MainLayout/Pages/Profile/pages/Friends";
import Timeline from "../Layout/MainLayout/Pages/Profile/pages/Timeline";
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
        path: "/main/chat",
        element: <Privatreroute><Chat></Chat></Privatreroute>
      },
      {
        path: "/main/forum",
        element: <Privatreroute><Forum></Forum></Privatreroute>
      },
      {
        path: "/main/connect",
        element: <Privatreroute><Connect></Connect></Privatreroute>
      },
      {
        path: "/main/profile",
        element: <Privatreroute><Profile></Profile></Privatreroute>,
        children:[
          {
            index: true,
            element: <Privatreroute><Timeline></Timeline></Privatreroute>
          }
          ,
          {
            path: "/main/profile/groups",
            element: <Privatreroute><Mygroupsprofile></Mygroupsprofile></Privatreroute>
          }
          ,
          {
            path: "/main/profile/about",
            element: <Privatreroute><About></About></Privatreroute>
          }
          ,
          {
            path: "/main/profile/photos",
            element: <Privatreroute><Photos></Photos></Privatreroute>
          }
          ,
          {
            path: "/main/profile/friends",
            element: <Privatreroute><Friends></Friends></Privatreroute>
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
