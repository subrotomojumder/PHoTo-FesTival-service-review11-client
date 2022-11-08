import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import AddService from "../component/Page/AllServices/AddService";
import Login from "../component/Page/Login";
import Register from "../component/Page/Register";
import Main from "../Layout/Main";

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
                element: <AddService></AddService>
            }
        ]
    }
]);