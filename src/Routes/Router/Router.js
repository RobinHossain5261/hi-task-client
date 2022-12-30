import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MediaTasks from "../../Pages/MediaTask/MediaTasks";
import MyTask from "../../Pages/MyTask/MyTask";
import TaskUpdate from "../../Pages/MyTask/TaskUpdate";
import Register from "../../Pages/Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

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
                element: <PrivetRoute><AddTask></AddTask></PrivetRoute>
            },
            {
                path: '/mediatask',
                element: <PrivetRoute><MediaTasks></MediaTasks></PrivetRoute>
            },
            {
                path: '/mytask',
                element: <PrivetRoute><MyTask></MyTask></PrivetRoute>
            },
            {
                path: '/mytask/:id',
                element: <TaskUpdate></TaskUpdate>,
                loader: ({ params }) => fetch(`https://hi-task-server.vercel.app/myTasks/${params.id}`)
            }
        ]
    }
])