import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router";
import Skills from "../Pages/Skills";
import SkillsDetails from "../Pages/SkillsDetails";
import MyProfile from "../Pages/MyProfile";
import Error404 from "../Pages/Error404";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('../skillData.json'),
            },
            {
                path: '/skills',
                element: <Skills></Skills>,
                loader: () => fetch('../skillData.json'),
            },
            {
                path: '/skills-details/:id',
                element: <SkillsDetails></SkillsDetails>,
                loader: () => fetch('../skillData.json'),
            },
            {
                path: '/my-profile',
                element: <MyProfile></MyProfile>
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
                path: '/*',
                Component: Error404

            }
        ]
    }
])

export default router;