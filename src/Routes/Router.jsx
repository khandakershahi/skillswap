import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router";
import Skills from "../Pages/Skills";
import SkillsDetails from "../Pages/SkillsDetails";
import MyProfile from "../Pages/MyProfile";
import Error404 from "../Pages/Error404";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import Loading from "../Pages/Loading";
import PrivateRoute from "../Provider/PrivateRoute";
import ForgotPasword from "../Pages/ForgotPasword";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('../skillData.json'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/skills',
                element: <Skills></Skills>,
                loader: () => fetch('../skillData.json'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/skills-details/:id',
                element: <PrivateRoute>
                    <SkillsDetails></SkillsDetails>
                </PrivateRoute>,
                loader: () => fetch('../skillData.json'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/my-profile',
                element: <PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>,
            },
            {
                path: '/auth/signup',
                Component: Signup
            },
            {
                path: '/auth/signin',
                Component: Signin
            },
            {
                path: '/auth/forgotpassword',
                Component: ForgotPasword
            },
            {
                path: '/*',
                Component: Error404

            }
        ]
    }
])

export default router;