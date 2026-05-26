import LogIn from "../pages/LogIn";
import PAnelReservas from "../pages/PAnelReservas";
import Dashboard from "../pages/Dashboard";
import VerReservas from "../pages/VerReservas";
import { Children } from "react";

export let router = [
  { path: "/", element: <LogIn /> },
  

  { path: "/dashboard/", 
    element: <Dashboard /> ,
    children:[
        {path:"hacer-reservas/",
        element: <PAnelReservas /> 
        },

        {path:"ver-reservas/",
        element: <VerReservas /> }
    ],
},
];
