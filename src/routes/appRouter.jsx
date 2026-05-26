import LogIn from "../pages/LogIn";
import PAnelReservas from "../pages/PAnelReservas";

export let router = [{ path: "/", element: <LogIn /> }, { path: "/reservas", element: <PAnelReservas /> }];
