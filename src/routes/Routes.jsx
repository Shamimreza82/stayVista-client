import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetiles from "../pages/RoomDetiles/RoomDetiles";
import { singleRoom } from "../api/utils";
import DashboardLayout from "../layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/room/:id', 
        element: <RoomDetiles></RoomDetiles>, 
        // loader: ({params}) => fetch(`http://localhost:5000/room/${params.id}`)
        loader: ({params}) => singleRoom(params.id)
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  { 
    path: "/signup",
    element: <SignUp />
   },
   {
    path: '/dashboard', 
    element: <DashboardLayout></DashboardLayout>, 
    children: [
      {
        
      }
    ]
   }
]);
