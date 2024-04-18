import {ANSWERS_ROUTE, LOGIN_ROUTE, HOME_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Answers from "./pages/Answers";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Element: Home
    },
    {
        path: LOGIN_ROUTE,
        Element: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Element: Registration
    },
    {
        path: ANSWERS_ROUTE,
        Element: Answers
    }
]