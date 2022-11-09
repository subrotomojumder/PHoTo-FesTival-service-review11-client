import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import AddService from "../component/Page/AllServices/AddService";
import AllService from "../component/Page/AllServices/AllService";
import Login from "../component/Page/Login";
import Register from "../component/Page/Register";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/all-service',
                element: <PrivateRoute><AllService></AllService></PrivateRoute>
            }
        ]
    }
]);