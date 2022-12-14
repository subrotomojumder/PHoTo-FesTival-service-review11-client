import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import AddService from "../component/Page/AllServices/AddService";
import AllService from "../component/Page/AllServices/AllService";
import ServiceDetails from "../component/Page/AllServices/ServiceDetails";
import Blog from "../component/Page/Blog";
import Login from "../component/Page/Login";
import Register from "../component/Page/Register";
import MyReview from "../component/Page/Review/MyReview/MyReview";
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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/all-service',
                element: <AllService></AllService>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://service-review-server-lake.vercel.app/services/${params.id}`)
            },
            {
                path: '/my-reviews',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            }
        ]
    }
]);