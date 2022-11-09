import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import ServiceCardDetails from "../../Pages/Home/Services/ServiceCardDetails";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/addservice/:id',
                element: <AddService></AddService>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path: '/servicecarddetails/:id',
                element: <ServiceCardDetails></ServiceCardDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },
        ]
    }
]);

export default router;