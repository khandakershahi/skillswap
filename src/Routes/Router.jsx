import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router";
import Skills from "../Pages/Skills";
import SkillsDetails from "../Pages/SkillsDetails";

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
            }
        ]
    }
])

export default router;