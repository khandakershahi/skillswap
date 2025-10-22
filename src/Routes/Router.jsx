import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('./skillData.json'),
            }
        ]
    }
])

export default router;