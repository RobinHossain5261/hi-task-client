import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MediaTasks from "../../Pages/MediaTask/MediaTasks";
import MyTask from "../../Pages/MyTask/MyTask";
import Register from "../../Pages/Register/Register";

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
                path: '/addtask',
                element: <AddTask></AddTask>
            },
            {
                path: '/mediatask',
                element: <MediaTasks></MediaTasks>
            },
            {
                path: '/mytask',
                element: <MyTask></MyTask>
            }
        ]
    }
])